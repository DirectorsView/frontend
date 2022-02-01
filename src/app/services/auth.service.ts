import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BackendService } from './backend.service';
import { Company, Person } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loggedInStateSubject: BehaviorSubject<boolean>;
  public person: Person | null;
  public company: Company | null;

  constructor(private readonly backend: BackendService) {
    this.loggedInStateSubject = new BehaviorSubject<boolean>(false);
    this.person = null;
    this.company = null;
  }

  public get isLoggedIn(): boolean {
    return this.loggedInStateSubject.value;
  }

  public get isLoggedInAsObservable(): Observable<boolean> {
    return this.loggedInStateSubject;
  }

  public signIn(email: string, password: string): Promise<string> {
    // TODO: implement backend request and user authentication
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.loggedInStateSubject.next(true);
        resolve('success');
      }, 1000);
    });
  }

  public signUpAsCompany(email: string, password: string, companyName: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.backend.post<Company>('/company', {
        email,
        password,
        companyName
      }).then(company => {
        this.company = company;
        this.loggedInStateSubject.next(true);
        resolve('success');
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public signUpAsPerson(email: string, password: string, firstName: string, lastName: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.backend.post<Person>('/person', {
        email,
        password,
        firstName,
        lastName
      }).then(person => {
        this.person = person;
        this.loggedInStateSubject.next(true);
        resolve('success');
      }).catch(reason => {
        reject(reason);
      });
    });
  }
}
