const express = require('express');
const router = express.Router();

const controllerMultiply = require('../controllers/multiply');

router.get('/', (req, res, next) => {
    res.render('function', { functionName: 'Multiply', operation: 'multiply' });
});

router.post('/', controllerMultiply.multiply);

module.exports = router;
