import { RACES } from "./races-mock";
import { Injectable } from "@angular/core";

@Injectable()
export class RaceService {
    getRaces() {
        return RACES;
    }
}