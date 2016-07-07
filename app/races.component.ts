import { Component } from '@angular/core';
import { Race } from './race';
//import { RACES } from './races-mock';
import { RaceService } from "./race.service";

@Component({
  selector: 'my-races',
  templateUrl: 'app/races.component.html',
  styleUrls:['app/races.component.css']
})
export class RacesComponent {
  heading = "Ultra Racing Schedule"
  cash = 10000;
  races: Race[];

  constructor(private raceService: RaceService) {}

  ngOnInit() {
    //this.races = RACES;
    this.races = this.raceService.getRaces();
  }

  totalCost() {
    let sum = 0;
    for (let race of this.races) {
      if (race.isRacing) sum += race.entryFee;
    }
    return sum;
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

  cancelRace(race: Race) {
    race.isRacing = false;
  }

  enterRace(race: Race) {
    if(this.cashLeft() > race.entryFee) {
      race.isRacing = true;
    } else {
      alert("You don't have enough cash");
    }
  }
}
