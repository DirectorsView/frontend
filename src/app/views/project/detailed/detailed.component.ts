import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Person, Project } from '../../../models/models';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

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
}
