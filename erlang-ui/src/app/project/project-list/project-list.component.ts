import { Component } from '@angular/core';
import { project } from '../../domain/project.model';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  projects: project[] = [
    {
      name: 'pppp1',
      desc: 'this is test proj',
    },
    {
      name: 'pppp2',
      desc: 'this is test proj',
    },
  ];
}
