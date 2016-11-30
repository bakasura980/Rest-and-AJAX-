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
    var CarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            }],
        execute: function() {
            CarComponent = (function () {
                function CarComponent(carService) {
                    this.carService = carService;
                }
                CarComponent.prototype.ngOnInit = function () {
                    this.getCars();
                };
                CarComponent.prototype.getCars = function () {
                    var _this = this;
                    return this.carService.getCars().subscribe(function (cars) { return _this.cars = cars; }, function (error) { return _this.errorString = error; });
                };
                CarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/app.component.html",
                        providers: [car_service_1.CarService],
                        styleUrls: ["app/app.component.css"]
                    }), 
                    __metadata('design:paramtypes', [car_service_1.CarService])
                ], CarComponent);
                return CarComponent;
            }());
            exports_1("CarComponent", CarComponent);
        }
    }
});
//# sourceMappingURL=car.component.js.map