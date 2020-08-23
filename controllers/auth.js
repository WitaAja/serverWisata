const jwt = require("jsonwebtoken");
const models = require("../models");
const Users = require("../models").users;

exports.login = (req, res) => {
  const email = req.body.email;

  models.User.findOne({
    where: { email },
  }).then((user) => {
    if (user) {
      const token = jwt.sign({ user }, "thisismysecretkey");
      res.send({
        userId: user.id,
        email: user.email,
        message: "success login",
        token,
      });
    } else {
      models.User.create(req.body).then((user) => {
        const token = jwt.sign({ user }, "thisismysecretkey");
        res.send({
          userId: user.id,
          message: "success Registered ",
          email: user.email,
          token,
        });
      });
    }
  });
};
