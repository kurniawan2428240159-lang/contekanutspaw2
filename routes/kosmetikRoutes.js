const express = require('express');
const router = express.Router();
const c = require('../controllers/kosmetikControllers');
const cekApiKey = require('../middlewares/cekApiKey');

router.put('/:id', cekApiKey, c.update);
router.delete('/:id', cekApiKey, c.remove);
router.get('/', c.getAll);
router.get('/:id', c.getById);
router.post('/', cekApiKey, c.create);

module.exports = router;