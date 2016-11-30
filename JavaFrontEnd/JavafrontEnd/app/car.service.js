System.register(["angular2/core", "angular2/http", "rxjs/Observable", "rxjs/Rx"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var CarService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            CarService = (function () {
                function CarService(http) {
                    this.http = http;
                    this.page = 1;
                    this.getCarsUrl = "http://localhost:8080/rst2/api/cars/models?page=";
                    this.addCarUrl = "http://localhost:8080/rst2/api/cars";
                }
                CarService.prototype.getFilteredCars = function (engine, transmission, state, power, color) {
                    this.getFilteredCarsUrl = "http://localhost:8080/rst2/api/cars?page=" + this.page + "&engine=" + engine + "&transmission="
                        + transmission + "&state=" + state + "&power=" + power + "&color=" + color;
                    return this.http.get(this.getFilteredCarsUrl).toPromise().then(function (res) { return res.json(); }).catch(this.handleError);
                };
                CarService.prototype.getCars = function () {
                    return this.http.get(this.getCarsUrl + this.page).toPromise().then(function (res) { return res.json(); }).catch(this.handleError);
                };
                CarService.prototype.setPage = function (page) {
                    this.page = page;
                };
                CarService.prototype.addCar = function (model, description, image_path, engine, transmission, state, power, color) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var option = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.addCarUrl, JSON.stringify({
                        model: model, description: description, image: image_path, engine: engine, transmission: transmission, state: state, power: power, color: color
                    }), option).toPromise().then(this.extractData);
                };
                CarService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body || {};
                };
                CarService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || "Server error");
                };
                CarService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CarService);
                return CarService;
            }());
            exports_1("CarService", CarService);
        }
    }
});
//# sourceMappingURL=car.service.js.map