import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
myDate;
format;
sdate;
  constructor(private dataservice: DataService) {

   }
  date(date) {
   this.sdate = date;
   console.log('date is' + date);
   this.dataservice.setDueDate(this.myDate);
  }
  ngOnInit() {
   // this.dataservice.setDueDate(this.sdate);
  }

}
