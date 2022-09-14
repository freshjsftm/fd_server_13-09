const http = require("http");
const fs = require("fs");
const PORT = 3000;
const users = [];
const requestListener = (req, res) => {
  const { method, url } = req;
  if (method === "GET") {
    if (url === "/") {
      fs.readFile("./views/index.html", { encoding: "utf8" }, (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
      return;
    }
    if (url === "/about") {
      fs.readFile("./views/about.html", { encoding: "utf8" }, (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
      return;
    }
    if (url === "/contacts") {
      fs.readFile(
        "./views/contacts.html",
        { encoding: "utf8" },
        (err, data) => {
          if (err) {
            throw err;
          }
          res.end(data);
        }
      );
      return;
    }
    return;
  }
  if (method === "POST") {
    if (url === "/create-user") {
      let jsonString = '';
      req.on("data", (chunk) => {
        jsonString += chunk;
      });
      let user = {};
      req.on("end", () => {
        user = JSON.parse(jsonString);
        delete user.password;
        user.id = Date.now();
        users.push(user);
        console.log(users);
        res.end(JSON.stringify(user));
      });
      return;
    }
  }
  fs.readFile("./views/404.html", { encoding: "utf8" }, (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
  });
};

const server = http.createServer(requestListener);
server.listen(PORT);
