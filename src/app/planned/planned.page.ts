import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-planned',
  templateUrl: './planned.page.html',
  styleUrls: ['./planned.page.scss'],
})
export class PlannedPage implements OnInit {
  constructor(private dataservice: DataService) { }
plannedtask: Array<{plannedTaskData: string,  dueDate: any}> = [];
  ngOnInit() {
  this.plannedtask = this.dataservice.getPlannedData();
  console.log(this.plannedtask);
  }

}
