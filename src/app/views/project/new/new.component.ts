import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ProjectService } from '../../../services/project.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: [ './new.component.scss' ]
})
export class NewComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private readonly auth: AuthService,
              private readonly projectService: ProjectService) {
    this.formGroup = NewComponent.createFormGroup();
  }

  private static createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      description: new FormControl('', [ Validators.required ]),
      date: new FormGroup({
          startDate: new FormControl('', [ Validators.required ]),
          endDate: new FormControl('', [ Validators.required ])
        }
      )
    });
  }

  ngOnInit(): void {
  }

  public create(): void {
    if (this.formGroup.valid) {
      const project = {
        name: this.formGroup.get('name')!.value,
        description: this.formGroup.get('description')!.value,
        startTime: formatDate(this.formGroup.get('date.startDate')!.value, 'yyyy-MM-dd', 'en-US'),
        endTime: formatDate(this.formGroup.get('date.endDate')!.value, 'yyyy-MM-dd', 'en-US'),
        company: this.auth.company!
      };

      this.projectService.addProject(project).then(() => {
        this.formGroup.reset();
        this.formGroup.markAsUntouched();
      });
    }
  }
}
