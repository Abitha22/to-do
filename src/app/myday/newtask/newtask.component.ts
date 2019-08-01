import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss'],
})
export class NewtaskComponent implements OnInit {

taskvalue: any;
  @Output()
  outEnterTask = new EventEmitter<string>();
  constructor() {
   }


  enterTask(taskList: any): Observable<any> {
    this.outEnterTask.emit(taskList.value);
    console.log(taskList.value);
    taskList.value = '';
    return taskList.value;
  }


  ngOnInit() {
  }

}
