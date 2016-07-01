import { Component } from "@angular/core";
import { Race } from "./race";
import { RACES } from "./races-mock";

@Component({
  selector: "my-races",
  templateUrl: "app/races.component.html",
  styleUrls: ["app/races.component.css"]
})

export class RacesComponent {
  heading = "Ultra Racing Schedule";
  races: Race[];

  ngOnInit() {
    this.races = RACES;
  }

  totalCost() {
    let totalFees = 0;
    for (let race of this.races) {
      if (race.isRacing) {
        totalFees += race.entryFee;
      }
    }
    return totalFees;
  }
}
