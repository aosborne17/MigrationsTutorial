import session from "express-session";
import connectRedis from "connect-redis";
import { redisClient } from "../../config/redis";

const RedisStore = connectRedis(session);

export default session({
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
