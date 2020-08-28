var express = require("express");
var router = express.Router();
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const wilayah = require("../controllers/wilayah");

//ROUTER
router.get("/provinsi", wilayah.showProvinsi);
router.get("/kabupaten/:id_prov", wilayah.showKabupaten);

module.exports = router;
