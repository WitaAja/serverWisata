const models = require("../models");
const _ = require("lodash");
const { response } = require("express");
const Users = require("../models").User;
const Provinsi = require("../models").Provinsi;
const Kota = require("../models").Kota;

exports.createPosting = (req, res) => {

    models.Posting.create(req.body).then(response => {res.send(response)})
    console.log(response)
};

exports.index = (req, res) => {
    try{
        models.Posting.findAll({
            include: [
            
              {
                model: Users,
                as: "user",
                attributes: ["id", "name","foto"]
              },
              {
                model: Provinsi,
                as: "as_provinsi",
                attributes: ["id", "name",]
              },
              {
                model: Kota,
                as: "as_kota",
                attributes: ["id", "name",]
              }
            ]
          }).then(data =>{
            res.send({
                status: true,
                code: 200,
                message: "success get data",
                data
              });
          } );
    }catch (error){
        res.send(error)
    }  
  };