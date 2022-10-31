const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new Schema ({
    skillLevel: String,
    teams: [String],
    standings: String,
    scores: String
});

module.exports = mongoose.model('League', leagueSchema);