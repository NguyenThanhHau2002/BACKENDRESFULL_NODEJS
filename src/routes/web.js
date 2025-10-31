const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  getRepBen,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/Hau", getABC);
router.get("/repben", getRepBen);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
module.exports = router;
