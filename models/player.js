const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'offline'
    },
    prize: {
        type: Number,
        default: 0
    },
    avatar: {
        type: String,
        default: 'default.png'
    },
    rank_id: {
        type: Number,
        default: 1
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});
playerSchema.plugin(AutoIncrement, { inc_field: 'id' });
module.exports = mongoose.model('Player', playerSchema);