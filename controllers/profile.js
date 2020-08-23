const models = require("../models");

exports.showProfile = (req, res) => {
  console.log("userrid", userId);
  models.User.findOne({
    where: { id: userId },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  }).then((data) => {
    res.send(data);
  });
};
