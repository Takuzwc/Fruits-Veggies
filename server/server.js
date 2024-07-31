const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const dataPath = path.join(__dirname, "data.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

app.get("/api", (req, res) => {
  res.json(data);
});

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h3>Welcome to the overview page</h3>");
});

app.get("/overview", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h3>Welcome to the overview page</h3>");
});

app.get("/product", (req, res) => {
  const { query } = req;
  console.log(query);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h3>Product details page</h3>");
});

// Handling 404 errors
app.use((req, res) => {
  res.status(404).send("<h3>Page not found</h3>");
});

app.listen(5000, () => {
  console.log("Server Listening to requests on port 5000");
});
