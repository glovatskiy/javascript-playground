function sayHello(name) {
    return "Hello, " + name + "!";
}

console.log(sayHello("Vlad"))

function calculateTotal(price, quantity) {
    return price * quantity
}

console.log(calculateTotal(15, 4))

function caclulateDiscount(price, discountPercent) {
    return price - (price*discountPercent/100)
}

console.log(caclulateDiscount(250, 10))

function isAdult(age) {
    return age>=18
}

console.log(isAdult(1))

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(getFullName("Vladislav", "Glovatskiy"))

function formatReservation(name, guest, time) {
    return `${name} booked a table for ${guest} guests at ${time}`
}

console.log(formatReservation("Vladislav", 13, "19;00"))