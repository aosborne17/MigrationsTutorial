const { redisClient } = require("../config/redis");

afterAll(() => redisClient.quit());
