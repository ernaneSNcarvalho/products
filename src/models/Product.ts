import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/pg';

export interface ProductInstance extends Model {
    id: number;
    name: string;
    stock: number;
    price: number;
}

export const Product = sequelize.define('Product', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'Product',
    timestamps: false
});