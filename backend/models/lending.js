"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lending extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        as: "users",
        foreignKey: "userId",
      });
      // this.hasMany(models.Book, {
      //   as: "book",
      //   foreignKey: "bookId",
      // });
    }
  }
  Lending.init(
    {
      userId: DataTypes.INTEGER,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
      approval: DataTypes.BOOLEAN,
      returned: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Lending",
    }
  );
  return Lending;
};
