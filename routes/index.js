var express = require("express");
var router = express.Router();
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
let landing = require("../controllers/landing");

router.get("/", landing.get_landing);
module.exports = router;
