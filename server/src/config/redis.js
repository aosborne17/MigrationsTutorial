const redis = require("redis");
const { config } = require("./variables");

const redisClient = redis.createClient({
  port: parseInt(config.redis.port),
  host: config.redis.host,
});

module.exports = {
  redisClient,
};
