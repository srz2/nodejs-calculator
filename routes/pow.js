const express = require('express');
const router = express.Router();

const controllerPow = require('../controllers/pow');

router.get('/', (req, res, next) => {
    res.render('function', { functionName: 'Power', operation: 'pow' });
});

router.post('/', controllerPow.power);

module.exports = router;
