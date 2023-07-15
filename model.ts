import { Sequelize, STRING, INTEGER } from "sequelize";
import { config } from "dotenv";

config();

if (!process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_HOST || !process.env.DB_NAME) {
  console.error(
    "Set DB_USER, DB_PASSWORDm DB_NAME and DB_HOST as environment variables"
  );
  process.exit(1);
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT? Number(process.env.DB_PORT):undefined,
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
}, {
  timestamps: false
});

sequelize.sync();
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log("Error connecting the database", err.message);
    process.exit(1);
  });
