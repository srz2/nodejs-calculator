NodeJS Calculator
==================

[![Build Status](https://travis-ci.org/srz2/nodejs-calculator.svg?branch=master)](https://travis-ci.org/srz2/nodejs-calculator)

This is a simple calculator API for me to practice NodeJS and play around.

## Setting Up the API
There is a `.env_sample` file which should be filled out and
renamed to `.env`. This will feed proper enviornment variables to
start the api.

After cloning down the project simply running install command should set you up

    npm install

## Using the API

In order to use the API, you must send **POST** `/{operand}` where the
operand is one of the following:

    - add
    - subtract
    - multiply
    - divide
    - pow

### Web Page Interaction

I also added some web page interaction while the API is running.
The base path will present a menu, of sorts, which will guide to
the function page. The function page will act as a small interface
to interact with the API

## Website Link

[Live Web App](https://srz2-calculator-api.herokuapp.com/)
