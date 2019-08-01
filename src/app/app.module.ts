import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NewlistComponent } from './newlist/newlist.component';
import { DatePicker } from '../../node_modules/@ionic-native/date-picker/ngx';
import { DatePickerModule } from 'ionic4-date-picker';
import { CalendarModule } from 'ion2-calendar';
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [AppComponent,
    NewlistComponent
 ],
  entryComponents: [
    NewlistComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CalendarModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatePickerModule,
    DatePicker,
    CalendarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
