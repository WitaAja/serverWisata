const models = require("../models");
const jwt = require("jsonwebtoken");

exports.get_landing = function (req, res, next) {
  res.render("landing", { title: "Express" });
};

exports.submit_lead = function (req, res, next) {
  console.log("lead email:", req.body.lead_email);
  return models.User.create({
    email: req.body.lead_email,
  }).then((lead) => {
    res.redirect("/");
  });
};
