/*
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

// creating a http server using node
const http = require("http");
const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello World!");
  res.end();
});

server.listen(port, hostname, () =>
console.log(`Server running at http://${hostname}:${port}/`)
);

// creating a http server using node (another way)
const http = require("http");
const hostname = "127.0.0.1";
const port = 5000;

http
.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("<h1>Hello</h1>");
  res.end();
})
.listen(port, hostname, () =>
console.log(`Server running at http://${hostname}:${port}/`)
);

// making a http get request
const http = require("http");

http.get("http://api.open-notify.org/astros.json", (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => console.log(JSON.parse(data)));
});

// making a http post request
const https = require("https");

const data = JSON.stringify({
  name: "Vedant Yetekar",
  job: "SDE",
  company: "Microsoft",
});

// request
const options = {
  hostname: "reqres.in",
  path: "/api/users",
  method: "POST",
  header: {
    "Content-Type": "application/json",
  },
};

const req = https.request(options, (res) => {
  let data = "";
  console.log("Status Code: ", res.statusCode);
  
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => console.log(JSON.parse(data)));
});

req.write(data);
req.end();


// making a http post request using axios
const axios = require("axios");

const data = JSON.stringify({
  name: "Vedant Yetekar",
  job: "SDE",
  company: "Microsoft",
});

axios
.post("https://reqres.in/api/users", data)
.then((res) => {
  console.log(`Status Code: ${res.status}`);
  console.log(`Body: ${JSON.stringify(res.data)}`);
})
.catch((error) => console.log(error));

// working with files
const fs = require("fs");

// reading file asynchronously.
fs.readFile("test.txt", "utf-8", (error, file) => {
  if (error) throw error;
  else console.log(file);
});

// reading file synchronously.
const data = fs.readFileSync("test.txt", { encoding: "utf-8", flag: "r" });

console.log(data);

fs.stat("test.txt", (error, stats) => {
  if (error) console.log(error);
  else {
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.size);
  }
});

// writing and updating files
const fs = require("fs");

// writing files synchronously
const content = [
  {
    first_name: "Vedant",
    last_name: "Yetekar",
    gender: "male",
    email: "ursvedantyetekar@gmail.com",
    company: "Microsoft",
  },
];

fs.writeFileSync("test.json", JSON.stringify(content));

// writing files asynchronously
const fs = require("fs");

const content = `Hello, I'm Vedant Yetekar.
Soon I will be joining as a SDE @Microsoft.`;

fs.writeFile("test.txt", content, { flag: "w" }, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("File written successfully.");
});

// deleting file asynchronously
const fs = require("fs");

fs.unlink("test.txt", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  
  console.log("File Removed.");
});

// deleting file synchronously
const fs = require("fs");

fs.unlinkSync("test.txt");

*/

// 02:11:00
