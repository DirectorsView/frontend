import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.scss' ]
})
export class SigninComponent implements OnInit {

  public readonly formGroup: FormGroup;
  public responseMessage: string | null;

  constructor(private readonly auth: AuthService,
              private readonly router: Router) {
    this.formGroup = SigninComponent.createFormGroup();
    this.responseMessage = null;
  }

  public ngOnInit(): void {
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.auth.signIn(this.formGroup.value.email, this.formGroup.value.password).then(() => {
        this.router.navigateByUrl('/');
      }).catch(message => {
        this.responseMessage = message;
      });
    }
  }

  private static createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }
}
