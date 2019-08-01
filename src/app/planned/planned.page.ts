import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-planned',
  templateUrl: './planned.page.html',
  styleUrls: ['./planned.page.scss'],
})
export class PlannedPage implements OnInit {
  constructor(private dataservice: DataService) { }
dueDate;
plannedTaskData;

plannedtask: Array<{plannedTaskData: string,  dueDate: any}> = [];
  ngOnInit() {
  this.dueDate =  this.dataservice.getDueDate();
  this.plannedTaskData = this.dataservice.getPlannedTaskData();
  // this.plannedtask = this.dataservice.getPlannedData();
  }

}
