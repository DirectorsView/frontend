import { Component, OnInit } from '@angular/core';
import { Person, Vacancy } from '../../../../models/models';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VacancyService } from '../../../../services/vacancy.service';

@Component({
  selector: 'app-detailed-company',
  templateUrl: './detailed-company.component.html',
  styleUrls: [ './detailed-company.component.scss' ]
})
export class DetailedCompanyComponent implements OnInit {

  public vacancy: Vacancy | null;
  public applicants: Person[] | null;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly snackBar: MatSnackBar,
              private readonly vacancyService: VacancyService) {
    this.vacancy = null;
    this.applicants = null;
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);

    this.vacancyService.fetchVacancies().subscribe(() => {
      this.vacancy = this.vacancyService.getVacancyById(id);
    });

    this.vacancyService.getApplicants(id)
      .then(applicants => this.applicants = applicants)
      .catch();
  }

  public decline(person: Person): void {
    this.applicants = this.applicants!.filter(a => a.id !== person.id);
  }

  public accept(person: Person): void {
    this.vacancyService.acceptApplicant(this.vacancy!.project.id, person.id)
      .then(() => {
        this.applicants = this.applicants!.filter(a => a.id !== person.id);
        this.snackBar.open(
          `Applicant "${ person.firstName } ${ person.lastName }" accepted and assigned to the project.`,
          'OK',
          { duration: 4000 }
        );
      })
      .catch(() => {
        this.snackBar.open(
          `An unexpected error occurred.`,
          'OK',
          { duration: 3000 }
        );
      });
  }

  public delete(vacancy: Vacancy): void {
    this.vacancyService.deleteVacancy(vacancy.id).then(() => {
      this.router.navigate([ '/vacancies' ]);

      this.snackBar.open(
        `Vacancy "${ vacancy.title }" deleted.`,
        'OK',
        { duration: 4000 }
      );
    }).catch(() => {
      this.snackBar.open(
        `An unexpected error occurred.`,
        'OK',
        { duration: 3000 }
      );
    });
  }
}
