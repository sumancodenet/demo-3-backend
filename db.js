import { Sequelize } from "sequelize";
import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const sequelize = new Sequelize(process.env.DB_DBNAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.')
}).catch((error) => {
    console.log('Unable to connect to the database:', error)
});

export default sequelize;