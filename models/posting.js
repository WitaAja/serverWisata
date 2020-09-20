'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posting.belongsTo(models.User, {
        foreignKey: "createdBy",
        as: "user",
        sourceKey: "id"
      });
      Posting.belongsTo(models.Provinsi, {
        foreignKey: "prov",
        as: "as_provinsi",
        sourceKey: "id"
      });
      Posting.belongsTo(models.Kota, {
        foreignKey: "kota",
        as: "as_kota",
        sourceKey: "id"
      });
      //Posting.hasMany(models.Image, { foreignKey: "postingsId" });
    }
  };
  Posting.init({
    description: DataTypes.STRING,
    prov: DataTypes.INTEGER,
    kota: DataTypes.INTEGER,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posting',
  });
  //const {users} = models;
  //Posting.belongsTo(Model.users)
  
  return Posting;
};


// "use strict";
// module.exports = (sequelize, DataTypes) => {
//   const postings = sequelize.define(
//     "postings",
//     {
//       description: DataTypes.STRING,
//     prov: DataTypes.INTEGER,
//     kota: DataTypes.INTEGER,
//     createdBy: DataTypes.STRING
//     },
//     {}
//   );
//   postings.associate = function(models) {
   
//     postings.belongsTo(models.User, {
//       foreignKey: "createdBy",
//       as: "users",
//       sourceKey: "id"
//     });

//     //postings.hasMany(models.comments, { foreignKey: "articleId" });
//   };
//   return postings;
// };
