import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db.js";

export class pedidosplatos extends Model {}

pedidosplatos.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_pedido: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        id_plato: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "pedidosplatos",
        timestamps: false,
    }
);
