import { Injectable } from '@angular/core';
import { AccountResponse, Chat, Message, ResponseChat } from '../models/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { BackendService } from './backend.service';
import { AuthService } from './auth.service';
import { WebSocket } from '../helpers/websocket';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private readonly chatsSubject: BehaviorSubject<Chat[]>;
  private readonly websockets: WebSocket[];

  constructor(private readonly backend: BackendService,
              private readonly auth: AuthService) {
    this.chatsSubject = new BehaviorSubject<Chat[]>([]);
    this.websockets = [];
  }

  public fetchChats(): Promise<Chat[]> {
    const id = this.auth.person ? this.auth.person.id : this.auth.company?.id;
    const selfId = this.auth.person ? this.auth.person.id : this.auth.company?.id;
    const chats: Chat[] = [];

    return new Promise(async resolve => {
      const responseChats = await this.backend.get<ResponseChat[]>(`/account/${ id }/chats`);

      for (const c of responseChats) {
        const otherAccount: AccountResponse = c.account2.id === selfId ? c.account1 : c.account2;
        const selfAccount: AccountResponse = c.account2.id === selfId ? c.account2 : c.account1;
        const name: string = otherAccount.name ? otherAccount.name : `${ otherAccount.firstName } ${ otherAccount.lastName }`;

        const messages = await this.backend.get<Message[]>(`/chat/${ c.id }/messages`);
        const ws = new WebSocket(c.token, selfAccount.id);

        console.log(c.token, selfAccount.id);

        ws.connect().subscribe(message => {
          console.log(message);
        });

        this.websockets[c.id] = ws;

        const chat: Chat = {
          id: c.id,
          name,
          token: c.token,
          messages: messages.map(m => {
            return {
              ...m,
              time: new Date(m.time)
            };
          }),
          users: [
            c.account1,
            c.account2
          ]
        } as Chat;

        chats.push(chat);
      }

      this.chatsSubject.next(chats);
      resolve(chats);
    });
  }

  public getChats(): Observable<Chat[]> {
    return this.chatsSubject;
  }

  public sendMessage(chatId: number, message: string): void {
    const ws = this.websockets[chatId];
    ws.sendMessage(message);
  }
}

