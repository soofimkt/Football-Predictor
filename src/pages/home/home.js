"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var google_plus_1 = require("@ionic-native/google-plus");
var proxy_1 = require("../../service/proxy");
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, googlePlus, proxy, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googlePlus = googlePlus;
        this.proxy = proxy;
        this.events = events;
        this.isLoggedIn = false;
        this.events.subscribe('home:loggedIn', function () {
            _this.loggedIn();
            console.log("home:reg");
        });
    }
    HomePage.prototype.loggedIn = function () {
        this.isLoggedIn = this.proxy.getLogStatus();
        console.log("home:loggedIn", this.isLoggedIn);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.login = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            console.log(res);
            _this.displayName = res.displayName;
            _this.email = res.email;
            _this.familyName = res.familyName;
            _this.givenName = res.givenName;
            _this.userId = res.userId;
            _this.imageUrl = res.imageUrl;
            _this.isLoggedIn = true;
            _this.proxy.setLogStatus(_this.isLoggedIn);
            _this.events.publish('app:loggedIn');
        })
            .catch(function (err) { return console.error(err); });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.googlePlus.logout()
            .then(function (res) {
            console.log(res);
            _this.displayName = "";
            _this.email = "";
            _this.familyName = "";
            _this.givenName = "";
            _this.userId = "";
            _this.imageUrl = "";
            _this.isLoggedIn = false;
            _this.proxy.setLogStatus(_this.isLoggedIn);
            _this.events.publish('app:loggedIn');
        })
            .catch(function (err) { return console.error(err); });
    };
    HomePage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'home.html',
            providers: [google_plus_1.GooglePlus]
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController, ionic_angular_1.NavParams, google_plus_1.GooglePlus, proxy_1.Proxy, ionic_angular_1.Events])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map