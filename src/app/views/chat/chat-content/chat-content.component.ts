import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Chat } from '../../../models/models';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: [ './chat-content.component.scss' ]
})
export class ChatContentComponent implements OnInit, OnChanges {

  @Input()
  public chat!: Chat;

  @Input()
  public selfId!: number;

  @ViewChild('messages')
  private readonly messagesRef!: ElementRef;


  constructor(private readonly chatService: ChatService) {
    this.chatService.getChats().subscribe(() => {
      setTimeout(() => this.scrollToBottom());
    });
  }

  public ngOnInit(): void {
  }

  public scrollToBottom(): void {
    this.messagesRef.nativeElement.scrollTo(0, this.messagesRef.nativeElement.scrollHeight);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chat']) {
      setTimeout(() => this.scrollToBottom());
    }
  }
}
