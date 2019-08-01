import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-myday',
  templateUrl: './myday.page.html',
  styleUrls: ['./myday.page.scss'],
})
export class MydayPage implements OnInit {

  today = Date.now();
   b = false;

  public tasks: Array<string> = [];
  constructor(public dataservice: DataService) {   }


  addTask(task: string) {
    // this.tasks.push({
    //   title: task
    //   //  url: '/myday/details'
    // });
    this.dataservice.individualTaskData(task);
    this.tasks.push(task);
    this.dataservice.setTaskData(this.tasks);
    console.log('myday page data' + this.tasks);
  }
  viewDetails(task: string) {
  console.log('clicked' + task);
  // this.b = !this.b;
  }
  addImportant(task: string) {
    console.log('Important task' + task);
  }
  ngOnInit() {

  }

}
