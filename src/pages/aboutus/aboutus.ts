import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Proxy } from '../../service/proxy';

/**
 * Generated class for the AboutusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public proxy: Proxy) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutusPage');
  }

  getJsonData(){
  	this.proxy.getRestData();
  }

}
