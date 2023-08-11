import { fakerRU } from "@faker-js/faker";


export interface Restaraunt {
    id : number;
    imgUrl : string;
    title : string;
    rating : number;
    genre : string;
    address : string;
    short_description : string;
    dishes : Dish[];
    long : number;
    lat : number;
}

export interface Dish {
    title : string;
}