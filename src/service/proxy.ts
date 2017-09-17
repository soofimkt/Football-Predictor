import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

@Injectable()
export class Proxy {
 
  constructor(private storage: Storage, private http: Http) {
    var val = this.getLogStatus();
    if(!val){
      this.setLogStatus(false);
    }
  }

  Login(){
    this.storage.set("isLoggedIn", true);
    return true;
  }

  Logout(){
  	this.storage.set("isLoggedIn", false);
  	return false;
  }

  setLogStatus(logStatus:boolean){
    this.storage.set("isLoggedIn", logStatus);
  }

  getLogStatus(): Promise<boolean>{
    /*
    return new Promise(resolve => {
      this.storage.get('isLoggedIn').then((val) => {
        console.log("val ", val);
        return Promise.resolve(val);
      });
    });
    */
    return this.storage.get('isLoggedIn');
  }

  getRestData(){
    this.http.get("http://localhost:8080/Bookstore/TestAPI").subscribe(data => {console.log(data)} );
  }

}