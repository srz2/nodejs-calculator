const express = require('express');
const router = express.Router();

const controllerAdd = require('../controllers/add');

router.get('/', (req, res, next) => {
    res.render('function', {functionName: 'Add', operation: 'add' });
});

router.post('/', controllerAdd.add);

module.exports = router;
