try {
  console.log("a");
  throw new Error("Number does not exist");
} catch (error) {
  console.log(error.message);
}

try {
  console.log(number);
} catch (error) {
  console.log(error.message);
}

let age = 2;
try {
  if (age >= 18) {
    console.log("Adult");
  } else {
    throw new Error("Minor");
  }
} catch (error) {
  console.log(error.message);
}

function validatePassword(password) {
  try {
    if (password.length >= 8) {
      console.log("Password is valid");
    } else {
      throw new Error("Password must be at least 8 characters long");
    }
  } catch (error) {
    console.log(error.message);
  }
}

validatePassword("a")
validatePassword("fwgegerwg")