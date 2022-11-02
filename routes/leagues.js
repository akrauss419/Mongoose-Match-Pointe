const express = require('express');
const router = express.Router();
const leaguesCtrl = require('../controllers/leagues');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', leaguesCtrl.index);
router.get('/new', ensureLoggedIn, leaguesCtrl.new);
router.get('/:id', leaguesCtrl.show);
router.post('/', ensureLoggedIn, leaguesCtrl.create);
router.delete('/:id', ensureLoggedIn, leaguesCtrl.delete);

module.exports = router;