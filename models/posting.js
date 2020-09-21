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
      Posting.belongsTo(models.Categories, {
        foreignKey: "category",
        as: "as_category",
        sourceKey: "id"
      });
      Posting.hasMany(models.imagePost, {
         foreignKey: "postingsId" ,
         as :"imageposts",
         sourceKey: "id"
        });
    } 
  };
  Posting.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    description: DataTypes.STRING,
    prov: DataTypes.INTEGER,
    kota: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posting',
  });
 
  return Posting;
};
