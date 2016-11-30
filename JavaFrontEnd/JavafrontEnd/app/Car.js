System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Car;
    return {
        setters:[],
        execute: function() {
            Car = (function () {
                function Car(model, description, image_path, engine, transmission, state, power, color) {
                    this.model = model;
                    this.description = description;
                    this.image_path = image_path;
                    this.engine = engine;
                    this.transmission = transmission;
                    this.state = state;
                    this.power = power;
                    this.color = color;
                }
                return Car;
            }());
            exports_1("Car", Car);
        }
    }
});
//# sourceMappingURL=Car.js.map