function printLogin() {
  console.log("Login successful!");
}

function login(callback) {
  callback();
}

login(printLogin);

// -----------
function printWelcome(name) {
  console.log(`Hello, ${name}`);
}

function welcome(callback, name) {
  callback(name);
}

welcome(printWelcome, "Vladislav");

// -----------
function finalPrice(price, discount) {
  console.log(price - (price * discount) / 100);
}

function makeCalc(callback, price, discount) {
  callback(price, discount);
}

makeCalc(finalPrice, 100, 25);


// -----------
function foodDelivered() {
  console.log("Order delivered!");
}

function startDelivery(callback) {
  console.log("Starting delivery...");
  setTimeout(() => {
    callback();
  }, 2000);
}

startDelivery(foodDelivered);

// -----------
function first(callback) {
  setTimeout(() => {
    console.log("First finished");
    callback();
  }, 2000);
}

function second() {
  console.log("Second finished");
}

console.log("Start");

first(() => {
  second();
});

console.log("End");


// -----------
function firstTask() {
  setTimeout(() => {
    console.log("First");
  }, 2000);
}

function secondTask() {
  setTimeout(() => {
    console.log("Second");
  }, 1000);
}

console.log("Start");

firstTask();
secondTask();

console.log("End");