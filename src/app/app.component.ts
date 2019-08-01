import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatePicker } from '../../node_modules/@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  myDate;
  format;
  public appPages = [
    {
      title: 'My Day',
      url: '/myday',
      icon: 'sunny'
    },
    {
      title: 'Important',
      url: '/important',
      icon: 'star-outline'
    },
    {
      title: 'Planned',
      url: '/planned',
      icon: 'calendar'
    },
    {
      title: 'Tasks',
      url: '/tasks',
      icon: 'home'
    }
  ];

  addList(title: string) {
    this.appPages.push({
      title,
      url : title,
      icon : 'reorder'
    });
  }


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private datepicker: DatePicker
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {
  }
}
