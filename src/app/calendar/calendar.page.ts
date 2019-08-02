import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
myDate;
format;
getTaskValue;
  constructor(private dataservice: DataService, private router: ActivatedRoute) {

   }
  date(date) {
   this.dataservice.setDueDate(this.myDate);
   this.dataservice.setPlanned(this.getTaskValue, this.myDate);
  }

  ngOnInit() {
    this.getTaskValue = this.router.snapshot.paramMap.get('duetask');
  }

}
