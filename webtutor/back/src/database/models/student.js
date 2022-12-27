const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const User = require("./user")

const Student = sequelize.define(
    "student",
    {
       
        registration: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
    },
    {
        freezeTableName: true,
        tableName: "student",
    }
);


module.exports = Student;