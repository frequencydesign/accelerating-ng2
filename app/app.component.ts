import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `<h1>{{title}}</h1>
    <h2>{{carPort.name}}</h2>
    <p>{{carPort.description}}</p>
    <p>{{carPort.inStock}} in Stock</p>`
})

export class AppComponent {

  title = "Ultra Racing";
  carPort = {
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5
  }
}
