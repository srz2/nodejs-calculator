const express = require('express');
const router = express.Router();

const controllerAdd = require('../controllers/add');

router.get('/', (req, res, next) => {
    res.status(500).json({
        message: "GET is not used. Add with a post request"
    });
});

router.post('/', controllerAdd.add);

module.exports = router;
