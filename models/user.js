const { DataTypes } = require('sequelize');
const db = require('../db')

const User = db.define('user', {
    username: {
        tope: DataTypes.STRING(100),
        allowNull: false, 
        unique: true,
    },
    password: {
        type: DataTypes.password, 
        allowNull: false
    }
});

module.exports = User;