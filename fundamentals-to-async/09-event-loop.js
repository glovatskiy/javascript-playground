console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

console.log("Start");

setTimeout(() => {
  console.log("Timer 1");
}, 2);

setTimeout(() => {
  console.log("Timer 2");
}, 1);

console.log("End");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

setTimeout(() => {
  console.log("C");
}, 0);

console.log("D");