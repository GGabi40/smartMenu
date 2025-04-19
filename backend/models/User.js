import { DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

const User = sequelize.define('User', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.ENUM('mozo', 'cocina'),
        allowNull: false
    }
});

export default User;