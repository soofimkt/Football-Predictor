import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Proxy } from '../../service/proxy';


/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GooglePlus]
})
export class HomePage {
  logStatus: string;
  displayName: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;

  isLoggedIn:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus, public proxy: Proxy, public events: Events) {
    this.events.subscribe('home:loggedIn', () => {
      this.loggedIn();
      console.log("home:reg");
    });
    this.setLogStatus();
  }

  loggedIn() {
    this.proxy.getLogStatus().then((log:boolean) => {
      this.isLoggedIn = log;
      console.log("home -> log", log);
      this.setLogStatus();
    });
    console.log("home:loggedIn", this.isLoggedIn);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  login() {
  /*
    this.googlePlus.login({})
      .then(res => {
        console.log(res);
        this.displayName = res.displayName;
        this.email = res.email;
        this.familyName = res.familyName;
        this.givenName = res.givenName;
        this.userId = res.userId;
        this.imageUrl = res.imageUrl;

        this.isLoggedIn = true;
        this.proxy.setLogStatus(this.isLoggedIn);
        this.events.publish('app:loggedIn');

        this.setLogStatus();
      })
      .catch(err => console.error(err));

    */
    this.isLoggedIn = true;
        this.proxy.setLogStatus(this.isLoggedIn);
        this.events.publish('app:loggedIn');

        this.setLogStatus();  
  }

  logout() {
    this.googlePlus.logout()
      .then(res => {
        console.log(res);
        this.displayName = "";
        this.email = "";
        this.familyName = "";
        this.givenName = "";
        this.userId = "";
        this.imageUrl = "";

        this.isLoggedIn = false;
        this.proxy.setLogStatus(this.isLoggedIn);
        this.events.publish('app:loggedIn');

        this.setLogStatus();
      })
      .catch(err => console.error(err));

      
  }

  setLogStatus(status?:string) {
    if(status){
      this.logStatus = status;
    } else if(this.isLoggedIn == true){
      this.logStatus = "logedin";
    } else if(this.isLoggedIn == false){
      this.logStatus = "login";
    }
  }

  showRegister(){
    this.logStatus = "register"; 
  }

  showLogin() {
    this.logStatus = "login";
  }

}
