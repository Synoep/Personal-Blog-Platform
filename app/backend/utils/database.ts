import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres', // or 'mysql', 'sqlite', etc.
});

export default sequelize;
