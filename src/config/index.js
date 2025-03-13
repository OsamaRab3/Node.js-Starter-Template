require('dotenv').config()


module.exports = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL || 'Your DB_URL',
    JWT_SECRET: process.env.JWT_SECRET || 'your_secret_key',

    // insert here all .env variables 
}