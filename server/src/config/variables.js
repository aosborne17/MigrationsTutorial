const dotenv = require("dotenv");

dotenv.config();

const config = {
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
  },
  sqlProd: {
    dbName: "",
    user: "",
    password: "",
  },
  mode: process.env.NODE_ENV,
};

module.exports = {
  config,
};
