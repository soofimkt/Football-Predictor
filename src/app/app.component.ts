import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { Proxy } from '../service/proxy';

import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;
  Logs: Array<{title: string}>;

  isLoggedIn:boolean = false;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public proxy: Proxy, public events: Events, public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [      
      { title: 'Home', component: TabsPage },
      { title: 'List', component: ListPage }
    ];

    this.Logs = [
      {title: 'Login'},
      {title: 'Logout'}
    ];

    this.events.subscribe('app:loggedIn', () => {
      this.loggedIn();
      console.log("app:reg");
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.loggedIn();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    if(page.title == "Home") {
      this.events.publish('home:loggedIn');
    }
  }

  logs(log) {
    if(log.title == "Login"){
      this.isLoggedIn = true;
      this.proxy.setLogStatus(this.isLoggedIn);
    } else {
      this.isLoggedIn = false
      this.proxy.setLogStatus(this.isLoggedIn);
    }
    this.nav.setRoot(this.pages[0].component);
    this.events.publish('home:loggedIn');
  }

  loggedIn() {
    this.proxy.getLogStatus().then((log:boolean) => {
      this.isLoggedIn = log;
      console.log("app -> log", log);
    });
    console.log("app:loggedIn", this.isLoggedIn);
  }
}

