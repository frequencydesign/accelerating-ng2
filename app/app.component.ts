import { Component } from "@angular/core";

import { CarPartsComponent } from "./car-parts.component";
import {RacingDataService} from "./racing-data.service";

import { RacesComponent } from "./races.component.ts";
import {RaceService} from "./race.service";

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <car-parts></car-parts>
    <my-races></my-races>
  `,
  directives: [CarPartsComponent,RacesComponent],
  providers: [RacingDataService,RaceService]
})

export class AppComponent {
  title = "Ultra Racing";
}
