const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/discussions/:id/comments', ensureLoggedIn, commentsCtrl.create);
router.get('/discussions/:id/editComment', ensureLoggedIn, commentsCtrl.edit);
router.put('/comments/:id', ensureLoggedIn, commentsCtrl.update);
router.delete('/discussions/:id/comments/:id', ensureLoggedIn, commentsCtrl.delete);

module.exports = router;