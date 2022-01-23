const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()


const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;
const DBNAME = process.env.DBNAME;

const URL = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.cpzn8.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(
        URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => {
        console.log('NODEJS to MONGODB Connection Establish......')
    })
    .catch(err => {
        console.error('Error in DB Connection...' + JSON.stringify(err, undefined, 2));
        console.log(err)
        process.exit();
    });

module.exports = mongoose;