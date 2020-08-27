var express = require("express");
var router = express.Router();
const app = express();
const _ = require("lodash");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
let landing = require("../controllers/landing");

const profil = require("../controllers/profile");
const { auth } = require("../middleware");
//ROUTER
router.get("/", auth, profil.showProfile);
router.put("/", auth, profil.updateProfile);
router.post("/upload-avatar", profil.uploadPhoto);
router.post("/upload-photos", profil.uploadMultiPhoto);

module.exports = router;
