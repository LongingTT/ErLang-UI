import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';

import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  declarations: [ProjectListComponent, ProjectItemComponent],
  imports: [SharedModule, ProjectRoutingModule],
})
export class ProjectModule {}
