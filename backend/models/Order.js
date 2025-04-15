import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Order = sequelize.define('Order', {
    cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mesa: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    detalle: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pendiente'
    }
});

export default Order;