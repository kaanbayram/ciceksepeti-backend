const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const port = process.env.PORT || 4000;
const cors = require('cors');

connectDB();

const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', require('./routes/productRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));

//CICEKSEPETI