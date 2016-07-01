import { Component } from "@angular/core";

import { CarPartsComponent } from "./car-parts.component";
import { ScheduleComponent } from "./schedule.component";

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <car-parts></car-parts>
    <racing-app></racing-app>
  `,
  directives: [CarPartsComponent,ScheduleComponent]
})

export class AppComponent {
  title = "Ultra Racing";
}
