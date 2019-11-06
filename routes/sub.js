const express = require('express');
const router = express.Router();

const controllerSub = require('../controllers/sub');

router.get('/', (req, res, next) => {
    res.status(500).json({
        message: "GET is not used. Subtract with a post request"
    });
});

router.post('/', controllerSub.subtract);

module.exports = router;
