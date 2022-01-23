const express = require('express');
const cors = require('cors');
const dbconnect = require('./DB/dbconnect_promise.js');
const dotenv = require('dotenv');
const UserRoutes = require('./routes/userRoutes');
const PostRoutes = require('./routes/postRoutes');
const ContactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


app.use('/user', UserRoutes);
app.use('/post', PostRoutes);
app.use('/contact', ContactRoutes);



var PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`EXPRESS Server Started at Port No: ${PORT}`));