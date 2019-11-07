const chai = require('chai');

describe('Calculator Logic', function() {

    const calc = require('../logic/calculator');

    describe('Addition Calculation', function() {
        it('Addition', function() {
            const result = calc.addition(5, 6);
            chai.assert.equal(result, 11, 'Addition Fails');
        });    
    });

    describe('Subtraction Calculation', function() {
        it('Subtraction with larger Minuend', function() {
            const result = calc.subtraction(10, 6);
            chai.assert.equal(result, 4, 'Subtraction Fails: Expecting 4');
        });

        it('Subtraction with equal number', function() {
            const result = calc.subtraction(5, 5);
            chai.assert.equal(result, 0, 'Subtraction Fails: Execpting 0');
        });

        it('Subtraction with smaller Minuend', function() {
            const result = calc.subtraction(5, 20);
            chai.assert.equal(result, -15, 'Subtraction Fails: Expecting -15');
        });
    });

    describe('Multiplication Calculation', function() {
        it('Multiply with 0', function() {
            const result = calc.multiply(5, 0);
            chai.assert.equal(result, 0, 'Multiplication Fails');
        });

        it('Multiply with 1', function() {
            const result = calc.multiply(5, 1);
            chai.assert.equal(result, 5, 'Multiplication Fails');
        });

        it('Multiply with number', function() {
            const result = calc.multiply(5, 7);
            chai.assert.equal(result, 35, 'Multiplication Fails');
        });

        it('Multiply with negative number', function() {
            const result = calc.multiply(5, -5);
            chai.assert.equal(result, -25, 'Multiplication Fails');
        });

        it('Multiply with both negatives', function() {
            const result = calc.multiply(-5, -5);
            chai.assert.equal(result, 25, 'Multiplication Fails');
        });
    });

    describe('Division Calculation', function(){
        it('Numerator larger than denominator', function() {
            const result = calc.divide(9, 6);
            chai.assert.equal(result, 1.5, 'Division Fails');
        });

        it('Numerator equal to denominator', function() {
            const result = calc.divide(6, 6);
            chai.assert.equal(result, 1, 'Division Fails');
        });

        it('Numerator smaller than denominator', function() {
            const result = calc.divide(3, 6);
            chai.assert.equal(result, 0.5, 'Division Fails');
        });

        it('Division by Zero', function() {
            const result = calc.divide(3, 0);
            chai.assert.equal(result, Infinity, 'Division Fails');
        });
    });

    describe('Exponent Calculation', function() {
        it('Raise a number to a power', function() {
            const result = calc.power(2, 16);
            chai.assert.equal(result, 65536, "Exponent Fails")
        });

        it('Raise a number to a power of zero', function() {
            const result = calc.power(2, 0);
            chai.assert.equal(result, 1, "Exponent Fails")
        });

        it('Raise a number to a power of 1', function() {
            const result = calc.power(2, 1);
            chai.assert.equal(result, 2, "Exponent Fails")
        });
    });
});