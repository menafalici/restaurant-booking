const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require ('cors')

const config = require("./database/config");;
const Reservation = require("./models/Reservation");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async function (req, res) {
    let reservationArray = [];
    let reservations  = await Reservation.find({
        // name: "Skor"
    }, "name date time");

    reservationArray = reservations;
  
    console.log(reservationArray);

    res.send(reservationArray);
});

app.post("/", async (req, res) => {

    let reservation = req.body;

    console.log(reservation)

    let newReservation = new Reservation({
        name : reservation.name,
        email: reservation.email,
        date : reservation.date,
        time : reservation.time
    })

    console.log(newReservation)

    await newReservation.save((error, success) => {
        if (error) {
            res.send(error._message);
        }
        else {
            res.redirect("/");
        }
    });
})

app.delete("/deleteBooking/:id", async (req, res) => {
    // removing reservation from database
    console.log(req.params.id)
    const deletedReservation = await Reservation.findOne({
        _id: req.params.id
    });
    // const reservation = await Reservation.deleteOne({
    //     reservationId: req.params.id
    // });

    deletedReservation.delete();


   res.send(JSON.stringify(deletedReservation) + "deleted")
});


mongoose
.connect(config.databaseURL, config.options)
.then(() => {
    app.listen(config.port);
}).catch((e) => {
    console.log(e);
})