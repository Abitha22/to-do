import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
taskdata: Array<string> = [];
importanttask: Array<string> = [];
plannedtask;
date;
task;
mydaytask;

  // task data

  setTaskData(taskdata) {
  this.taskdata = taskdata;
  }

  getTaskData() {
    return this.taskdata;
  }

  // important task data

  setImportantTask(importanttask) {
    this.importanttask.push(importanttask);
  }

  getImportantTask() {
    return this.importanttask;
  }

  // set date

  setDueDate(date) {
    this.date = date;
  }

  getDueDate() {
    return this.date;
  }

  // planned task data

  setPlannedTaskData(plannedtask) {
    this.plannedtask = plannedtask;
  }

  getPlannedTaskData() {
    return this.plannedtask;
  }


  // individual task data
  individualTaskData(task) {
    this.task = task;
  }

  getIndividualTaskData() {
    return this.task;
  }
  // getPlannedData() {
  //   return [{
  //     plannedTaskData : this.plannedtask ,
  //     dueDate : this.date
  //   }];
  // }

  // Myday tasks
  setMyDayTaskData(task) {
    this.mydaytask.push(task);
  }

  getMyDayTaskData() {
    return this.mydaytask;
  }
}
