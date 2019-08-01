import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlannedPage } from './planned.page';
import { CalendarModule } from '../../../node_modules/ion2-calendar';

const routes: Routes = [
  {
    path: '',
    component: PlannedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CalendarModule
  ],
  declarations: [PlannedPage]
})
export class PlannedPageModule {}
