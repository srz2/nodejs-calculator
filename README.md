NodeJS Calculator
==================

This is a simple calculator API for me to practice NodeJS and play around.

## Setting Up the API
There is a `.env_sample` file which should be filled out and
renamed to `.env`. This will feed proper enviornment variables to
start the api

## Functions

As of right now, I have implemented the four main arithmetic functions: 
Add, Subtract, Multiply, Divide. I have purposely left out a check for 
division by zero, so I can "test" it when I get to that.

## Using the API

In order to use the API, you must send **POST** `/{operand}` where the
operand is one of the following:
    - add
    - subtract
    - multiply
    - divide
