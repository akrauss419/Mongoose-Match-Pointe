const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/leagues/:id/teams/new', ensureLoggedIn, teamsCtrl.new);
router.get('/:id', ensureLoggedIn, teamsCtrl.show);
router.post('/leagues/:id/teams', ensureLoggedIn, teamsCtrl.create);

module.exports = router;