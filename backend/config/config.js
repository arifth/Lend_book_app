// https://stackoverflow.com/questions/38757728/using-an-enviroment-variable-for-local-sequelize-configuration

require("dotenv").config(); // this is important!

module.exports = {
  development: {
    username: "root",
    password: "root",
    port: 8889,
    database: "db_book_lending",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
