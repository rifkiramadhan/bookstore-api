const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/transactions', auth, controller.getTransactionList);
router.get('/transactions/:id', auth, controller.detailTransactionList);

module.exports = router;
