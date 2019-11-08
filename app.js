const express = require('express');
const parser = require('body-parser');
const log = require('morgan');

// Routes
const routeAdd = require('./routes/add');
const routeSub = require('./routes/sub');
const routeMul = require('./routes/multiply');
const routeDiv = require('./routes/divide');
const routePow = require('./routes/pow');

const app = express();

// Enable Logging
app.use(log('dev'));

// Declare a public folder for serving CSS and JS
app.use(express.static('public'));

// Enable EJS as the render
app.set('view engine', 'ejs');

// Configure Body parser
app.use(parser.urlencoded({
    extended: false
}));
app.use(parser.json());

// CORS Error Handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE');
        return res.status(200).json({

        });
    }
    next();
});

app.use('/add', routeAdd);
app.use('/subtract', routeSub);
app.use('/multiply', routeMul);
app.use('/divide', routeDiv);
app.use('/pow', routePow);

// Catch All Routes - Present Main Page
app.use((req, res, next) => {
    res.render('index');
});

// Catch All Error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'Catch all Error'
    });
});

module.exports = app;
