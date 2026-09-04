console.log("Start");

setTimeout(() => {
  console.log("Timer finished");
}, 3000);

console.log("End");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");