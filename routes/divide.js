const express = require('express');
const router = express.Router();

const controllerDivide = require('../controllers/divide');

router.get('/', (req, res, next) => {
    res.status(500).json({
        message: "GET is not used. Divide with a post request"
    });
});

router.post('/', controllerDivide.divide);

module.exports = router;
