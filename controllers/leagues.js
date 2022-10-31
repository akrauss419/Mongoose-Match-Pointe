const League = require('../models/league');
const Team = require('../models/team');

module.exports = {
    index,
    show,
    new: newLeague,
    create
};

function index(req, res) {
    League.find({}, function(err, leagues) {
        res.render('leagues/index', { title: 'Find a League', leagues });
    });
}

function show(req, res) {
    League.findById(req.params.id, function(err, league) {
        Team.find({league: league._id}, function(err, teams) {
            res.render('leagues/show', {title: 'League Home Page', league, teams});
        });
    }); 
}

function newLeague(req, res) {
    res.render('leagues/new', { title: 'Create a League' });
}

function create(req, res) {
    console.log('league');
    const league = new League(req.body);
    league.save(function(err) {
        console.log(err);
        if (err) return res.redirect('/leagues/new');
        res.redirect(`/leagues/${league._id}`);
    });
}