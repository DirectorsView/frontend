import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.scss' ]
})
export class NavComponent implements OnInit {

  public isPerson: boolean;

  constructor(private readonly auth: AuthService) {
    this.isPerson = false;
  }

  ngOnInit(): void {
    this.auth.isLoggedInAsObservable.subscribe(() => {
      this.isPerson = !!this.auth.person;
    });
  }
}
