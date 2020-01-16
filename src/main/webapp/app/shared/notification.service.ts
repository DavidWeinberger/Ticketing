import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { NavigationEnd, Router } from '@angular/router';
import { AuthServerProvider, CSRFService } from 'app/core';
import { Location } from '@angular/common';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'webstomp-client';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  connection: Promise<any> = null;
  stompClient = null;
  subscriber = null;
  connectedPromise: any;
  subscriberDict = [];
  // listener: Observable<any>;
  listenerObserver: Observer<any>[] = [];
  currentObserver: Observer<any>;
  alreadyConnectedOnce = false;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private authServerProvider: AuthServerProvider,
    private location: Location,
    // tslint:disable-next-line: no-unused-variable
    private csrfService: CSRFService
  ) {
    this.connection = this.createConnection();
    // this.listener = this.createListener();
  }

  connect() {
    // console.log('-----Connecting-Notification-Server-----');
    if (this.connectedPromise === null) {
      this.connection = this.createConnection();
    }
    // building absolute path so that websocket doesn't fail when deploying with a context path
    let url = '/websocket/notification';
    url = this.location.prepareExternalUrl(url);
    const authToken = this.authServerProvider.getToken();
    if (authToken) {
      url += '?access_token=' + authToken;
    }
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
    const headers = {};
    this.stompClient.connect(headers, () => {
      this.connectedPromise('success');
      this.connectedPromise = null;
    });
  }

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
      this.stompClient = null;
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
    this.alreadyConnectedOnce = false;
  }

  receive(listening: Observable<any>) {
    return new Observable(subscriber => {
      listening.subscribe(msg => {
        subscriber.next(msg);
      });
    });
  }

  subscribe() {
    this.connection.then(() => {
      this.subscriber = this.stompClient.subscribe('/topic/notificationChannel', data => {
        /* this.listenerObserver.forEach(observer => {
          this.currentObserver = observer;
          observer.next(data.body);
        });*/
        this.currentObserver.next(data.body);
      });
    });
  }

  unsubscribe() {
    if (this.subscriber !== null) {
      this.subscriber.unsubscribe();
    }
  }

  createListener(): Observable<any> {
    return new Observable(observer => {
      // this.listenerObserver.push(observer);
      this.currentObserver = observer;
    });
  }

  private createConnection(): Promise<any> {
    return new Promise((resolve, reject) => (this.connectedPromise = resolve));
  }
}
