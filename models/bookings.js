const mongoose = require('mongoose');

const BookingsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rooms"
    },
    date: {
        type: Date,
        default: Date.now
    },
    startTime: {
        type: String,
        match: [ 
            /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/
        ],
        require: true
    },
    endTime: {
        type: String,
        match: [ 
            /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/
        ],
        require: true
    }
});

module.exports = mongoose.model('Booking', BookingsSchema);