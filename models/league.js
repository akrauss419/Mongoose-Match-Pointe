const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leagueSchema = new Schema ({
    skillLevel: String,
    teams: String,
    standings: String,
    scores: String
}, {
    timestamps: true
});

// const teamSchema = new Schema ({
//     name: String,
//     players: String,
//     schedule: String,
//     wins: Number,
//     losses: Number,
//     practices: Date,
// }, {
//     timestamps: true
// });

module.exports = mongoose.model('League', leagueSchema);