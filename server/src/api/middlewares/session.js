const session = require("express-session");
const connectRedis = require("connect-redis");

const { redisClient } = require("../../config/redis");

const RedisStore = connectRedis(session);

const redisSession = session({
  store: new RedisStore({ client: redisClient }),
  secret: "secret",
  saveUninitialized: false,
  resave: false,
  name: "sessionId",
  cookie: {
    // only send back if incoming req is https (encrypted)
    secure: false,
    // prevents client side js reading the cookie
    httpOnly: true,
    // age of the session-cookie in milliseconds
    maxAge: 1000 * 60 * 30,
  },
});

module.exports = {
  redisSession,
};
