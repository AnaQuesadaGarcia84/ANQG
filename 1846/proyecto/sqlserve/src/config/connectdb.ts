import { Sequelize } from "sequelize";

const sequelize = new Sequelize('proyecto','root','n&ujFfo8n$8JMUY@',{
    host: '127.0.0.01',
    dialect: 'mysql'
});


export default sequelize;
