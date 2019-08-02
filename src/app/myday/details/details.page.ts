import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
sub;
id;
  constructor(private dataservice: DataService, private router: ActivatedRoute) {

   }


  getTaskValue;
  plannedTaskData ;
  addToImportant(taskdata) {
    console.log('added to important' + taskdata);
    this.dataservice.setImportantTask(taskdata);
  }

  addToPlanned(taskdata ) {
    console.log('added to planned task' + taskdata);
    this.dataservice.setPlannedTaskData(taskdata);
  }

  ngOnInit() {
    this.getTaskValue = this.router.snapshot.paramMap.get('mytask');
    console.log('value is' + this.getTaskValue);
  }

}
