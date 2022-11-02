const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leagueSchema = new Schema ({
    skillLevel: {
        type: String,
        enum: ['5.0', '4.5', '4.0', '3.5', '3.0']
    },
    mensSingles: {
        type: Number,
        enum: [1, 2, 3, 4]
    },
    womensSingles: {
        type: Number,
        enum: [1, 2, 3, 4]
    },
    mensDoubles: {
        type: Number,
        enum: [1, 2, 3, 4]
    },
    womensDoubles: {
        type: Number,
        enum: [1, 2, 3, 4]
    },
    mixedDoubles: {
        type: Number,
        enum: [1, 2, 3, 4]
    },
    standings: String,
    scores: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('League', leagueSchema);