const loginOld = new Promise((resolve, reject) => {
  resolve("Acess granted");
});

loginOld.then((message) => {
  console.log(message);
});
console.log(loginOld);

const payment = new Promise((resolve, reject) => {
  reject("Payment failed");
});

payment.catch((error) => {
  console.log(error);
});

const calc = new Promise((resolve, reject) => {
  resolve(5);
});

calc
  .then((data) => {
    return data * 2;
  })
  .then((data) => {
    console.log(`Result is: ${data}`);
  });

const coffeOrder = new Promise((resolve, reject) => {
  resolve(3.5);
});

coffeOrder
  .then((price) => {
    return price * 1.1;
  })
  .then((totalPrice) => {
    console.log(
      `Your coffe costs $${Math.round(totalPrice * 100) / 100}, enjoy!`,
    );
  });

const pizzaDelivery = new Promise((resolve, reject) => {
    resolve(12)
});

pizzaDelivery.then((price) => {
    return price + 4 + 1.5
}).then((totalPrice) => {
    console.log(`Your pizza is on its way! Total: $${totalPrice}`);
})

const movieNight = new Promise((resolve, reject) => {
    resolve(8)
})

const popcornPrice = 3

movieNight.then((ticketPrice) => {
    return ticketPrice + popcornPrice
}).then((total) => {
    if (total > 15) {
        console.log("You need to skip the popcorn!");
    } else console.log("You have enough for a movie night!");
})

const calculate = new Promise((resolve, reject) => {
    resolve (10)
})

calculate.then((number) => { return number * 2 }).then((result) => {
    throw new Error("Math broke!");
}).catch((error) => {
    console.log(`Oops, something went wrong: ${error}`);
})


const loadBook = new Promise((resolve, reject) => {
    resolve ("book_42")
})

function loadBookDetails(id) {
    return new Promise((resolve, reject) => {
        if(id === "book_42"){
         resolve({ title: "React Basics", pages: 150})
        } else {
            reject("Book does not exist")
        }
    })
}

function formatSummary(details) {
    return new Promise ((resolve, reject) => {
        resolve(`Read ${details.title} in ${details.pages}`)
    })
}

loadBook.then((id) => {
    return loadBookDetails(id)
}).then((details) => { return formatSummary(details) }).then((message) => { console.log(message) })

const getUser = new Promise((resolve, reject) => {
    resolve("user_123")
})

function getUserDetails(id) {
    return new Promise((resolve, reject) => {
        if (id === "user_123") {
            resolve({name: "Vladislav", age: 37})
        } else {
            reject("Wrong user")
        }
    })
}

function displayUser(user) {
    return new Promise((resolve, reject) => {
        resolve (`User details: ${user.name}, age: ${user.age}`)
    })
}

getUser.then((id) => {
    return getUserDetails(id)
}).then((user)=>{return displayUser(user)}).then((message) => {console.log(message)}).catch((error) => {console.log(error)})