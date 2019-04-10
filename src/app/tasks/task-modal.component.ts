import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';




@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})

export class TaskModalComponent implements OnInit {
  private owners = [{
    label: 'Akhilesh A', value: 'Akhilesh A'
  },
  {
    label: 'Siddharth K', value: 'Siddharth K'
  } 
  ];
  
  private status = [{
    label: 'Open', value: 'Open'
  },
  {
    label: 'Close', value: 'Close'
  } 
  ];
  
  taskForm: FormGroup;
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) private data:any) { 
    this.taskForm = this.fb.group({
      task: ['',Validators.required],
      owner: ['',Validators.required],
      status: ['',Validators.required],
      startdate: ['',Validators.required],
      duedate: ['',Validators.required],
      createdby: ['',Validators.required],
      priority: ['',Validators.required],
      duration: ['',Validators.required]
    });
  }

  ngOnInit() {
    if(this.data) {
      this.prepopulateData();
    }
    // this.taskForm.get('task').setValue('Initial Task');
    

  }

prepopulateData() {
  this.taskForm.setValue({
    task: this.data.task,
    owner: this.data.owner,
    status: this.data.status,
    duration: this.data.duration,
    priority: this.data.priority,
    startdate: this.data.startdate,
    duedate: this.data.duedate,
    createdby: this.data.createdby
  });
}

  saveTask() {
    console.log(this.taskForm.value);
  }

}
