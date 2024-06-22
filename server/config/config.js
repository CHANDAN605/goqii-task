import dotenv from "dotenv";

dotenv.config();

export default {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: "mysql",
  },
};
