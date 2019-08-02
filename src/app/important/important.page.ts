import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-important',
  templateUrl: './important.page.html',
  styleUrls: ['./important.page.scss'],
})
export class ImportantPage implements OnInit {

 importanttask: Array<string> = [];
  constructor(private dataservice: DataService) { }
  ngOnInit() {
    this.importanttask = this.dataservice.getImportantTask();
  }
}
