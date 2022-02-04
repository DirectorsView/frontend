import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person, Project } from '../models/models';
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

  public getProject(id: number): Project | null {
    return this.projectsSubject.value.find(project => project.id === id) || null;
  }

  public getProjectMembers(id: number): Promise<Person[]> {
    return this.backend.get<Person[]>(`/project/${ id }/members`);
  }
}
