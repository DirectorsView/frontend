import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ProjectService } from '../../../services/project.service';
import { formatDate } from '@angular/common';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/models';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: [ './new.component.scss' ]
})
export class NewComponent implements OnInit {

  public formGroup: FormGroup;
  public employees: Employee[] | null;
  public selectedEmployees: Employee[] | null;

  constructor(private readonly auth: AuthService,
              private readonly projectService: ProjectService,
              private readonly employeesService: EmployeeService) {
    this.formGroup = NewComponent.createFormGroup();
    this.employees = null;
    this.selectedEmployees = null;
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
    this.employeesService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
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

      this.projectService.addProject(project).then(project => {
        if (this.selectedEmployees) {
          console.log(project);
          this.selectedEmployees.forEach(employee => {
            this.projectService.addMember(project.id, employee.id);
          });
        }

        this.formGroup.reset();
        this.formGroup.markAsUntouched();
      });
    }
  }

  public selectionChange(employee: Employee) {
    if (!this.selectedEmployees) {
      this.selectedEmployees = [];
    }

    this.selectedEmployees.push(employee);
    this.employees = this.employees!.filter(e => e.id !== employee.id);
  }

  public removeEmployee(employee: Employee): void {
    this.employees!.push(employee);
    this.selectedEmployees = this.selectedEmployees!.filter(e => e.id !== employee.id);
  }
}
