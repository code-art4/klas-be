const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DBURI = process.env.DATABASE_LINK.replace(
    '<password>',
    process.env.DATABASE_USER_PASSWORD
)

const connectDB = async () => {
    try {
        await mongoose.connect(DBURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB