require('dotenv').config({ path: '../.env' });

const config = {
    user: process.env.DATABASE_USERNAME_LOGIN,
    host: process.env.DATABASE_SERVER_NAME,
    database: process.env.DATABASE_DB_NAME,
    password: process.env.DATABASE_PASSWORD_LOGIN,
    port: process.env.DATABASE_PORT
}
module.exports = config;


