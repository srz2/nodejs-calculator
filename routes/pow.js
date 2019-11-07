const express = require('express');
const router = express.Router();

const controllerPow = require('../controllers/pow');

router.get('/', (req, res, next) => {
    res.render('function', { functionName: 'Power' });
});

router.post('/', controllerPow.power);

module.exports = router;
