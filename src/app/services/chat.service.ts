import { Injectable } from '@angular/core';
import { AccountResponse, Chat, Company, Message, Person, ResponseChat } from '../models/models';
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
  private selfAccount: AccountResponse | null;

  constructor(private readonly backend: BackendService,
              private readonly auth: AuthService) {
    this.chatsSubject = new BehaviorSubject<Chat[]>([]);
    this.websockets = [];
    this.selfAccount = null;
  }

  public fetchChats(): Promise<Chat[]> {
    const id = this.auth.person ? this.auth.person.id : this.auth.company?.id;
    const selfId = this.auth.person ? this.auth.person.id : this.auth.company?.id;
    const chats: Chat[] = [];

    return new Promise(async resolve => {
      const responseChats = await this.backend.get<ResponseChat[]>(`/account/${ id }/chats`);

      for (const c of responseChats) {
        const otherAccount: AccountResponse = c.account2.id === selfId ? c.account1 : c.account2;
        const name: string = otherAccount.name ? otherAccount.name : `${ otherAccount.firstName } ${ otherAccount.lastName }`;
        const messages = await this.backend.get<Message[]>(`/chat/${ c.id }/messages`);

        this.selfAccount = c.account2.id === selfId ? c.account2 : c.account1;

        const ws = new WebSocket(c.token, this.selfAccount.id);

        ws.connect().subscribe(msg => {
          const message: Message = JSON.parse(msg) as Message;

          if (message.source.id !== this.selfAccount!.id) {
            chats.find(c => c.id === message.chat?.id)!.messages.push({
              id: Date.now(),
              time: new Date(),
              content: message.content,
              source: otherAccount as (Person | Company)
            });

            console.log(message);
            console.log(chats);

            this.chatsSubject.next(chats);
          }
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
    const chats = this.chatsSubject.getValue();

    console.log(message);

    ws.sendMessage(message);

    chats.find(c => c.id === chatId)!.messages.push({
      id: Date.now(),
      time: new Date(),
      content: message,
      source: this.selfAccount as (Person | Company)
    });

    this.chatsSubject.next(chats);
  }
}

