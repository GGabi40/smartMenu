import { Sequelize } from "sequelize"; // facilita trabajo con BBDD relacionales
import dotenv from 'dotenv';

dotenv.config();

// Conecta a la BDD: SQLite o MySQL
const sequelize = new Sequelize({ // SQLite no necesita password o host, pero mySQL sí.
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE
})

export default sequelize;