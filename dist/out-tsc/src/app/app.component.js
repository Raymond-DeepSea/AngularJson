var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AppComponent = /** @class */ (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.title = 'Angular load data from JSON';
    }
    AppComponent.prototype.toggle = function (index) {
        this.show[index] = !this.show[index];
        if (this.show[index]) {
            this.buttonName[index] = "Hide";
        }
        else {
            this.buttonName[index] = "Show";
        }
    };
    AppComponent.prototype.fillArray = function (len) {
        for (var i = 0; i < len; i++) {
            this.show[len] = true;
            this.buttonName[len] = "Hide";
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.get('./assets/data.json').subscribe(function (data) {
            _this.arrBirds = data; // FILL THE ARRAY WITH DATA.
            console.log(_this.arrBirds[1]);
            _this.fillArray(_this.arrBirds.length);
        }, function (err) {
            console.log(err.message);
        });
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map