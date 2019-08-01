import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  taskdata: any;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
   this.taskdata = this.dataservice.getTaskData();
  }

}
