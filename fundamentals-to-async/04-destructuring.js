const profile = {
  username: "@glovatskiy",
  email: "glovatskiy@hotmail.com",
  age: 37,
  country: "USA",
};

const { username, email, country } = profile;
console.log(username);
console.log(email);
console.log(country);

const account = {
  username: "Vlad",
  email: "glovatskiy@hotmail.com",
};

const { username: userName, age = 18 } = account;
console.log(userName);
console.log(age);

const colors = ["red", "green", "blue", "yellow"];
const [firstColor, secondColor, , fourthColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(fourthColor);

const user = { name: "Vladislav", age: 37 };

const displayUser = ({ name, age }) => {
  return `${name} is ${age} years old`;
};

console.log(displayUser(user));

const reataurants = [
  {
    name: "Little Lemon",
    location: {
      city: "Chicago",
      country: "USA",
    },
    rating: 5,
  },
  {
    name: "Les Moules",
    location: {
      city: "Prague",
      country: "Czech republic",
    },
    rating: 5,
  },
  {
    name: "Sunset",
    location: {
      city: "Pavlodar",
      country: "Kazakhstan",
    },
    rating: 5,
  },
];

const restaurantInfo = reataurants.map(
  ({ name, location: { city, country }, rating }) =>
    `${name} in ${city} of ${country} has rating ${rating}`,
);
console.log(restaurantInfo);