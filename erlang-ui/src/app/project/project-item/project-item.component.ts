import { Component, Input } from '@angular/core';
import { project } from '../../domain/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent {
  @Input() item: project;
}
