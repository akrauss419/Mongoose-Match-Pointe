const Team = require('../models/team');
const League = require('../models/league');

module.exports = {
    show,
    new: newTeam,
    create
}

function show(req, res) {
    Team.findById(req.params.id, function(err, team) {
        res.render('teams/show', { title: 'Team Details', team});
    });
}

function create(req, res) {
    req.body.league = req.params.id;
    Team.create(req.body, function(err, ticket) {
        res.redirect(`/leagues/${req.params.id}`);
    });
}

function newTeam(req, res) {
    Team.find({ league: req.params.id }, function(err, teams) {
        res.render('teams/new', {
            title: 'Add New Team',
            leagueId: req.params.id,
            teams
        });
    });
}