const tasks = ["Laundry", "Cleaning", "JS training"];
const updatedTasks = [...tasks, "React training"];

console.log(updatedTasks)

const frontendSkills = ["HTML", "CSS", "JavaScript"];
const backendSkills = ["Node.js", "Express"];

const fullstackSkills = [...frontendSkills, ...backendSkills];
console.log(fullstackSkills)

const user = { name: "Vladislav", age: 37, city: "Pavlodar" };
const updatedUser = { ...user, city: "Los Angeles" };

console.log(user);
console.log(updatedUser);

const profile = {
    name: "Vlad",
    settings: {
        theme: "light",
        language: "English"
    }
}

const updatedProfile = {
    ...profile,
    settings: {
        ...profile.settings,
        theme: "dark"
    }
}

console.log(updatedProfile)

const student = {
    name: "Vlad",
    school: {
        class: 11,
        grade: "B"
    }
}

const updatedStudent = {
    ...student,
    school: {
        ...student.school,
        grade: "A"
    }
}

console.log(updatedStudent)

const userNew = {
    username: "Vlad",
    profile: {
        avatar: "photo.jpg",
        bio: "student"
    },
    preferences: {
        theme: "dark",
        language: "English"
    }
}

const updatedUserNew = {
    ...userNew,
    preferences: {
        ...userNew.preferences,
        theme: "light"
    }
}

console.log(updatedUserNew);

const cart = {
    customerName: "Vladislav Glovatskiy",
    items: [{
        name: "Laptop",
        price: 2500,
        quantity: 1
    }, {
        name: "Charger",
        price: 50,
        quantity: 2
    }]
}

const updatedCart = {
    ...cart,
    items: [...cart.items, {name: "Monitor", price: 1000, quantity: 2}]
}

console.log(cart)
console.log(updatedCart);