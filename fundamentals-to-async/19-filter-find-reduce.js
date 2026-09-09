

const products = [
  { name: "laptop", price: 2500 },
  { name: "monitor", price: 1000 },
  { name: "keyboard", price: 100 },
  { name: "mouse", price: 100 },
  { name: "laptop stand", price: 50 },
];
const filteredProducts = products.filter(({ price }) => price > 1000)
console.log(filteredProducts)

const users = [{
    name: "Maria",
    age: 25,
    isActive: true
},{
    name: "Vladislav",
    age: 37,
    isActive: true
},{
    name: "Julia",
    age: 37,
    isActive: true
},{
    name: "John",
    age: 30,
    isActive: false
},{
    name: "Anna",
    age: 20,
    isActive: false
},{
    name: "Daniel",
    age: 40,
    isActive: true
    }]

const activeUsers = users.filter(({ isActive }) => isActive)
console.log(activeUsers)

const orders = [
  {
    id: 1,
    customerName: "Vladislav",
    status: "completed",
  },
  {
    id: 2,
    customerName: "Anna",
    status: "pending",
  },
  {
    id: 3,
    customerName: "John",
    status: "cancelled",
  },
  {
    id: 4,
    customerName: "Maria",
    status: "completed",
  },
  {
    id: 5,
    customerName: "Daniel",
    status: "pending",
  },
  {
    id: 6,
    customerName: "Julia",
    status: "completed",
  },
];

const completedOrders = orders.filter(({ status }) => { return (status === "completed") })
console.log(completedOrders)

const storeProducts = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 2500,
  },
  {
    id: 2,
    name: "iPhone",
    price: 1200,
  },
  {
    id: 3,
    name: "iPad",
    price: 800,
  },
  {
    id: 4,
    name: "AirPods",
    price: 250,
  },
  {
    id: 5,
    name: "Apple Watch",
    price: 500,
  },
];

const foundProduct = storeProducts.find((product) => product.id === 3)
console.log(foundProduct)

const appUsers = [
  {
    id: 1,
    name: "Vladislav",
    role: "user",
  },
  {
    id: 2,
    name: "Anna",
    role: "admin",
  },
  {
    id: 3,
    name: "John",
    role: "user",
  },
  {
    id: 4,
    name: "Maria",
    role: "admin",
  },
  {
    id: 5,
    name: "Daniel",
    role: "user",
  },
];

const firstAdmin = appUsers.find((user) => user.role === "admin")
console.log(firstAdmin)

const reservations = [
  {
    id: 101,
    customerName: "Vladislav",
    tableNumber: 5,
    status: "confirmed",
  },
  {
    id: 102,
    customerName: "Anna",
    tableNumber: 8,
    status: "pending",
  },
  {
    id: 103,
    customerName: "John",
    tableNumber: 3,
    status: "cancelled",
  },
  {
    id: 104,
    customerName: "Maria",
    tableNumber: 10,
    status: "confirmed",
  },
  {
    id: 105,
    customerName: "Daniel",
    tableNumber: 8,
    status: "confirmed",
  },
];

const eightTablesReservation = reservations.find(reservation => reservation.tableNumber === 8 && reservation.status === "confirmed")
console.log(eightTablesReservation)

const prices = [100, 200, 50, 300];

const totalPrice = prices.reduce((sum, price) => {
  return sum + price
}, 0)

console.log(totalPrice)

const cartItems = [
  {
    name: "Laptop",
    price: 2500,
    quantity: 1,
  },
  {
    name: "Mouse",
    price: 50,
    quantity: 2,
  },
  {
    name: "Keyboard",
    price: 100,
    quantity: 1,
  },
];

const totalCartPrice = cartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0)
console.log(totalCartPrice)

const ordersList = [
  {
    id: 1,
    customer: "Vlad",
    amount: 250,
  },
  {
    id: 2,
    customer: "Anna",
    amount: 500,
  },
  {
    id: 3,
    customer: "John",
    amount: 150,
  },
];

const orderSummary = ordersList.reduce((accumulator, order) => {
    accumulator.total += order.amount;
    accumulator.count++;
    return accumulator
}, { total: 0, count: 0 })

console.log(orderSummary)

const usersList = [
  {
    id: 1,
    name: "Vlad",
    isActive: true,
  },
  {
    id: 2,
    name: "Anna",
    isActive: false,
  },
  {
    id: 3,
    name: "John",
    isActive: true,
  },
  {
    id: 4,
    name: "Maria",
    isActive: true,
  },
  {
    id: 5,
    name: "Daniel",
    isActive: false,
  },
];

const userStatistics = usersList.reduce((accumulator, user) => {
    accumulator.totalUsers++;
    if (user.isActive) {
        accumulator.activeUsers++;
    } else {
        accumulator.inactiveUsers++;
    }
    return accumulator;
}, {
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0
})

console.log(userStatistics)

