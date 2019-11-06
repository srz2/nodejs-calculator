const express = require('express');
const router = express.Router();

const controllerMultiply = require('../controllers/multiply');

router.get('/', (req, res, next) => {
    res.status(500).json({
        message: "GET is not used. Multiply with a post request"
    });
});

router.post('/', controllerMultiply.multiply);

module.exports = router;
