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
var tabs_1 = require("./tabs");
var home_1 = require("../home/home");
var aboutus_1 = require("../aboutus/aboutus");
var contactus_1 = require("../contactus/contactus");
var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        core_1.NgModule({
            declarations: [
                tabs_1.TabsPage,
                home_1.HomePage,
                aboutus_1.AboutusPage,
                contactus_1.ContactusPage
            ],
            imports: [
                ionic_angular_1.IonicPageModule.forChild(tabs_1.TabsPage),
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());
exports.TabsPageModule = TabsPageModule;
//# sourceMappingURL=tabs.module.js.map