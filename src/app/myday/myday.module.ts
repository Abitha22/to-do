import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MydayPage } from './myday.page';
import { NewtaskComponent } from './newtask/newtask.component';


const routes: Routes = [
  {
    path: '',
    component: MydayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MydayPage ,
  NewtaskComponent]
})
export class MydayPageModule {}
