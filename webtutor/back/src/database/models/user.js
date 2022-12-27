const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Teacher = require("./teacher")
const Student = require("./student")


const User = sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        formation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        freezeTableName: true,
        tableName: "user",
    }
);

Student.belongsTo(User, {
    constranit: true,
    foreignKey: "idUser",
    allowNull: false,
   
});
Teacher.belongsTo(User, {
    constranit: true,
    foreignKey: "idUser",
    allowNull: false,
});



module.exports = User;
