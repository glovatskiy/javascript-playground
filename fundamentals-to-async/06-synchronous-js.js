const makeCoffee = function () {
    console.log("Making coffee");
}

console.log("Start breakfast");
makeCoffee();
console.log("Breakfast finished");

function prepareIngredients() {
    console.log("Preparing ingredients");
}
function cookingMeal(){
    console.log("Cooking meal")
}
function serveMeal() {
    console.log("Serving meal");
}

prepareIngredients();
cookingMeal();
serveMeal();

const firstTask = function () {
    console.log("Task 1");
}

const secondTask = function () {
    console.log("Task 2");
}

const thirdTask = function () {
    console.log("Task 3")
}

console.log("Start");
firstTask();
secondTask();
thirdTask();
console.log("End");