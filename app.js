const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const authRouter = require('./app/api/auth/router');
const categoriesRouter = require('./app/api/categories/router');
const booksRouter = require('./app/api/books/router');
const uploadsRouter = require('./app/api/uploads/router');
const URL = '/api/v1';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to API Toko Buku Pak Erwin'
    });
});
app.use(`${URL}`, authRouter);
app.use(`${URL}`, categoriesRouter);
app.use(`${URL}`, booksRouter);
app.use(`${URL}`, uploadsRouter);

module.exports = app;
