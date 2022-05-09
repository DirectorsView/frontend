import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../../../models/models';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VacancyService } from '../../../../services/vacancy.service';

@Component({
  selector: 'app-detailed-user',
  templateUrl: './detailed-user.component.html',
  styleUrls: [ './detailed-user.component.scss' ]
})
export class DetailedUserComponent implements OnInit {

  public vacancy: Vacancy | null;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly snackBar: MatSnackBar,
              private readonly vacancyService: VacancyService) {
    this.vacancy = null;
  }

  ngOnInit(): void {
    this.vacancyService.fetchVacancies().subscribe(() => {
      this.vacancy = this.vacancyService.getVacancyById(Number(this.route.snapshot.params['id']));
    });
  }

  public apply(id: number): void {
    this.vacancyService.apply(id).then(() => {
      this.snackBar.open(
        'You have successfully applied for this vacancy',
        'OK',
        { duration: 4000 });
    });

    this.router.navigateByUrl('/vacancies');
  }

}
