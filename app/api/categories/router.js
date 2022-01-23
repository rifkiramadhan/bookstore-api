const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/categories', auth, controller.getAllCategories);
router.post('/categories', auth, controller.createCategories);
router.put('/categories/:id', auth, controller.updateCategories);
router.delete('/categories/:id', auth, controller.deleteCategories);

module.exports = router;
