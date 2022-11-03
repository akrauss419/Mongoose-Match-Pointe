const Discussion = require('../models/discussion');
const league = require('../models/league');

module.exports = {
    index,
    show,
    new: newDiscussion,
    create,
    edit,
    update,
    delete: deleteDiscussion,
};

function index(req, res) {
    Discussion.find({}, function(err, discussions) {
        res.render('discussions/index', { title: 'Discussion Board', discussions });
    });
}

function show(req, res) {
    Discussion.findOne({_id: req.params.id }, function(err, discussion) {
        res.render('discussions/show', { title: 'Discussion Thread', discussion })
    });
}

function newDiscussion(req, res) {
    res.render('discussions/new', { title: 'Start a Discussion' });
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const discussion = new Discussion(req.body);
    discussion.save(function(err) {
        console.log(err);
        if (err) return res.redirect('discussions/new');
        res.redirect(`/discussions/${discussion._id}`);
    });
}

function edit(req, res) {
    Discussion.findById(req.params.id, function(err, discussion) {
        if (err || !discussion) return res.redirect(`/discussions/${req.params.id}`);
        res.render('discussions/edit', { title: 'Discussion Thread', discussion});
    });
}

function update(req, res) {
    Discussion.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        function(err, discussion) {
            if (err || !discussion) return res.redirect(`/discussions/${req.params.id}/edit`);
            res.redirect(`/discussions/${discussion._id}`);
        }
    );
}

function deleteDiscussion(req, res) {
    Discussion.findOneAndDelete(
        {_id: req.params.id, userRecommending: req.user._id}, function(err) {
            res.redirect('/discussions');
        }
    );
}