import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, 
  MatTableModule, 
  MatToolbarModule, 
  MatButtonModule, 
  MatIconModule, 
  MatDialogModule, 
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskModalComponent } from './task-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskModalComponent],
  entryComponents: [TaskModalComponent],
  imports: [
    CommonModule,
    MatCardModule, 
  MatTableModule, 
  MatToolbarModule, 
  MatButtonModule, 
  MatIconModule, 
  MatDialogModule, 
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  ReactiveFormsModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
