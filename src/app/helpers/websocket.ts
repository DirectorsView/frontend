import { SocketClosed, WebSocketUtil } from './websocket-util';
import { Observable } from 'rxjs';

export class WebSocket {

  private socket: WebSocketUtil<string> | null;
  private readonly token: string;
  private readonly accountId: number;

  constructor(token: string, accountId: number) {
    this.socket = null;
    this.token = token;
    this.accountId = accountId;
  }

  public sendMessage(message: string): void {
    if (this.socket === null || this.socket.closed) {
      throw new SocketClosed();
    }

    this.socket.sendMessage(message);
  }

  public connect(): Observable<string> {
    if (this.socket === null) {
      this.socket = new WebSocketUtil<string>();
      this.socket.errorMessages.subscribe(eMsg => console.log(`WebSocket error: ${ eMsg }`));
      this.socket.connect(this.token, this.accountId);
    }

    return this.socket.messages;
  }

  public close(): void {
    this.socket?.close();
  }
}
