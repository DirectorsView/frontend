import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DetailedComponent } from './detailed/detailed.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  },
  {
    path: ':id',
    component: DetailedComponent
  }
];

@NgModule({
  declarations: [
    ProjectComponent,
    DetailedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule
  ]
})
export class ProjectModule {
}
