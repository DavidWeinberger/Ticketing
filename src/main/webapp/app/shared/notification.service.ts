import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  socket: any;
  readonly url: string = 'ws://127.0.0.1:8180/notification/websocket';

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
