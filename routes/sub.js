const express = require('express');
const router = express.Router();

const controllerSub = require('../controllers/sub');

router.get('/', (req, res, next) => {
    res.render('function', { functionName: 'Subtract' });
});

router.post('/', controllerSub.subtract);

module.exports = router;
