import { Injectable } from "angular2/core";
import { Http, Response, Headers, RequestOptions } from "angular2/http";
import { Observable } from "rxjs/Observable";
import { Car } from "./Car";

import "rxjs/Rx";

@Injectable()
export class CarService{
    constructor(private http: Http) {
    }

    private page = 1;


    private getCarsUrl = "http://localhost:8080/rst2/api/cars/models?page="; 

    private addCarUrl = "http://localhost:8080/rst2/api/cars";

    private getFilteredCarsUrl: string;

        
    getFilteredCars(engine: string, transmission: string, state: string, power: string, color: string): Promise<Car[]> {
        this.getFilteredCarsUrl = "http://localhost:8080/rst2/api/cars?page=" + this.page + "&engine=" + engine + "&transmission="
            + transmission + "&state=" + state + "&power=" + power + "&color=" + color;
        return this.http.get(this.getFilteredCarsUrl).toPromise().then(res => res.json() as Car[]).catch(this.handleError);
    }

    getCars(): Promise<Car[]>{

        return this.http.get(this.getCarsUrl + this.page).toPromise().then(res => res.json() as Car[]).catch(this.handleError);
    }

    setPage(page: number) {
        this.page = page;
    }

    addCar(model: string, description: string, image_path: string,engine: string, transmission: string, state: string, power: string, color: string): Promise<Car> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let option = new RequestOptions({ headers: headers });
        return this.http.post(this.addCarUrl, JSON.stringify({
            model: model, description: description, image: image_path, engine: engine, transmission: transmission, state: state, power: power, color: color
        }), option).toPromise().then(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}