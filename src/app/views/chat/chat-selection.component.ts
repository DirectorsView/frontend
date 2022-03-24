import { Component, OnInit } from '@angular/core';
import { Chat, Message } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-selection',
  templateUrl: './chat-selection.component.html',
  styleUrls: [ './chat-selection.component.scss' ]
})
export class ChatSelectionComponent implements OnInit {

  public chats: Chat[] | null;
  public selfId: number | null;
  public selectedChat: Chat | null;
  public message: string;

  constructor(private readonly auth: AuthService,
              private readonly chat: ChatService) {
    this.chats = null;
    this.selectedChat = null;
    this.message = '';
    this.selfId = this.auth.person ? this.auth.person.id : this.auth.company!.id;
  }

  public ngOnInit(): void {
    this.chat.fetchChats().then(value => {
      this.chats = value;
      this.selectedChat = this.chats[0];
    });
  }

  public selectChat(chat: Chat): void {
    this.selectedChat = chat;
  }

  public sendMessage(): void {
    if (this.message.trim().length > 0) {
      this.chat.sendMessage(this.selectedChat!.id, this.message);
    }
  }
}

export interface DisplayChat {
  id: number,
  name: string,
  token: string,
  lastMessage: Message,
}
