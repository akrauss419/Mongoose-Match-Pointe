const Discussion = require('../models/discussion');
const league = require('../models/league');

module.exports = {
    index,
    show,
    new: newDiscussion,
    create,
    delete: deleteDiscussion,
};

function index(req, res) {
    Discussion.find({}, function(err, discussions) {
        res.render('discussions/index', { title: 'Discussion Board', discussions });
    });
}

function show(req, res) {
    Discussion.findById(req.params.id, function(err, discussion) {
        res.render('discussions/show', { title: 'Discussion Thread', discussion })
    });
}

function newDiscussion(req, res) {
    res.render('discussions/new', { title: 'Start a Discussion' });
}

function create(req, res) {
    req.body.user = req.user._id;
    const discussion = new Discussion(req.body);
    discussion.save(function(err) {
        console.log(err);
        if (err) return res.redirect('discussions/new');
        res.redirect(`/discussions/${discussion._id}`);
    });
}

function deleteDiscussion(req, res) {
    Discussion.findOneAndDelete(
        {_id: req.params.id, userRecommending: req.user._id}, function(err) {
            res.redirect('/discussions');
        }
    );
}