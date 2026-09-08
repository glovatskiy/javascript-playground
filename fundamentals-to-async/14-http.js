const response_1 = {
  status: 200,
  message: "OK",
  data: {
    id: 1,
    name: "Alex",
    email: "alex@gmail.com",
  },
};

const response_2 = {
  status: 200,
  message: "OK",
  data: {
    id: 2,
    name: "Vlad",
    email: "vlad@gmail.com",
  },
};

const response_3 = {
  status: 200,
  message: "OK",
  data: {
    id: 1,
    name: "Laptop",
    price: 2500,
  },
};

const response_4 = {
  status: 201,
  message: "Created",
  data: {
    id: 1,
    name: "Laptop",
  },
};

const response_5 = {
  status: 204,
  message: "No Content",
};

const response_6 = {
  status: 400,
  message: "Bad Request",
  error: "Email is required",
};

const response_7 = {
  status: 401,
  message: "Unauthorized",
  error: "Missing authentication token",
};

const response_8 = {
  status: 403,
  message: "Forbidden",
  error: "Admin access required",
};

const response_9 = {
  status: 404,
  message: "Not Found",
  error: "Product does not exist",
};

const response_10 = {
    status: 500,
    message: "Internal Server Error",
    error: "Database connection failed"
}