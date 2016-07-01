import { Component } from "@angular/core";


@Component({
    selector: "car-parts",
    templateUrl: "app/car-parts.component.html",
    styleUrls: ["app/car-parts.component.css"]
})

export class CarPartsComponent {
    carParts = [{
        "id": 1,
        "name": "Super Tires",
        "description": "These tires are the very best",
        "inStock": 5,
        "price": 4.99
    },
    {
        "id": 2,
        "name": "Reinforced Shocks",
        "description": "Shocks are made from kryptonite",
        "inStock": 4,
        "price": 9.99
    },
    {
        "id": 3,
        "name": "Wide Angle Mirrors",
        "description": "See the world around you",
        "inStock": 0,
        "price": 54.99
    },
    {
        "id": 4,
        "name": "Brake Pads",
        "description": "Stop at a moments notice",
        "inStock": 16,
        "price": 11.99
    }];

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
        return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
    }

}
