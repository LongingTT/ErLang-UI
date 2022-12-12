import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { project } from '../../domain/project.model';
import { NewProjectComponent } from '../new-project/new-project.component';
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

  constructor(private dialog: MatDialog) {}
  openNewProjectDialog() {
    this.dialog.open(NewProjectComponent);
  }
}
