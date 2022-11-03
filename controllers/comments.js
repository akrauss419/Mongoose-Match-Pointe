const Discussion = require('../models/discussion');

module.exports = {
    create,
    delete: deleteComment
};

function create(req, res) {
    Discussion.findById(req.params.id, function(err, discussion) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        discussion.comments.push(req.body);
        discussion.save(function(err) {
            res.redirect(`/discussions/${discussion._id}`);
        });
    });
}

function deleteComment(req, res, next) {
    Discussion.findOne({
        'comments._id': req.params.id,
        'comments.user': req.user._id
    }).then(function(discussion) {
        if (!discussion) return res.redirect('/discussions');
        discussion.comments.remove(req.params.id);
        discussion.save().then(function() {
            res.redirect(`/discussions/${discussion._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}