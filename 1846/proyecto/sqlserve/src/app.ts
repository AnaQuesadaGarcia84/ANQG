import 'dotenv/config';
import express from 'express';
import cors from 'cors';
// import {router} from './routes';

const PORT = process.env.PORT || 3001;
//Coneciones exteriores con express
const app = express();

//Conexiones dentro de la app con cors
app.use(cors());
app.use(express.json());

//Para poder llamar a una variable en el mensaje usamos estasas comillas:``
app.listen(PORT, () => console.log(`Api conectada por el puerto ${PORT}`));

