import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Project } from '../../models/models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent implements OnInit, OnChanges {

  @Input() public projects: Project[] | null;
  public sortedProjects: SortedProjects | null;

  constructor(private readonly auth: AuthService) {
    this.projects = null;
    this.sortedProjects = null;
  }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['projects']) {
      this.sortedProjects = this.sortProjects();
    }
  }

  public isUserCompany(): boolean {
    return !!this.auth.company;
  }

  public sortProjects(): SortedProjects {
    if (this.projects === null) {
      return { active: [], scheduled: [], inactive: [] };
    }

    const active: Project[] = [];
    const future: Project[] = [];
    const past: Project[] = [];

    this.projects.forEach((project: Project) => {
      if (Date.now() < project.endTime.getTime()
        && Date.now() > project.startTime.getTime()) {
        active.push(project);
      } else {
        if (Date.now() < project.startTime.getTime()) {
          future.push(project);
        } else {
          past.push(project);
        }
      }
    });

    return { active, scheduled: future, inactive: past };
  }
}

interface SortedProjects {
  active: Project[];
  scheduled: Project[];
  inactive: Project[];
}
