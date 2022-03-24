import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guard/auth.guard';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./views/project/project.module').then(m => m.ProjectModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'staff',
    component: UnderConstructionComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'account',
    component: UnderConstructionComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'chats',
    loadChildren: () => import('./views/chat/chat.module').then(m => m.ChatModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'jobmarket',
    component: UnderConstructionComponent,
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
