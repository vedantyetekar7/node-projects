// declaring and printing variables
const a = 10;
const b = 20;

console.log(`a = ${a}
b = ${b}
a + b = ${a + b}
a * b = ${a * b}
a / b = ${a / b}`);

// import and using modules in node
const os = require("os");

console.log(os.type());
console.log(os.platform());

// creating my own module (in modules.js file)
const car = require("./modules");

console.log(car);

// event loop
const vedant = () => console.log("vedant");
const parth = () => console.log("parth");
const yetekar = () => {
  console.log("yetekar");
  setTimeout(() => {
    vedant();
  }, 0);
  parth();
};

yetekar();

// callbacks
const getMessage = (message, callback) => {
  setTimeout(() => {
    console.log(message);
    callback();
  }, 0);
};

const displayMessage = () => {
  console.log("Display Message");
};

getMessage("Get Message", displayMessage);

// promises
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("RUN BEFORE"), 1000);
});

promise.then(
  (result) => {
    console.log(result);
    getAfter();
  },
  (error) => console.log(error)
);

const getAfter = () => {
  console.log("RUN AFTER");
};

// Async and Await
const clone = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Hello World!"), 2000)
  );
};

const message = async (callback) => {
  const msg = await clone();
  console.log(msg);
  callback();
};

const getResult = () => {
  console.log("I'm Vedant.");
};

message(getResult);

// 01:29:00
