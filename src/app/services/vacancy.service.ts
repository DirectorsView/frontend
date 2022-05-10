import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Person, Vacancy } from '../models/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private readonly vacancySubject: BehaviorSubject<Vacancy[]>;

  constructor(private readonly backend: BackendService,
              private readonly auth: AuthService) {
    this.vacancySubject = new BehaviorSubject<Vacancy[]>([]);
  }

  public fetchVacancies(): Observable<Vacancy[]> {
    this.backend.get<Vacancy[]>('/vacancy').then(vacancies => {
      vacancies = vacancies.map(v => {
        return {
          ...v,
          deadline: new Date(v.deadline)
        };
      });

      this.vacancySubject.next(vacancies);
    });

    return this.vacancySubject;
  }

  public getVacancies(): Observable<Vacancy[]> {
    return this.vacancySubject;
  }

  public getVacancyById(id: number): Vacancy | null {
    return this.vacancySubject.value.find(v => v.id === id) || null;
  }

  public apply(vacancyId: number): Promise<Person> {
    return new Promise((resolve, reject) => {
      if (this.auth.person) {
        this.backend.post<Person>(
          `/vacancy/${ vacancyId }/applicants?personId=${ this.auth.person.id }`,
          null
        ).then(person => resolve(person));
      } else {
        reject('No person logged in');
      }
    });
  }

  public getApplicants(vacancyId: number): Promise<Person[]> {
    return this.backend.get<Person[]>(`/vacancy/${ vacancyId }/applicants`);
  }

  public acceptApplicant(projectId: number, personId: number): Promise<Person> {
    return this.backend.post<Person>(`/project/${ projectId }/members?personId=${ personId }`, null);
  }

  public deleteVacancy(id: number): Promise<void> {
    return this.backend.delete(`/vacancy/${ id }`);
  }
}
