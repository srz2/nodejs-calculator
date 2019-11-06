const express = require('express');
const calculator = require('../logic/calculator');
const router = express.Router();

module.exports.subtract = (req, res, next) => {
    const val1 = parseInt(req.body.num1);
    const val2 = parseInt(req.body.num2);
    const val3 = calculator.subtraction(val1, val2);

    res.status(200).json({
        message: "Numbers subtracted",
        input: {
            number1: val1,
            number2: val2
        },
        output: {
            resultant: val3
        }
    })
};