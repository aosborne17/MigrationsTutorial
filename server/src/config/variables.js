const dotenv = require("dotenv");

dotenv.config();

const config = {
  redis: {
    port: process.env.REDIS_PORT || 6379,
    host: process.env.REDIS_HOST || "redis",
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
