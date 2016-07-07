//import { RACES } from "./races-mock";
import { Injectable } from "@angular/core";
import { Race } from "./race";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class RaceService {
    constructor(private http: Http) {}
    getRaces() {
        //return RACES;
        return this.http.get("http://api.myjson.com/bins/5605v").map(response => <Race[]>response.json().racesData);
    }
}