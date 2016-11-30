import { Component, OnInit } from 'angular2/core';
import { CarService } from './car.service';
import { Car } from "./car";

@Component({
    selector: 'my-app',
    templateUrl: `app/app.component.html`,
    providers: [CarService],
    styleUrls: ["app/app.component.css"]
})

export class AppComponent implements OnInit {
    cars: Car[];
    errorString: string;
    page: number;

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.page = 1;
        this.getCars();
    }

    getFilteredCars(engine: string, transmission: string, state: string, power: string, color: string) {
        this.carService.getFilteredCars(engine, transmission, state, power, color).then(cars => this.cars = cars);
    }

    getCars() {
        this.carService.getCars().then(cars => this.cars = cars);
    }

    addCar(model: string, description: string, image_path: string, engine: string, transmission: string, state: string, power: string, color: string) {
        if (!model || !description || !image_path || !engine || !transmission || !state || !power || !color) { return; }
        this.carService.addCar(model, description, image_path, engine, transmission, state, power, color).then(car => this.cars.push(car));
        if (this.page < this.cars.length / 3) {
            this.page++;
        }
    }

    showMoreCars() {
        this.carService.setPage(++this.page);
        this.getCars(); 
    }
}
