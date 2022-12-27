const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Bearer } = require("permit");
const { Basic } = require("permit");
require('dotenv').config
const crypto = require("crypto");
const User = require('../database/models/user')
const Teacher = require('../database/models/teacher')
const Student = require('../database/models/student')

const permit = new Bearer();

module.exports ={
    login(req, res, next) {
        const { email, password } = req.body;

        User.findOne({
          where: {
            email: email,
          },
        }).then((user) => {
          //email does not exists
          if (!user) return res.status(401).json({ error: "email not found" });
    
          //password check
          if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ error: "invalid password" });
          }
    
          //generate & sign token
          let jwtPayload = { admin: user.admin }; //public payload!
          let token = jwt.sign(jwtPayload, process.env.JWT_SECRET); //user: user
          let cpf = user.cpf ;
          let admin = user.admin;
          return res.status(200).json({ token, email, cpf, admin });
        })
        .catch(next);
      },
}
