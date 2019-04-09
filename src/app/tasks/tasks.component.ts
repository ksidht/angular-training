import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Tasks} from './tasks.model';
import { TaskModalComponent } from './task-modal.component';
const ELEMENT_DATA: Tasks[] = [
  {
    id: 1,
    task: 'Created Analysis Task',
    owner: 'Akhilesh A',
    status: 'Open',
    startdate: '05-30-2019',
    duedate: '06-30-2019',
    duration: 30,
    priority: 'None',
    createdby: 'Akhilesh A',
    completedon: '05-05-2019'
  },
  {
    id: 2,
    task: 'Created Develop Task',
    owner: 'Akhilesh A',
    status: 'Closed',
    startdate: '05-30-2019',
    duedate: '06-30-2019',
    duration: 30,
    priority: 'None',
    createdby: 'Akhilesh A',
    completedon: '05-05-2019'
  },
  {
    id: 3,
    task: 'Analysis 3',
    owner: 'Akhilesh A',
    status: 'Open',
    startdate: '05-30-2019',
    duedate: '06-30-2019',
    duration: 30,
    priority: 'None',
    createdby: 'Akhilesh A',
    completedon: '05-05-2019'
  },
  {
    id: 4,
    task: 'Analysis 4',
    owner: 'Akhilesh A',
    status: 'Open',
    startdate: '05-30-2019',
    duedate: '06-30-2019',
    duration: 30,
    priority: 'None',
    createdby: 'Akhilesh A',
    completedon: '05-05-2019'
  },
  {
    id: 5,
    task: 'Analysis 5',
    owner: 'Akhilesh A',
    status: 'Open',
    startdate: '05-30-2019',
    duedate: '06-30-2019',
    duration: 30,
    priority: 'None',
    createdby: 'Akhilesh A',
    completedon: '05-05-2019'
  },
  {
    id: 6,
    task: 'Analysis 6',
    owner: 'Akhilesh A',
    status: 'Open',
    startdate: '05-30-2019',
    duedate: '06-30-2019',
    duration: 30,
    priority: 'None',
    createdby: 'Akhilesh A',
    completedon: '05-05-2019'
  },
  {
    id: 7,
    task: 'Analysis 7',
    owner: 'Akhilesh A',
    status: 'Open',
    startdate: '05-30-2019',
    duedate: '06-30-2019',
    duration: 30,
    priority: 'None',
    createdby: 'Akhilesh A',
    completedon: '05-05-2019'
  },
  {
    id: 8,
    task: 'Analysis 8',
    owner: 'Akhilesh A',
    status: 'Open',
    startdate: '05-30-2019',
    duedate: '06-30-2019',
    duration: 30,
    priority: 'None',
    createdby: 'Akhilesh A',
    completedon: '05-05-2019'
  },
  {
    id: 9,
    task: 'Analysis 9',
    owner: 'Akhilesh A',
    status: 'Open',
    startdate: '05-30-2019',
    duedate: '06-30-2019',
    duration: 30,
    priority: 'None',
    createdby: 'Akhilesh A',
    completedon: '05-05-2019'
  },
  {
    id: 10,
    task: 'Analysis 10',
    owner: 'Akhilesh A',
    status: 'Open',
    startdate: '05-30-2019',
    duedate: '06-30-2019',
    duration: 30,
    priority: 'None',
    createdby: 'Akhilesh A',
    completedon: '05-05-2019'
  }
];


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private title = 'All Tasks';
  displayedColumns: string[] = [
    'id',
    'task',
    'owner',
    'status',
    'startdate',
    'duedate',
    'duration',
    'priority',
    'createdby',
    'completedon',
    'actions'
  ];
  dataSource = ELEMENT_DATA;

  constructor(private matdialog: MatDialog) { }

  ngOnInit() {
  }

  openTaskModal() {
    const dialogRef = this.matdialog.open(TaskModalComponent);

  }
}
