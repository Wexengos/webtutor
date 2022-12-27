const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const User = require("./user")


const Teacher = sequelize.define(
    "teacher",
    {
      
        register: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
    },
    {
        freezeTableName: true,
        tableName: "teacher",
    }
);


module.exports = Teacher;