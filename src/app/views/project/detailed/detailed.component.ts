import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person, Project } from '../../../models/models';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: [ './detailed.component.scss' ]
})
export class DetailedComponent implements OnInit {

  public project: Project | null;
  public members: Person[] | null;

  constructor(private readonly projectService: ProjectService,
              private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly dialog: MatDialog) {
    this.project = null;
    this.members = null;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);

      this.projectService.getProject(id).then(project => {
        this.project = project;
      });

      this.projectService.getProjectMembers(id).then(members => {
        this.members = members;
      });
    });
  }

  public edit(): void {
    const dialogRef = this.dialog.open(EditComponent, {
      data: this.project
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projectService.updateProject(result).then(() => {
          this.project = result;
        });
      }
    });
  }

  public addToCalendar(): void {
    if (this.project) {
      const startDate = new Date(this.project.startTime);
      let endDate = new Date(this.project.endTime);
      endDate.setDate(endDate.getDate() + 1);
      const url = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${ this.project.name }&dates=${ formatDate(startDate, 'yyyyMMdd', 'en') }/${ formatDate(endDate, 'yyyyMMdd', 'en') }&details=${ this.project.description }`;
      window.open(url, '_blank');
    }
  }

  public delete(): void {
    if (this.project) {
      this.projectService.deleteProject(this.project.id).then(() => {
        this.router.navigate([ '/projects' ]);
      });
    }
  }
}
