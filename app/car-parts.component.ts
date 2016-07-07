import { Component } from "@angular/core";
import { CarPart } from "./car-part";
//import { CARPARTS } from "./mocks";
import { RacingDataService } from "./racing-data.service";

@Component({
    selector: "car-parts",
    templateUrl: "app/car-parts.component.html",
    styleUrls: ["app/car-parts.component.css"]
})

export class CarPartsComponent {
    carParts: CarPart[];

    constructor(private racingDataService: RacingDataService) {}

    ngOnInit() {
        //this.carParts = CARPARTS;
        //this.carParts = this.racingDataService.getCarParts();
        this.racingDataService.getCarParts().subscribe(carParts => this.carParts = carParts);
    }

    upQuantity(carPart: CarPart) {
        if (carPart.quantity < carPart.inStock) carPart.quantity++;
    }

    downQuantity(carPart: CarPart) {
        if (carPart.quantity != 0) carPart.quantity--;
    }

    totalCarParts() {
        /*
         let sum = 0;
         for (let carPart of this.carParts) {
         sum += carPart.inStock
         }
         return sum;
         */

        /*
         return this.carParts.reduce(function(prev, current) {
         return prev + current.inStock;
         }, 0);
         */

        // return this.carParts.reduce((prev, current) => prev + current.inStock, 0);

        if (Array.isArray(this.carParts)) {
            let sum = 0;
            for (let carPart of this.carParts) {
                sum += carPart.inStock
            }
            return sum;
        }

    }

}
