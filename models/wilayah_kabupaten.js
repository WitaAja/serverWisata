"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wilayah_kabupaten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wilayah_kabupaten.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      provinsi_id: DataTypes.STRING,
      nama: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Wilayah_kabupaten",
      tableName: "wilayah_kabupaten",
    }
  );
  return Wilayah_kabupaten;
};
