import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: [ './detailed.component.scss' ]
})
export class DetailedComponent implements OnInit {

  constructor(private readonly auth: AuthService) {
  }

  public ngOnInit(): void {
  }

  public isPerson(): boolean {
    return !!this.auth.person;
  }
}
