import { Component } from "@angular/core";

import { CarPartsComponent } from "./car-parts.component";
import { RacesComponent } from "./races.component.ts";

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <car-parts></car-parts>
    <my-races></my-races>
  `,
  directives: [CarPartsComponent,RacesComponent]
})

export class AppComponent {
  title = "Ultra Racing";
}
