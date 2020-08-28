const models = require("../models");
const _ = require("lodash");

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

exports.uploadMultiPhoto = (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      let data = [];

      //loop all files
      _.forEach(_.keysIn(req.files.photos), (key) => {
        let photo = req.files.photos[key];

        //move photo to uploads directory
        photo.mv("./uploads/" + photo.name);

        //push file details
        data.push({
          name: photo.name,
          mimetype: photo.mimetype,
          size: photo.size,
        });
      });

      //return response
      res.send({
        status: true,
        message: "Files are uploaded",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.uploadPhoto = (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let avatar = req.files.avatar;

      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      avatar.mv("./uploads/" + avatar.name);

      //send response
      res.send({
        status: true,
        message: "File is uploaded",
        data: {
          name: avatar.name,
          mimetype: avatar.mimetype,
          size: avatar.size,
        },
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.showProvinsi = (req, res) => {
  models.Wilayah_provinsi.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  }).then((data) => {
    console.log("dataaa", data);
    res.send({
      status: true,
      code: 200,
      message: "success get profile",
      data,
    });
  });
};
