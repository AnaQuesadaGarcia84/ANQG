import {DataTypes} from 'sequelize'
import db from '../config/connectdb'

const UserModel= db.define('Usuario',{
    nombre: {
        type: DataTypes.STRING,
    },
    apellidos: {
        type: DataTypes.STRING,
    },
    fNacimiento: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    foto: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    tipo: {
        type: DataTypes.STRING,
    },
    
    anotaciones: {
        type: DataTypes.STRING,
    },
},{
    createdAt: false,
    updatedAt: false
});

export {UserModel}

