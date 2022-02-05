import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.scss' ]
})
export class SigninComponent implements OnInit {

  public readonly formGroup: FormGroup;
  public responseMessage: string | null;

  constructor(private readonly auth: AuthService,
              private readonly router: Router,
              private readonly route: ActivatedRoute) {
    this.formGroup = SigninComponent.createFormGroup();
    this.responseMessage = null;
  }

  public ngOnInit(): void {
    if (this.auth.isLoggedIn) {
      this.redirect();
    }

    this.auth.isLoggedInAsObservable.subscribe(state => {
      if (state) {
        this.redirect();
      }
    });
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.auth.signIn(this.formGroup.value.email, this.formGroup.value.password)
        .catch(message => {
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

  private redirect(): void {
    this.route.queryParams.subscribe(value => {
      this.router.navigateByUrl(value['redirectUrl'], { replaceUrl: true })
        .catch(err => {
          console.error(err);
        });
    });
  }
}
