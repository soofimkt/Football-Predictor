"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var home_1 = require("./home");
var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_1.HomePage,
            ],
            imports: [
                ionic_angular_1.IonicPageModule.forChild(home_1.HomePage),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());
exports.HomePageModule = HomePageModule;
//# sourceMappingURL=home.module.js.map