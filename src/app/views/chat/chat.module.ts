import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatContentComponent } from './chat-content/chat-content.component';
import { RouterModule, Routes } from '@angular/router';
import { ChatSelectionComponent } from './chat-selection.component';

const routes: Routes = [
  {
    path: '',
    component: ChatSelectionComponent
  }
];

@NgModule({
  declarations: [
    ChatContentComponent
  ],
  exports: [
    ChatContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatModule {
}
