const express = require('express');
const parser = require('body-parser');
const log = require('morgan');

// Routes
const routeAdd = require('./routes/add');
const routeSub = require('./routes/sub');
const routeMul = require('./routes/multiply');
const routeDiv = require('./routes/divide');

const app = express();

// Enable Logging
app.use(log('dev'));

// Configure Body parser
app.use(parser.urlencoded({
    extended: false
}));
app.use(parser.json());

app.use('/add', routeAdd);
app.use('/subtract', routeSub);
app.use('/multiply', routeMul);
app.use('/divide', routeDiv);

// Catch All routes
app.use((req, res, next) => {
    res.status(200).json({
        message: 'Catch all Gets'
    });
});

// Catch All Error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'Catch all Error'
    });
});

module.exports = app;
