import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee, Person, Project } from '../models/models';
import { BackendService } from './backend.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly projectsSubject: BehaviorSubject<Project[]>;

  constructor(private readonly backend: BackendService,
              private readonly auth: AuthService) {
    this.projectsSubject = new BehaviorSubject<Project[]>([]);
  }

  public fetchProjects(): void {
    const id = (this.auth.company ? this.auth.company.id : this.auth.person?.id) || -1;

    this.backend.get<Project[]>(`/${ this.auth.company ? 'company' : 'person' }/${ id }/projects`).then(projects => {
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

  public getProject(id: number): Promise<Project | null> {
    const project = this.projectsSubject.value.find(project => project.id === id) || null;

    if (project) {
      return new Promise<Project>(resolve => {
        resolve(project);
      });
    } else {
      return this.backend.get<Project>(`/project/${ id }`);
    }
  }

  public getProjectMembers(id: number): Promise<Person[]> {
    return this.backend.get<Person[]>(`/project/${ id }/members`);
  }

  public addProject(project: any): Promise<Project> {
    return new Promise<Project>(resolve => {
      this.backend.post<Project>('/project', project).then(project => {
        project.startTime = new Date(project.startTime);
        project.endTime = new Date(project.endTime);
        this.projectsSubject.next([ ...this.projectsSubject.value, project ]);

        resolve(project);
      });
    });
  }

  public updateProject(project: Project): Promise<Project> {
    return new Promise<Project>(resolve => {
      this.backend.put<Project>(`/project/${ project.id }`, project).then(project => {
        project.startTime = new Date(project.startTime);
        project.endTime = new Date(project.endTime);
        this.projectsSubject.next([ ...this.projectsSubject.value.filter(p => p.id !== project.id), project ]);
      });

      resolve(project);
    });
  }

  public deleteProject(id: number): Promise<void> {
    return new Promise<void>(resolve => {
      this.backend.delete<void>(`/project/${ id }`).then(() => {
        this.projectsSubject.next([ ...this.projectsSubject.value.filter(p => p.id !== id) ]);
      });

      resolve();
    });
  }

  public addMember(projectId: number, memberId: number): Promise<Employee> {
    console.log(projectId, memberId);
    console.log(`/project/${ projectId }/members`);
    return this.backend.post<Employee>(`/project/${ projectId }/members?personId=${ memberId }`, {});
  }
}
