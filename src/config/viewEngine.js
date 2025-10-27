const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
//   console.log(">> check __dirname: ", path.join("./src", "views")); cach xem duong link

  app.set("views", path.join("./src", "views"));
  app.set("views engins", "ejs");
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
