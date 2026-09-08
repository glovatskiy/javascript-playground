async function getUsersNew() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const responce = await fetch(url);
  const data = await responce.json();
  return data;
}

async function printUsersNew() {
    const users = await getUsersNew()
    console.log(users[0].email)
}
printUsersNew()

async function getProducts() {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function printProducts() {
    const products = await getProducts()
    console.log(products[0].title)
}

printProducts()

async function getCountry() {
    const response = await fetch("https://countries.dev/alpha/US");
    const data = await response.json()
    return data
}

async function showCountry() {
    const country = await getCountry()
    console.log(country.name)
    console.log(country.capital);
}

showCountry()