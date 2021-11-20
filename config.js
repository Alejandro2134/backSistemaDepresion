require('dotenv').config()

const config = {
    userJwtSecret: process.env.AUTH_USER_JWT_SECRET,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbHost: process.env.DB_HOST
}

module.exports = config