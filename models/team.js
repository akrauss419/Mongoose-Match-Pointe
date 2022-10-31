const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema ({
    name: String,
    players: [String],
    schedule: [String],
    wins: {
        type: Number,
        default: 0
    },
    losses: {
        type: Number,
        default: 0
    },
    practices: Date,
    league: {
        type: Schema.Types.ObjectId,
        ref: 'League'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);