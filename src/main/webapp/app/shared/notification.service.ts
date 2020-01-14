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
  listener: Observable<any>;
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
    this.listener = this.createListener();
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

  receive() {
    return new Observable(subscriber => {
      this.listener.subscribe(msg => {
        // console.log(msg);
        subscriber.next(msg);
        if (subscriber.closed) {
          // this.unsubscribe();
          this.currentObserver.complete();
        }
      });
    });
  }

  subscribe() {
    this.connection.then(() => {
      this.subscriber = this.stompClient.subscribe('/topic/notificationChannel', data => {
        this.listenerObserver.forEach(observer => {
          if (!observer.closed) {
            this.currentObserver = observer;
            observer.next(data.body);
          } else  {
            console.log('Closing observer');
            observer.complete();
            this.listenerObserver = this.listenerObserver.filter( x => x !== observer || observer.closed);
          }
        });
      });
    });
  }

  unsubscribe() {
    if (this.subscriber !== null) {
      this.subscriber.unsubscribe();
    }
  }

  private createListener(): Observable<any> {
    return new Observable(observer => {
      this.listenerObserver.push(observer);
    });
  }

  private createConnection(): Promise<any> {
    return new Promise((resolve, reject) => (this.connectedPromise = resolve));
  }
}
