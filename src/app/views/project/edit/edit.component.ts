import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ProjectService } from '../../../services/project.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../../../models/models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: [ './edit.component.scss' ]
})
export class EditComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private readonly auth: AuthService,
              private readonly projectService: ProjectService,
              private readonly dialogRef: MatDialogRef<EditComponent>,
              @Inject(MAT_DIALOG_DATA) public project: Project) {
    this.formGroup = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  public save(): void {
    if (this.formGroup.valid) {
      const project: Project = {
        id: this.project.id,
        name: this.formGroup.get('name')!.value,
        description: this.formGroup.get('description')!.value,
        startTime: this.formGroup.get('date.startDate')!.value,
        endTime: this.formGroup.get('date.endDate')!.value,
        company: this.project.company
      };

      this.dialogRef.close(project);
    }
  }

  public cancel(): void {
    this.dialogRef.close(null);
  }

  private createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.project.name, [ Validators.required ]),
      description: new FormControl(this.project.description, [ Validators.required ]),
      date: new FormGroup({
          startDate: new FormControl(this.project.startTime, [ Validators.required ]),
          endDate: new FormControl(this.project.endTime, [ Validators.required ])
        }
      )
    });
  }
}
