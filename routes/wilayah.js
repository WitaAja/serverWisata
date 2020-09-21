var express = require("express");
var router = express.Router();
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const wilayah = require("../controllers/wilayah");

//ROUTER
//get provinsi
router.get("/provinsi", wilayah.showProvinsi);
//get kota/kab
router.get("/kota/:id_prov", wilayah.showKabupaten);

module.exports = router;
