const express = require('express');
const router = express.Router();
const merekController = require('../controllers/merekControllers');

router.get('/', merekController.getAll);
router.post('/', merekController.create);

module.exports = router;