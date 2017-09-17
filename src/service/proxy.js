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
var storage_1 = require("@ionic/storage");
var Proxy = (function () {
    function Proxy(storage) {
        this.storage = storage;
        var val = this.getLogStatus();
        if (!val) {
            this.setLogStatus(false);
        }
    }
    Proxy.prototype.Login = function () {
        this.storage.set("isLoggedIn", true);
        return this.getLogStatus();
    };
    Proxy.prototype.Logout = function () {
        this.storage.set("isLoggedIn", false);
        return this.getLogStatus();
    };
    Proxy.prototype.setLogStatus = function (logStatus) {
        this.storage.set("isLoggedIn", logStatus);
    };
    Proxy.prototype.getLogStatus = function () {
        this.storage.get('isLoggedIn').then(function (val) {
            return val;
        });
        return false;
    };
    Proxy = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [storage_1.Storage])
    ], Proxy);
    return Proxy;
}());
exports.Proxy = Proxy;
//# sourceMappingURL=proxy.js.map