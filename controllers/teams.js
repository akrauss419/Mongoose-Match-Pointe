const Team = require('../models/team');
const League = require('../models/league');

module.exports = {
    show,
    new: newTeam,
    create,
    edit,
    update,
    delete: deleteTeam,
}

function show(req, res) {
    Team.findById(req.params.teamId, function(err, team) {
        res.render('teams/show', { title: 'Team Details', team});
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

function create(req, res) {
    req.body.league = req.params.id;
    req.body.user = req.user._id;
    const team = new Team(req.body);
    console.log(team);
    team.save(function(err, team) {
        console.log(err);
        res.redirect(`/leagues/${req.params.id}`);
    });
}

function edit(req, res) {
    League.findById(req.params.id, function(err, league) {
        Team.findOne({_id: req.params.teamId}, function(err, team) {
            if (err || !team) return res.redirect(`/leagues/${req.params.id}`);
            res.render('teams/edit', { title: 'Team Details', team, league});
        });
    });
}

function update(req, res) {
    League.findById(req.params.id, function(err, league) {
        Team.findOneAndUpdate(
            {_id: req.params.teamId},
            req.body,
            {new: true},
            function(err, team) {
                if (err || !team) return res.redirect(`/leagues/${req.params.id}/teams/${req.params.teamId}/edit`);
                res.redirect(`/leagues/${league._id}/teams/${team._id}`);
            }
        );
    });
}

function deleteTeam(req, res, next) {
    Team.findOneAndDelete(
    {_id: req.params.id, user: req.user._id}, function(err) {
            res.redirect('/leagues');
    });
}