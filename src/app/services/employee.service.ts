import { Injectable } from '@angular/core';
import { Employee } from '../models/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { BackendService } from './backend.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly employeeSubject = new BehaviorSubject<Employee[]>([]);

  constructor(private readonly backend: BackendService,
              private readonly auth: AuthService) {
    this.employeeSubject = new BehaviorSubject<Employee[]>([]);

    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.backend.get<Employee[]>(`/company/${ this.auth.company!.id }/employees`).then(employees => {
      this.employeeSubject.next(employees);
    });
  }

  getEmployees(): Observable<Employee[]> {
    return this.employeeSubject;
  }
}
