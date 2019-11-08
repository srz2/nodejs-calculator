const express = require('express');
const router = express.Router();

const controllerDivide = require('../controllers/divide');

router.get('/', (req, res, next) => {
    res.render('function', { functionName: 'Divide', operation: 'divide' });
});

router.post('/', controllerDivide.divide);

module.exports = router;
