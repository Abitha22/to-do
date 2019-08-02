import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-myday',
  templateUrl: './myday.page.html',
  styleUrls: ['./myday.page.scss'],
})
export class MydayPage implements OnInit {

  today = Date.now();

  public tasks: Array<string> = [];
  constructor(public dataservice: DataService, public router: Router) {   }


  addTask(task: string) {
    this.dataservice.individualTaskData(task);
    this.tasks.push(task);
    console.log('tasks are' + this.tasks);
    this.dataservice.setTaskData(this.tasks);
    console.log('myday page data' + this.tasks);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  details(task) {
    this.router.navigate(['myday/details',  task]);
  }
  ngOnInit() {

  }

}
