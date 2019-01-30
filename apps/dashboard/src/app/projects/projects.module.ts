import { LibsMaterialModule } from '@workshop/libs/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';



@NgModule({
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    LibsMaterialModule
  ]
})
export class ProjectsModule { }
