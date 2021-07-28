import dotenv from "dotenv";

dotenv.config();


export default {
  redis: {
    port: process.env.REDIS_PORT as string,
    host: process.env.REDIS_HOST as string,
  },
  sqlProd: {
    dbName: "",
    user: "",
    password: "",
  },
  mode: process.env.NODE_ENV,
};
