const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const transectionRouletteSchema = new mongoose.Schema({
    player_id: {
        type: Number,
        required: true
    },
    round_roulette_id: {
        type: Number,
        required: true
    },
    bet: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
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
transectionRouletteSchema.plugin(AutoIncrement, { inc_field: 'transectionNumber' });
module.exports = mongoose.model('TransectionRoulette', transectionRouletteSchema);