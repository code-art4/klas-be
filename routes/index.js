const express = require('express');
const router = express.Router();
const dataSetController = require('../controllers/dataset');

router
    .get('/', dataSetController.getData)
    .patch('/', dataSetController.updateData)
    .delete('/', dataSetController.deleteData)

module.exports = router