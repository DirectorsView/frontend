import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Person, Project } from '../../../models/models';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: [ './detailed.component.scss' ]
})
export class DetailedComponent implements OnInit {

  public project: Project | null;
  public members: Person[] | null;

  constructor(private readonly projectService: ProjectService,
              private readonly route: ActivatedRoute) {
    this.project = null;
    this.members = null;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.project = this.projectService.getProject(id);

      if (!this.project) {
        this.projectService.getProjects().subscribe(projects => {
          this.project = projects.find(project => project.id === id) || null;
        });

        this.projectService.fetchProjects();
      }

      this.projectService.getProjectMembers(id).then(members => {
        this.members = members;
      });
    });
  }
}
