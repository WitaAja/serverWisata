"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wilayah_provinsi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wilayah_provinsi.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      nama: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Wilayah_provinsi",
      tableName: "wilayah_provinsi",
    }
  );
  return Wilayah_provinsi;
};
