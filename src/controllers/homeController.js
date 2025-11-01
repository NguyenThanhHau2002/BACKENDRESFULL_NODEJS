const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDSerices");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
const getABC = (req, res) => {
  res.sen("check ABC");
};
const getRepBen = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = async (req, res) => {
  //console.log(">> check req.body: ", req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  console.log(">>emai = : ", email, "name = ", name, "city =", city);
  //viet code bang Call back
  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //   VALUES (?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Created user succed");
  //   }
  // );
  //code promise
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  console.log("check results", results);
  res.send("Created user succed");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = (req, res) => {
  const userID = req.params.id;
  console.log(">> check req.params", req.params.userID);
  res.render("edit.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  getRepBen,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
