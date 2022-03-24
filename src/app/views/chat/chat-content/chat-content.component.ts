import { Component, Input, OnInit } from '@angular/core';
import { Chat } from '../../../models/models';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: [ './chat-content.component.scss' ]
})
export class ChatContentComponent implements OnInit {

  @Input()
  public chat!: Chat;

  @Input()
  public selfId!: number;

  constructor() {
  }

  public ngOnInit(): void {
  }
}
