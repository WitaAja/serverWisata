var express = require("express");
var router = express.Router();
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
let landing = require("../controllers/landing");

const profil = require("../controllers/profile");
const { auth } = require("../middleware");
//ROUTER
router.get("/", auth, profil.showProfile);

module.exports = router;
