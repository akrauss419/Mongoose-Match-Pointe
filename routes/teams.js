const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/leagues/:id/teams/new', ensureLoggedIn, teamsCtrl.new);
router.get('/leagues/:id/teams/:teamId/edit', ensureLoggedIn, teamsCtrl.edit);
router.get('/leagues/:id/teams/:teamId', teamsCtrl.show);
router.post('/leagues/:id/teams', ensureLoggedIn, teamsCtrl.create);
router.put('/leagues/:id/teams/:teamId', ensureLoggedIn, teamsCtrl.update);
router.delete('/teams/:id', ensureLoggedIn, teamsCtrl.delete);

module.exports = router;