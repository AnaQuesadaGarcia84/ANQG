import {DataTypes} from 'sequelize'
import db from '../config/connectdb'

const Mensaje = db.define('Mensaje',{
    nombre: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    asunto: {
        type: DataTypes.STRING,
    },
    mensaje: {
        type: DataTypes.STRING,
    },

},{
    createdAt: false,
    updatedAt: false
});

export default Mensaje

