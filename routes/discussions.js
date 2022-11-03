const express = require('express');
const router = express.Router();
const discussionsCtrl = require('../controllers/discussions');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, discussionsCtrl.index);
router.get('/new', ensureLoggedIn, discussionsCtrl.new);
router.get('/:id', ensureLoggedIn, discussionsCtrl.show);
router.post('/', ensureLoggedIn, discussionsCtrl.create);

module.exports = router;