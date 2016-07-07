import { CARPARTS } from "./mocks";
import { Injectable } from "@angular/core";

@Injectable()
export class RacingDataService {
    getCarParts() {
        return CARPARTS;
    }
}