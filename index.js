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

// routing
const http = require("http");

const index = (req, res) => {
  res.writeHead(200);
  res.write("<h1>Welcome to my profile.</h1>");
  res.end();
};

const about = (req, res) => {
  res.writeHead(200);
  res.write("<h1>Hello, I'm Vedant Yetekar.</h1>");
  res.end();
};

http
  .createServer((req, res) => {
    if (req.url == "/") {
      return index(req, res);
    }

    if (req.url == "/about") {
      return about(req, res);
    }
  })
  .listen(5000);

// refactored the routing code

const http = require("http");

const routes = {
  "/": (req, res) => {
    res.writeHead(200);
    res.write("<h1>Welcome to the homepage.</h1>");
    res.end();
  },

  "/about": (req, res) => {
    res.writeHead(200);
    res.write("<h1>Hello, I'm Vedant Yetekar.</h1>");
    res.end();
  },
};

http
  .createServer((req, res) => {
    if (req.url in routes) {
      return routes[req.url](req, res);
    }
  })
  .listen(process.env.PORT || 5000);

// path module
const path = require("path");

const lastName = path.basename("test.json");
const dirName = path.dirname("node-projects/test.json");
const absPath = path.isAbsolute("C:/Users/Vedan/Desktop/node-projects");
const dirPath = path.join(__dirname, "test.json");
const parsedPath = path.parse(dirPath);
const resolvedPath = path.resolve("test.json");

console.log(lastName);
console.log(dirName);
console.log(absPath);
console.log(dirPath);
console.log(parsedPath);
console.log(resolvedPath);

// event module
const http = require("http");
const events = require("events");
const event = new events.EventEmitter();

const routes = {
  "/": (req, res) => {
    res.writeHead(200);
    res.write("<h1>HOME PAGE</h1>");
    res.end();
  },
  "/about": (req, res) => {
    res.writeHead(200);
    res.write("<h1>ABOUT PAGE</h1>");
    res.end();
  },
};

let cnt = 0;

event.on("my_event", (cnt) => {
  console.log(`Event Called: ${cnt}`);
});

event.on("my_event", (cnt) => {
  console.log(`Event Called: ${cnt}`);
});

event.once("event_once", () => console.log("EVENT ONCE FIRED."));

event.off("my_event", (cnt) => {
  console.log(`Event Called: ${cnt}`);
});

http
  .createServer((req, res) => {
    if (req.url in routes) return routes[req.url](req, res);

    cnt++;
    event.emit("my_event", cnt);
    event.emit("event_once");
  })
  .listen(process.env.PORT || 5000);

// stream: used when files are too big.
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("test.json", (error, file) => {
    const stream = fs.createReadStream("test.json");
    stream.pipe(res);
  });
});

server.listen(5000, () =>
  console.log(`Server running at http://localhost:5000`)
);

// buffer: used to deal with binary data (related to streams).

const buff1 = Buffer.from("hey there!");
const buff2 = Buffer.alloc(4);
buff2.write("Hey!");

console.log(buff1);
console.log(buff1.toString());
console.log(buff1[0]);
console.log(buff1[1]);
console.log(buff2);
console.log(buff2.toString());
buff1[0] = 111; // o
console.log(buff1.toString());

// exception handling
// throw new Error("An error encountered.");

// try-catch block
try {
  const tryVar = 0;
  tryVar = 10;
  console.log("I'm Try Block");
} catch (error) {
  console.log(error.message);
}

// handling error in promises
doSomething1()
  .then(() => {
    return doSomething2().catch((error) => {
      throw error;
    });
  })
  .then(() => {
    return doSomething2().catch((error) => {
      throw error;
    });
  })
  .catch((error) => console.log(error));

// handling errors in async await functions
const handleError = async () => {
  try {
    await doSomething1();
  } catch (error) {
    console.log(error);
  }
};

// sessions
const express = require("express");
const session = require("express-session");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(
  session({
    secret: "test",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  req.session.name = "Vedant";
  res.send(`<h1>Session Set</h1>
  <a href="/session">Go To Session</a>
  `);
});

app.get("/session", (req, res) => {
  const name = req.session.name;
  console.log(req.session);
  res.send(`<h1>${name}</h1>
  <a href="/destroy">Destroy Session</a>`);
});

app.get("/destroy", (req, res) => {
  req.session.destroy((error) => {
    console.log(`Session destroyed.`);
  });

  res.send("<h1>Session Destroyed</h1>");
  res.end();
});

app.listen(PORT, () =>
  console.log(`Server running at port http://localhost:${PORT}/`)
);

// cookies
const express = require("express");
const app = express();
const cookies = require("cookie-parser");

const PORT = process.env.PORT || 5000;

app.use(cookies());

let userData = {
  name: "Vedant Yetekar",
  Age: 19,
};

app.get("/", (req, res) => {
  res.send("Cookies Tutorial");
});

app.get("/setuser", (req, res) => {
  res.cookie("userData", userData);
  res.send("User Data Added To Cookies.");
});

app.get("/getuser", (req, res) => {
  res.send(req.cookies);
  // res.send(req.cookies.userData);
  // res.send(req.cookies.userData.name);
  // res.send(req.cookies.userData.age);
});

app.get("/logout", (req, res) => {
  res.clearCookie("userData");
  res.send("User logged out successfully.");
});

app.listen(PORT, () =>
  console.log(`Server running at port http://localhost:${PORT}/`)
);
