import { DataType, DataTypes } from "sequelize";
import db from '../config/connectdb';

const Archivo = db.define('Archivo',{
    filename: {
        type: DataTypes.STRING
    },
    idUser:{
        type: DataTypes.NUMBER
    },
    path: {
        type: DataTypes.STRING
    },
});

export default Archivo
