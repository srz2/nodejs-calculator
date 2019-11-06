const express = require('express');
const calculator = require('../logic/calculator');
const router = express.Router();

module.exports.divide = (req, res, next) => {
    const val1 = req.body.num1;
    const val2 = req.body.num2;
    const val3 = calculator.divide(val1, val2);

    res.status(200).json({
        message: "Divided numbers",
        input: {
            number1: val1,
            number2: val2
        },
        output: {
            resultant: val3
        }
    })
};
