import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketUtil<T> {

  public messages: Subject<T>;
  public errorMessages: Subject<any>;
  private socket: WebSocketSubject<T> | null;

  constructor() {
    this.socket = null;
    this.messages = new Subject();
    this.errorMessages = new Subject();
  }

  public get closed(): boolean | undefined {
    return this.socket?.closed;
  }

  public sendMessage(message: T): void {
    if (this.socket?.closed) {
      throw new SocketClosed();
    }
    this.socket?.next(message);
  }

  public connect(token: string, accountId: number): void {
    this.socket = webSocket({
      url: `${ environment.wsUrl }/${ token }/${ accountId }`,
      deserializer: msg => msg.data
    });

    this.socket.subscribe({
      next: msg => {
        this.messages.next(msg);
      },
      error: eMsg => {
        this.errorMessages.next(eMsg);
      }
    });
  }

  public close(): void {
    this.socket?.complete();
  }
}

export class SocketClosed extends Error {
}
