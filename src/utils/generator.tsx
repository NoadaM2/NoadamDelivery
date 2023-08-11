import { fakerRU } from "@faker-js/faker";
import { Category, Dish, FeaturedRow, Restaraunt } from "../types";

export function createFakeCategory(): Category {
  return {
    title: fakerRU.commerce.department(),
    imgUrl: fakerRU.image.food(),
  };
}

export function createFakeRestaraunt(): Restaraunt {
  return {
    id: Math.floor(Math.random() * 100),
    imgUrl: fakerRU.image.food(),
    title: fakerRU.company.name(),
    rating: Math.round(Math.random() * 100) / 10,
    genre: fakerRU.music.genre(),
    address: fakerRU.location.streetAddress(),
    short_description: fakerRU.commerce.productDescription(),
    dishes: new Array(Math.floor(Math.random() * 10))
      .fill(null)
      .map((element) => createFakeDish()),
    long: Math.floor(Math.random() * 100),
    lat: Math.floor(Math.random() * 100),
  };
}

export function createFakeDish(): Dish {
  return {
    title: fakerRU.commerce.product(),
  };
}

export function createFakeFeatureRow(): FeaturedRow {
  return {
    title: fakerRU.commerce.product(),
    description: fakerRU.commerce.department(),
  };
}
