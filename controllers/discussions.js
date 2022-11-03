const Discussion = require('../models/discussion');

module.exports = {
    index,
    show
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