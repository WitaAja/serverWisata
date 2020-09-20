const models = require("../models");
const _ = require("lodash");

exports.showProvinsi = (req, res) => {
  try {
    models.Provinsi.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    }).then((data) => {
      console.log("dataaa", data);
      res.send({
        status: true,
        code: 200,
        message: "success get data`",
        data,
      });
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.showKabupaten = (req, res) => {
  try {
    models.Kota.findAll({
      where: { provinsi_id: req.params.id_prov },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    }).then((data) => {
      console.log("dataaa", data);
      res.send({
        status: true,
        code: 200,
        message: "success get data`",
        data,
      });
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
