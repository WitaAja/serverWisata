var express = require("express");
var router = express.Router();
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const AUTH = require("../controllers/auth");

//ROUTER
router.post("/login", AUTH.login);

module.exports = router;
