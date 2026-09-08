const user = {
    name: "Vlad",
    age: 37,
    country: "Czech Republic"
}

const jsonUser = JSON.stringify(user)

console.log(jsonUser)

const jsonProduct = '{"id":1,"name":"laptop","price": 2500}'

const product = JSON.parse(jsonProduct)

console.log(product)