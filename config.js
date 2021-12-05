require('dotenv').config()

const config = {
    userJwtSecret: process.env.AUTH_USER_JWT_SECRET,
    dbUrl: process.env.DATABASE_URL,
    env: process.env.ENV
}

module.exports = config