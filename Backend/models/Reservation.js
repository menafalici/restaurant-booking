const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let reservationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
})

let Reservation = mongoose.model("reservation", reservationSchema);

module.exports = Reservation;