import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { Project } from './models/models';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  public readonly isLoggedIn: Observable<boolean>;
  public projects: Project[] | null;

  constructor(private readonly auth: AuthService,
              private readonly projectService: ProjectService) {
    this.isLoggedIn = this.auth.isLoggedInAsObservable;
    this.projects = null;

    // this.auth.signIn('company@mail.com', 'password');

    this.isLoggedIn.subscribe(loggedIn => {
      if (loggedIn) {
        this.projectService.fetchProjects();
      }
    });
  }

  public ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }
}
