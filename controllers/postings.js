const models = require("../models");
const _ = require("lodash");
const { response } = require("express");
const Users = require("../models").User;
const Provinsi = require("../models").Provinsi;
const Kota = require("../models").Kota;
const imagePost = require("../models").imagePost;
const url = require("../constant").url

//api create posting
exports.createPosting = (req, res) => {
  try{
    const reqBody ={
      description: req.body.description,   
      prov: req.body.prov,
      kota: req.body.kota,
      createdBy: userId
    }
    models.Posting.create(reqBody).then(response => {
        if (!req.files) {
            res.send({
              status: false,
              message: "No file uploaded",
            });
          } else {
            let data = [];
            let request = [];
            //loop all files
            _.forEach(_.keysIn(req.files.photos), (key) => {
              let photo = req.files.photos[key];
              photo.name = response.id + photo.name
      
              //move photo to uploads directory
              photo.mv("./uploads/" + photo.name);
      
              //push file details
              data.push({
                name: photo.name,
                mimetype: photo.mimetype,
                size: photo.size,
              });
              request.push({
                postingsId : response.id,
                urlimg : photo.name
              })
              request1 = {
                postingsId : response.id,
                urlimg : url+ photo.name
              };
              models.imagePost.create(request1).then(res => {
                
              })
            });
                    
            //return response
            res.send({
              status: true,
              message: "Files are uploaded",
              posting:response,
              image:request
            });
          }
        })  
  }catch (e){
    res.send({
      status:false,
      message:"create postings error",
      error: e
    })
  } 
};

//api get all posting
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
              },
              {
                model: imagePost,
                as: "imageposts",              
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