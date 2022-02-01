import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../models/models';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly projectsSubject: BehaviorSubject<Project[]>;

  constructor(private readonly backend: BackendService) {
    this.projectsSubject = new BehaviorSubject<Project[]>([]);
  }

  public fetchProjects(): void {
    this.backend.get<Project[]>('/person/2/projects').then(projects => {
      projects.forEach(project => {
        project.startTime = new Date(project.startTime);
        project.endTime = new Date(project.endTime);
      });

      this.projectsSubject.next(projects);
    });
  }

  public getProjects(): Observable<Project[]> {
    return this.projectsSubject;
  }
}
