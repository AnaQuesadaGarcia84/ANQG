import {DataTypes} from 'sequelize'
import db from '../config/connectdb'

const Curso = db.define('Curso',{
    refcurso: {
        type: DataTypes.NUMBER,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    categoria: {
        type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING,
    },
    duracion: {
        type: DataTypes.NUMBER,
    },
    temas: {
        type: DataTypes.STRING,
    },
    
},{
    createdAt: false,
    updatedAt: false
});

export default Curso