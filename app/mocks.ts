import { CarPart } from "./car-part";

export const CARPARTS: CarPart[] = [{
        "id": 1,
        "name": "Super Tires",
        "description": "These tires are the very best",
        "inStock": 5,
        "price": 4.99,
        "image": "/images/tire.jpg",
        "featured": false,
        "quantity": 0
    },
    {
        "id": 2,
        "name": "Reinforced Shocks",
        "description": "Shocks are made from kryptonite",
        "inStock": 4,
        "price": 9.99,
        "image": "/images/shocks.png",
        "featured": true,
        "quantity": 0
    },
    {
        "id": 3,
        "name": "Wide Angle Mirrors",
        "description": "See the world around you",
        "inStock": 0,
        "price": 54.99,
        "image": "/images/mirrors.gif",
        "featured": false,
        "quantity": 0
    },
    {
        "id": 4,
        "name": "Brake Pads",
        "description": "Stop at a moments notice",
        "inStock": 16,
        "price": 11.99,
        "image": "/images/brake-pads.jpg",
        "featured": false,
        "quantity": 0
    }];