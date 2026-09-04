const person = {
    name: "Vladislav",
    age: 37,
    profession: "Software engineer"
};

console.log(person.name);
console.log(person["age"]);

const product = {
    name: "MacBook",
    price: "2500",
    cathegory: "Electronics"
}

console.log(product)

product.price = 2899;
product.inStock = true;
product["isNew"] = true;

console.log(product);

const user = {
    name: "Anna", 
    age: 39,
    introduce() {
        return `Hi, my name is ${user.name} and I am ${user.age} years old`
    }
}

console.log(user.introduce())

const customer = {
  name: "Anvar",
  email: "anvar@gmail.com",
  address: {
    city: "Astana",
    country: "Kazakhstan",
  },
};

console.log(customer.address.city)

const restaurant = {
    name: "Little Lemon",
    location: {
        city: "Chicago",
        country: "USA"
    },
    menu: ["Nacos", "Quesadila", "Tacos"],
    showInfo() {
        return `${this.name} is located in ${this.location.city}, ${this.location.country}. It serves ${this.menu[0]}, ${this.menu[1]}, ${this.menu[2]}.`;
    }
}

console.log(restaurant.showInfo())