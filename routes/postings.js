var express = require("express");
var router = express.Router();
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const { auth } = require("../middleware");
const posting = require("../controllers/postings");

//ROUTER
//create posting
router.post("/",auth, posting.createPosting); 
// get all posting
router.get("/",posting.index)
//get my posting
router.post("/myPosting",auth,posting.myPosting)
//get search posting
router.post("/postingSearch",auth,posting.postingSearch)


module.exports = router;
