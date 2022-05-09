import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../models/models';
import { VacancyService } from '../../services/vacancy.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: [ './vacancies.component.scss' ]
})
export class VacanciesComponent implements OnInit {

  public vacancies: Vacancy[] | null;

  constructor(private readonly vacancy: VacancyService) {
    this.vacancies = null;
  }

  ngOnInit(): void {
    this.vacancy.fetchVacancies().subscribe(vacancies => this.vacancies = vacancies.filter(v => v.opened));
  }

}
