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
      var data = {
        userId: user.id,
        email: user.email,
        token,
      };
      res.json({
        status: true,
        code: 200,
        message: "success login",
        data,
      });
    } else {
      models.User.create(req.body).then((user) => {
        const token = jwt.sign({ user }, "thisismysecretkey");
        var data = {
          userId: user.id,
          email: user.email,
          token,
        };
        res.json({
          status: true,
          code: 200,
          message: "success register",
          data,
        });
      });
    }
  });
};
