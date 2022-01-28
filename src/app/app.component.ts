import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public readonly isLoggedIn: Observable<boolean>;

  constructor(private readonly auth: AuthService) {
    this.isLoggedIn = this.auth.isLoggedInAsObservable;
  }
}
