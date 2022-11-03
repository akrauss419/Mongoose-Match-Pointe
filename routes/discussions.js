const express = require('express');
const router = express.Router();
const discussionsCtrl = require('../controllers/discussions');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, discussionsCtrl.index);
router.get('/new', ensureLoggedIn, discussionsCtrl.new);
router.get('/:id', ensureLoggedIn, discussionsCtrl.show);
router.post('/', ensureLoggedIn, discussionsCtrl.create);
router.get('/:id/edit', ensureLoggedIn, discussionsCtrl.edit);
router.put('/:id', ensureLoggedIn, discussionsCtrl.update);
router.delete('/:id', ensureLoggedIn, discussionsCtrl.delete);

module.exports = router;