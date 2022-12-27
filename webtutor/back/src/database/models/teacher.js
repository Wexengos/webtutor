const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const User = require("./user")


const Teacher = sequelize.define(
    "teacher",
    {
      
        register: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
    },
    {
        freezeTableName: true,
        tableName: "teacher",
    }
);


module.exports = Teacher;