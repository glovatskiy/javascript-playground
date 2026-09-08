async function getProducts() {
    try {
        const url = "https://fakestoreapi.com/products/1";
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Cannot get products")
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error.message)
    }
}

async function showProducts() {
    try {const product = await getProducts();
    console.log(product.title);
    console.log(product.price); } catch (error) {
        console.log(error.message)
    }
}

showProducts()

async function getUser() {
    try {
        const url = "https://jsonplaceholder.typicode.com/users/1";
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Cannot get user")
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error.message)
    }
}

async function showUser() {
    try {
        const user = await getUser()
        console.log(user.name)
        console.log(user.email);
        console.log(user.address.city);
    } catch (error) {
        console.log(error)
    }
}

showUser()