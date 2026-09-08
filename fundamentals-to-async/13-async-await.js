async function printMessage() {
  return "Hello";
}

console.log(printMessage());

async function getCity() {
  return "Prague";
}

console.log(getCity());

async function getUser() {
  return {
    name: "Vladilav",
    age: 37,
    country: "USA",
  };
}

console.log(getUser());

async function getProducts() {
  const products = [
    { id: 1, name: "laptop", price: 2500 },
    { id: 2, name: "monitor", price: 1000 },
    { id: 3, name: "mouse", price: 100 },
  ];
  return products;
}

console.log(getProducts());

async function getCountry() {
  return "Mexico";
}

async function printCountry() {
  const country = await getCountry();
  console.log(country);
}

printCountry();

async function getNewUser() {
  return {
    name: "Vladilav",
    email: "gl@gmail.com",
    role: "Software Engineer",
  };
}

async function showUser() {
  const user = await getNewUser();
  console.log(user);
}

showUser();

async function getNewProducts() {
  return [
    { id: 1, name: "laptop", price: 2500 },
    { id: 2, name: "monitor", price: 1000 },
    { id: 3, name: "mouse", price: 100 },
  ];
}

async function printNewProducts() {
  const products = await getNewProducts();
  console.log(products);
}

printNewProducts();

async function checkTemperature() {
  const teperature = -1;
  if (teperature >= 0) {
    return "Temperature is acceptable";
  } else {
    throw new Error("It is too cold");
  }
}

async function printTemperatureComdition() {
  try {
    const condition = await checkTemperature();
    console.log(condition);
  } catch (error) {
    console.log(error.message);
  }
}

printTemperatureComdition();

async function checkPayment() {
  const balance = 10000;
  const price = 2500;
  if (balance >= price) {
    return "Payment successful";
  } else {
    throw new Error("Insufficient funds");
  }
}

async function printTransaction() {
  try {
    const transaction = await checkPayment();
    console.log(transaction);
  } catch (error) {
    console.log(error.message);
  }
}

printTransaction();

async function checkDelivery() {
    const distance = 8
    if (distance <= 10) {
        return "Delivery started"
    } else {
        throw new Error("Delivery area too far");
    }
}

async function printDelivery() {
    try {
        const delivery = await checkDelivery()
        console.log(delivery)
    } catch (error) {
        console.log(error.message)
    }
}

printDelivery()

async function getCustomer() {
    return ({
        id: 1,
        name: "Vladislav"
    })
}

async function getCustomerOrders(cusromerId) {
    if (cusromerId === 1) {
        return (["Laptop", "Monitor", "Mouse"])
    } else {
        throw new Error("Customer not found")
    }
}

async function showCustomerData() {
    try {
            const customer = await getCustomer();
    const orders = await getCustomerOrders(customer.id)
    console.log(orders)
    } catch (error) {
        console.log(error.message)
    }
}

showCustomerData()