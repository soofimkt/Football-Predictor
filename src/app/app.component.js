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
var status_bar_1 = require("@ionic-native/status-bar");
var splash_screen_1 = require("@ionic-native/splash-screen");
var storage_1 = require("@ionic/storage");
var proxy_1 = require("../service/proxy");
var list_1 = require("../pages/list/list");
var tabs_1 = require("../pages/tabs/tabs");
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, proxy, events, storage) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.proxy = proxy;
        this.events = events;
        this.storage = storage;
        this.rootPage = tabs_1.TabsPage;
        this.isLoggedIn = false;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Tabs', component: tabs_1.TabsPage },
            { title: 'List', component: list_1.ListPage }
        ];
        this.Logs = [
            { title: 'Login' },
            { title: 'Logout' }
        ];
        this.events.subscribe('app:loggedIn', function () {
            _this.loggedIn();
            console.log("app:reg");
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.loggedIn();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logs = function (log) {
        if (log.title == "Login") {
            this.isLoggedIn = true;
            this.proxy.setLogStatus(this.isLoggedIn);
        }
        else {
            this.isLoggedIn = false;
            this.proxy.setLogStatus(this.isLoggedIn);
        }
        this.nav.setRoot(this.pages[0].component);
        this.events.publish('home:loggedIn');
    };
    MyApp.prototype.loggedIn = function () {
        this.isLoggedIn = this.proxy.getLogStatus();
        console.log("app:loggedIn", this.isLoggedIn);
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav),
        __metadata("design:type", ionic_angular_1.Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        core_1.Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [ionic_angular_1.Platform, status_bar_1.StatusBar, splash_screen_1.SplashScreen, proxy_1.Proxy, ionic_angular_1.Events, storage_1.Storage])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
//# sourceMappingURL=app.component.js.map