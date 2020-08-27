const models = require("../models");

exports.showProfile = (req, res) => {
  console.log("userrid", userId);
  models.User.findOne({
    where: { id: userId },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  }).then((data) => {
    res.send({
      status: true,
      code: 200,
      message: "success get profile",
      data,
    });
  });
};

exports.updateProfile = (req, res) => {
  try {
    models.User.findOne({
      where: {
        id: userId,
      },
    })
      .then((data) => {
        models.User.update(req.body, { where: { id: data.id } });
      })
      .then((respon) => {
        res.send({
          status: true,
          code: 200,
          message: "success update",
        });
      });
  } catch (error) {
    res.send(error);
  }
};
