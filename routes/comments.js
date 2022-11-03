const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/discussions/:id/comments', ensureLoggedIn, commentsCtrl.create);
router.delete('/discussions/:id/comments/:id', ensureLoggedIn, commentsCtrl.delete);

module.exports = router;