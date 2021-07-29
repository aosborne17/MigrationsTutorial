const fs = require("fs");

module.exports = {
  development: {
    username: "database_dev",
    password: "database_dev",
    database: "database_dev",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  // test: {
  //   username: process.env.CI_DB_USERNAME,
  //   password: process.env.CI_DB_PASSWORD,
  //   database: process.env.CI_DB_NAME,
  //   host: "127.0.0.1",
  //   port: 3306,
  //   dialect: "mysql",
  //   dialectOptions: {
  //     bigNumberStrings: true,
  //   },
  // },
  test: {
    username: "root",
    password: "admin",
    database: "test_db",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },

  production: {
    username: "root",
    password: "admin",
    database: "test_db",
    host: "mysql",
    port: 3306,
    dialect: "mysql",
  },
};
