import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  // readonly url: string = 'ws://127.0.0.1:8180/notification/websocket';
  readonly url: string = 'ws://134.255.233.103:8180/notification/websocket';

  constructor() {}

  listen() {
    console.log('Connect Websocket');
    const exampleSocket = new WebSocket(this.url);
    console.log('******Connected******');
    return new Observable(subscriber => {
      exampleSocket.onmessage = function(event) {
        subscriber.next(event.data);
      };
    });
  }
}
