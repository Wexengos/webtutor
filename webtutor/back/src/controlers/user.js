const User = require('../database/models/user')
const Teacher = require('../database/models/teacher')
const Student = require('../database/models/student')
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer"); // Importa o módulo principal


module.exports = {
  create: async function (req, res, next) {
    const { name, age, address, formation, email, password, cpf, type, identification} = req.body;
    const errors = [];

    if (!name) {
      errors.push({ error: "name is empty" });
    }

    if (!cpf) {
      errors.push({ error: "CPF is empty" });
    }

    if (!age) {
      errors.push({ error: "age is empty" });
    }

    if (!address) {
      errors.push({ error: "address is empty" });
    }

    if (!formation) {
      errors.push({ error: "formation is empty" });
    }

    if (!email) {
      errors.push({ error: "Email is empty" });
    }

    if (!password) {
      errors.push({ error: "Password is empty" });
    }

    if (!identification) {
      errors.push({ error: "identification is empty" });
    }

    if (errors.length > 0) return res.status(400).json(errors);

    User.findAll({
      where: {
        cpf: cpf,
      },
    }).then((result) => {
      if (result != "") {
        return res.status(400).send({ error: "CPF already exists" });
      }
    });
    User.findAll({
      where: {
        email: email,
      },
    }).then((result) => {
      if (result != "") {
        return res.status(400).send({ error: "Username already exists" });
      }
    });
    if(type == 'teacher'){
      Teacher.findAll({
        where: {
          register: identification,
        },
      }).then((result) => {
        if (result != "") {
          return res.status(400).send({ error: "register already exists" });
        }
      });
    }else{
      Student.findAll({
        where: {
          registration: identification,
        },
      }).then((result) => {
        if (result != "") {
          return res.status(400).send({ error: "registration already exists" });
        }
      });
    }

    await User.create({
      name,
      cpf: cpf.replace(/\D/g, ""),
      age,
      address,
      formation,
      email,
      password: bcrypt.hashSync(password, 10),
    })
      .then(async (result) => {
         console.log('id user')
         console.log(result.id)
        if (type == 'teacher') {

          await Teacher.create({
            register: identification,
            idUser: result.id
          })
            .then((result) => {
              bcrypt.hashSync(password, 10), res.status(201).json(result); //return with ID -> 201 (CREATED)
            })
            .catch(next);
        } 
        else {

          await Student.create({
            registration: identification,
            idUser: result.id
          })
            .then((result) => {
              bcrypt.hashSync(password, 10), res.status(201).json(result); //return with ID -> 201 (CREATED)
            })
            .catch(next);
        }
      })
      .catch(next);

  },

}


