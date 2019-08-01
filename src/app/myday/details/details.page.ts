import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private dataservice: DataService) {

   }

  taskdata: any = [];
  plannedTaskData ;
  task: any;
  add() {
console.log('input clicked');
  }

  add1() {
  console.log('icon clicked');
  }

  addToImportant(taskdata) {
    console.log('added to important' + taskdata);
    this.dataservice.setImportantTask(taskdata);
  }

  addToPlanned(taskdata ) {
    console.log('added to planned task' + taskdata);
    this.dataservice.setPlannedTaskData(taskdata);
  }
  ngOnInit() {
    this.taskdata = this.dataservice.getTaskData();
    this.task = this.dataservice.getIndividualTaskData();
  }

}
