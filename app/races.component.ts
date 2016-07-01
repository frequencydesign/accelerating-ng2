import { Component } from "@angular/core";

@Component({
  selector: "my-races",
  template: `
  <h1>{{heading}}</h1>
  <ul>
    <li *ngFor="let race of races">
      <h2>{{race.name}} {{race.entryFee | currency:"USD":true }}</h2>
      <p>{{race.date | date:"MMM d, y, h:MM a":true }}</p>
      <p>{{race.about}}</p>
      <button *ngIf="!race.isRacing" >Enter Race</button>
      <h3 *ngIf="race.isRacing" >Already Racing</h3>
    </li>
  </ul>
  <h2>Total cost: {{totalCost() | currency:"USD":true}}</h2>
  `
})

export class RacesComponent {
  heading = "Ultra Racing Schedule";
  races = [{
    "id": 1,
    "name": "Daytona Thunderdome",
    "date": new Date('2512-01-04T14:00:00'),
    "about": "Race through the ruins of an ancient Florida battle arena.",
    "entryFee": 3200,
    "isRacing": false
  }, {
    "id": 2,
    "name": "San Francisco Ruins",
    "date": new Date('2512-07-03T20:00:00'),
    "about": "Drift down the streets of a city almost sunk under the ocean.",
    "entryFee": 4700,
    "isRacing": true
  }, {
    "id": 3,
    "name": "New York City Skyline",
    "date": new Date('2512-07-12T21:00:00'),
    "about": "Fly between buildings in the electronic sky.",
    "entryFee": 4300,
    "isRacing": false
  }];

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
