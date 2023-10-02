import 'dotenv/config';
import express from 'express';
import cors from 'cors';

//importamos la conexion con la base de datos
import sequelize from './config/connectdb';
//Rutas con la base de datos
import routerUsuario from './routes/UsuarioRoutes'
import routerMensajes from './routes/MensajeRoutes';
import routerCursos from './routes/CursoRoutes';
import routerTareas from './routes/TareasRoutes';
import routerAdminService from './routes/admiServiceRoutes';
import routerArchivos from './routes/ArchivoRoutes';



const PORT = process.env.PORT || 3001;
//Coneciones exteriores con express
const app = express();

//Conexiones dentro de la app con cors
app.use(cors());
app.use(express.json());
app.use(routerUsuario);
app.use(routerMensajes);
app.use(routerCursos);
app.use(routerTareas);
app.use(routerAdminService);
app.use(routerArchivos);

//Para poder llamar a una variable en el mensaje usamos estasas comillas:``
app.listen(PORT, () => console.log(`Api conectada por el puerto ${PORT}`));

try {
    sequelize.authenticate();
    console.log('La conexión con la Base de Datos es correcta');
} catch (error) {
    console.error('No se ha podido realizar la conexión con la base de datos', error)
}


