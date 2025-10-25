const express = require("express"); // commonjs
const path = require("path");
require("dotenv").config();



const app = express(); // app express
const port = process.env.PORT || 8888; // port

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("views engins", "ejs");
//  khai bao route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/Hau", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
