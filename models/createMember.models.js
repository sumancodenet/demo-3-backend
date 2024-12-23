import { DataTypes } from "sequelize"
import sequelize from "../db.js"
import { v4 as uuidv4 } from "uuid"

const member = sequelize.define(
    'member',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.STRING,
            defaultValue: uuidv4(),
            allowNull: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        timestamps: false,
    }
);
export default member;
