require("dotenv").config();
const sequelize = require('./src/database/sequelize')


const app = require('./src/app');
const port = process.env.PORT || 5000;

app.listen(port, async () => {
  /*const User = require('./src/database/models/user')
  const Teacher = require('./src/database/models/Teacher')
  const Student = require('./src/database/models/Student')*/
  await sequelize.sync()
  console.log('Aplicação executando na porta ', port);
});