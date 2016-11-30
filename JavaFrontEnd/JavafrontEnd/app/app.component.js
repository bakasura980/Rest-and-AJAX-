System.register(['angular2/core', './car.service'], function(exports_1, context_1) {
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
    var core_1, car_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(carService) {
                    this.carService = carService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.page = 1;
                    this.getCars();
                };
                AppComponent.prototype.getFilteredCars = function (engine, transmission, state, power, color) {
                    var _this = this;
                    this.carService.getFilteredCars(engine, transmission, state, power, color).then(function (cars) { return _this.cars = cars; });
                };
                AppComponent.prototype.getCars = function () {
                    var _this = this;
                    this.carService.getCars().then(function (cars) { return _this.cars = cars; });
                };
                AppComponent.prototype.addCar = function (model, description, image_path, engine, transmission, state, power, color) {
                    var _this = this;
                    if (!model || !description || !image_path || !engine || !transmission || !state || !power || !color) {
                        return;
                    }
                    this.carService.addCar(model, description, image_path, engine, transmission, state, power, color).then(function (car) { return _this.cars.push(car); });
                    if (this.page < this.cars.length / 3) {
                        this.page++;
                    }
                };
                AppComponent.prototype.showMoreCars = function () {
                    this.carService.setPage(++this.page);
                    this.getCars();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/app.component.html",
                        providers: [car_service_1.CarService],
                        styleUrls: ["app/app.component.css"]
                    }), 
                    __metadata('design:paramtypes', [car_service_1.CarService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map