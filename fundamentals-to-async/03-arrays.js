const colors = ["red", "green", "blue", "orange", "pink"];

console.log(colors[0]);
console.log(colors[colors.length - 1]);
console.log(colors.length);

const shoppingList = ["Milk", "Bread", "Water"];
shoppingList.push("Zephir");
console.log(shoppingList);
shoppingList.pop();
console.log(shoppingList);

const numbers = [1, 2, 3, 4, 5]
const updatedNumbers = numbers.map(number => number * 2)
console.log(updatedNumbers)

const products = [{
    name: "Macbook",
    price: 2500
}, {
    name: "Xiaomi A27Ui",
    price: 160
    }]
const productNames = products.map(product => product.name)
console.log(productNames)

const users = [{
    name: "Vlad",
    age: 37,
    isActive: true
},{
    name: "Anna",
    age: 39,
    isActive: true
},{
    name: "Stepan",
    age: 32,
    isActive: true
    }]
const messages = users.map(user =>  `${user.name} is ${user.age} years old.` )
console.log(messages)