import redis from "redis";
import config from "../config/variables";

const redisClient = redis.createClient({
  port: parseInt(config.redis.port),
  host: config.redis.host,
});

export { redisClient };
