import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guard/auth.guard';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./views/project/project.module').then(m => m.ProjectModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'signin',
    loadChildren: () => import('./views/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./views/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: '**',
    redirectTo: 'projects',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
