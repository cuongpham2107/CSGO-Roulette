const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const roundRouletteSchema = new mongoose.Schema({
    counter: {
        type: Number,
        default: 0
    },
    result: {
        type: String,
        default: ''
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
roundRouletteSchema.plugin(AutoIncrement, { inc_field: 'roundNumber' });
module.exports = mongoose.model('RoundRoulette', roundRouletteSchema);