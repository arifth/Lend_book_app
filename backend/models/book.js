"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, {
        as: "categories",
        foreignKey: "categoryId",
      });
      this.belongsTo(models.Users, {
        as: "users",
        foreignKey: "userId",
      });
    }
  }
  Book.init(
    {
      Title: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      Year: DataTypes.INTEGER,
      Author: DataTypes.STRING,
      Description: DataTypes.TEXT,
      cover: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
