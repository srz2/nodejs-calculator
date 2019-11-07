const express = require('express');
const calculator = require('../logic/calculator');
const router = express.Router();

module.exports.power = (req, res, next) => {
    const val1 = parseInt(req.body.num1);
    const val2 = parseInt(req.body.num2);
    const val3 = calculator.power(val1, val2);

    res.status(200).json({
        message: "Raised " + val1 + " to the power of " + val2,
        input: {
            number1: val1,
            number2: val2
        },
        output: {
            resultant: val3
        }
    })
};
