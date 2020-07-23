const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = q.pathname === "/" ? "./index.html" : "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        fs.readFile("404.html", (err, data) => {
          res.end(data);
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(8080);
