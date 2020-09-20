var express = require("express");
var router = express.Router();
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const posting = require("../controllers/postings");

//ROUTER
router.post("/", posting.createPosting);
router.get("/",posting.index)


module.exports = router;
