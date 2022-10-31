const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leagueSchema = new Schema ({
    skillLevel: {
        type: String,
        enum: ['5.0', '4.5', '4.0', '3.5', '3.0']
    },
    standings: String,
    scores: String
}, {
    timestamps: true
});

module.exports = mongoose.model('League', leagueSchema);