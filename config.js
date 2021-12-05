require('dotenv').config()

const config = {
    userJwtSecret: process.env.AUTH_USER_JWT_SECRET,
    dbUrl: process.env.DATABASE_URL,
    nodeEnv: process.env.NODE_ENV
}

module.exports = config