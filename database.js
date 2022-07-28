import sequelize from "sequelize";
import {Sequelize} from "sequelize";

const db = new sequelize('crud_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
