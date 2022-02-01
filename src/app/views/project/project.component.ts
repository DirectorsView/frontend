import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: [ './project.component.scss' ]
})
export class ProjectComponent implements OnInit {

  public projects: Project[] | null;

  constructor(private readonly projectsService: ProjectService) {
    this.projects = null;
  }

  public ngOnInit(): void {
    this.projectsService.fetchProjects();
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  public getActiveProjects(projects: Project[]): Project[] {
    return projects.filter(project =>
      Date.now() < project.endTime.getTime()
      && Date.now() > project.startTime.getTime());
  }
}
