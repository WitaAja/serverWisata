'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagePost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // imagePost.belongsTo(models.Posting, {
      //   foreignKey: "postingsId",
      //   as: "posting",
      //   sourceKey: "id"
      // });
    }
  };
  imagePost.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    postingsId: DataTypes.STRING,
    urlimg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'imagePost',
  });
  return imagePost;
};


