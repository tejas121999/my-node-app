const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
// const config = require('../config/config');
require('dotenv').config()

const db = {};
let sequelize;
// by using Sequelize here we connect db to node.js  
sequelize = new Sequelize({
    database: "task_manager",
    username: "root",
    host: "localhost",
    dialect: "mysql",
    port: "3306",
    password: "admin123",
})
if (sequelize) {
    console.log("connection with db")
} else {
    console.log("can't connect with db")
}



// here we manage file inside models folder 
fs.readdirSync(__dirname)
    .filter((file) => {
        return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        console.log(model)
        db[model.name] = model;
    });

// here we check join of table
Object.keys(db).forEach((modelName) => {
    // console.log(db, modelName)
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
module.exports = db;