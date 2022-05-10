import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesComponent } from './vacancies.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DetailedComponent } from './detailed/detailed.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DetailedUserComponent } from './detailed/detailed-user/detailed-user.component';
import { DetailedCompanyComponent } from './detailed/detailed-company/detailed-company.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: '',
    component: VacanciesComponent
  },
  {
    path: ':id',
    component: DetailedComponent
  }
];

@NgModule({
  declarations: [
    VacanciesComponent,
    DetailedComponent,
    DetailedUserComponent,
    DetailedCompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class VacanciesModule {
}
