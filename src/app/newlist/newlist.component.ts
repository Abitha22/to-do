import { Component, OnInit , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrls: ['./newlist.component.scss'],
})
export class NewlistComponent implements OnInit {
  @Output()
  outEnterList = new EventEmitter<string>();
  constructor() { }


  enterList(taskList: HTMLInputElement) {
    this.outEnterList.emit(taskList.value);
    console.log(taskList.value);
    taskList.value = '';
  }


  ngOnInit() {}

}
