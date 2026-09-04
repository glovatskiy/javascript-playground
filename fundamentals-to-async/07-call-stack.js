function stepOne() {
  stepTwo();
  console.log("One");
}

function stepTwo() {
  stepThree();
  console.log("Two");
}

function stepThree() {
  console.log("Three");
}

stepOne();

function multiply(a, b) {
  return a * b;
}

function calculate() {
  const result = multiply(5, 2);
  console.log(result);
}

console.log("Start");

calculate();

console.log("End");

function getPrice() {
  return 100;
}

function addTax(price) {
  return price + 20;
}

function checkout() {
  const price = getPrice();
  const finalPrice = addTax(price);

  console.log(finalPrice);
}

console.log("Start");

checkout();

console.log("Finish");

function startGame() {
    loadPlayer();
    console.log("Game started")
}

function loadPlayer() {
    calculateScore();
    console.log("Player loaded")
}

function calculateScore() {
    displayScore();
    console.log("Score calculated");
}

function displayScore() {
    console.log("Displaying score")
}
startGame();