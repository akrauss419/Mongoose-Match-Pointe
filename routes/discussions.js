const express = require('express');
const router = express.Router();
const discussionsCtrl = require('../controllers/discussions');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', discussionsCtrl.index);
router.get('/:id', discussionsCtrl.show);

module.exports = router;