import { Sequelize, STRING, INTEGER } from "sequelize";
import { config } from "dotenv";

config();

if (!process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_HOST) {
  console.error(
    "Set DB_USER, DB_PASSWORD and DB_HOST as environment variables"
  );
  process.exit(1);
}

const sequelize = new Sequelize(
  "url_shortener",
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

export const url = sequelize.define("register", {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: STRING,
  alias: STRING,
});

sequelize.sync();
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log("Error connecting the database");
    process.exit(1);
  });
