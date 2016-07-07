//import { CARPARTS } from "./mocks";
import { Injectable } from "@angular/core";
import { CarPart } from "./car-part";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class RacingDataService {
    constructor(private http: Http) {}
    getCarParts() {
        //return CARPARTS;
        return this.http.get("http://api.myjson.com/bins/4nsar").map(response => <CarPart[]>response.json().data);
    }
}