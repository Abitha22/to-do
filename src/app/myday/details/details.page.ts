import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private dataservice: DataService, private router: ActivatedRoute) {

   }


  getTaskValue;
  plannedTaskData ;
  addToImportant(taskdata) {
    this.dataservice.setImportantTask(taskdata);
  }

  addToPlanned(taskdata ) {
    this.dataservice.setPlannedTaskData(taskdata);
  }

  ngOnInit() {
    this.getTaskValue = this.router.snapshot.paramMap.get('mytask');
  }

}
