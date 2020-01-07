import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from 'app/app.constants';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  socket: any;
  readonly url: string = 'ws://127.0.0.1:8180/notification/websocket';
  // readonly url: string = 'ws://10.0.0.55:8180/notification/websocket';

  constructor() {}

  listen() {
    console.log('Connect Websocket');
    const exampleSocket = new WebSocket(this.url);
    console.log('******Connected*****n*');
    return new Observable(subscriber => {
      exampleSocket.onmessage = function(event) {
        subscriber.next(event.data);
      };
    });
  }
}
