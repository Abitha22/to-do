import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-important',
  templateUrl: './important.page.html',
  styleUrls: ['./important.page.scss'],
})
export class ImportantPage implements OnInit {

 importanttask: Array<string> = [];
 // importanttask: any;
  constructor(private dataservice: DataService) { }
 // public tasks: Array<{title: string,  url: '/myday/details'}> = [];
  ngOnInit() {
    this.importanttask = this.dataservice.getImportantTask();
    // this.importanttask.push({
    //   tasks: this.dataservice.getTaskData()
    // });
  }
  // addTask(task: string) {
  //   this.dataservice.setTaskData(task);
  //   console.log('myday page data' + task);
  //   this.tasks.push({
  //     title: task,
  //      url: '/myday/details'
  //   });
  // }

}
