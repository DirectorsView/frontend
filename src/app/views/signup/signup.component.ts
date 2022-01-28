import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent implements OnInit {

  public readonly formGroup: FormGroup;
  public readonly selectOptions: string[];
  public responseMessage: string | null;
  public selectedOption: string;

  constructor(private readonly auth: AuthService,
              private readonly router: Router) {
    this.formGroup = SignupComponent.createFormGroup();
    this.responseMessage = null;
    this.selectOptions = [ 'Personal', 'Company' ];
    this.selectedOption = this.selectOptions[0];

    this.onSelectionMessage();
  }

  public ngOnInit(): void {
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.auth.signUp(
        this.formGroup.value.email,
        this.formGroup.value.password,
        this.formGroup.value.firstName,
        this.formGroup.value.lastName,
        this.formGroup.value.companyName,
        this.selectedOption
      ).then(() => {
        this.router.navigateByUrl('/');
      }).catch(message => {
        this.responseMessage = message;
      });
    }
  }

  private static createFormGroup(): FormGroup {
    return new FormGroup({
      firstName: new FormControl('', [ Validators.required ]),
      lastName: new FormControl('', [ Validators.required ]),
      companyName: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required ])
    });
  }

  public onSelectionMessage(): void {
    this.formGroup.markAsUntouched();

    if (this.selectedOption === 'Personal') {
      this.formGroup.get('companyName')?.disable();
      this.formGroup.get('firstName')?.enable();
      this.formGroup.get('lastName')?.enable();
    } else if (this.selectedOption === 'Company') {
      this.formGroup.get('firstName')?.disable();
      this.formGroup.get('lastName')?.disable();
      this.formGroup.get('companyName')?.enable();
    }
  }
}
