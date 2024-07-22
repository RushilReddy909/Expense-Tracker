const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const { connect } = require('http2');
const connectDB = require('./config/connectDB');

dotenv.config();

connectDB();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("<h1>Hello Server</h1>");
})

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})