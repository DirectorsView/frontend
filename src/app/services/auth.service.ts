import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loggedInStateSubject: BehaviorSubject<boolean>;

  constructor() {
    this.loggedInStateSubject = new BehaviorSubject<boolean>(false);
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

  public signUp(email: string, password: string, firstName?: string, lastName?: string, companyName?: string, accountType?: string): Promise<string> {
    // TODO: implement backend request and user authentication
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.loggedInStateSubject.next(true);
        resolve('success');
      }, 1000);
    });
  }
}
