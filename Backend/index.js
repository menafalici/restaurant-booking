const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require ('cors')
const nodemailer = require('nodemailer')

const config = require("./database/config");;
const Reservation = require("./models/Reservation");

app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async function (req, res) {
    let reservationArray = [];
    let reservations  = await Reservation.find({
    
    }).sort({date: 1});

    reservationArray = reservations;
  
    console.log(reservationArray);

    res.send(reservationArray);
});

app.get('/search/:date/:time', async function (req, res) {
    let reservationArray = [];
    let date = req.params.date;
    let time = req.params.time;

    console.log(date)

    let reservations  = await Reservation.find({
        date: date,
        time: time
    }, "name date time");

    reservationArray = reservations;

    res.send(reservationArray);
});

app.post("/", async (req, res) => {

    let reservation = req.body;

    console.log(reservation)

    let newReservation = new Reservation({
        name : reservation.name,
        mail: reservation.mail,
        phone: reservation.phone,
        date : reservation.date,
        people : reservation.people,
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

    let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    name: "goldenfork.com",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    },
  });

    let info = await transporter.sendMail({
        from: 'Golden Fork <boka@goldenfork.com>',
        to: reservation.mail,
        subject: "Din bokning hos Golden Fork.",
        text:`
        Tack för din bokning ${reservation.name}. 
        Varmt välkommen till Golden Fork den ${reservation.date} för ${reservation.people} personer, klockan ${reservation.time}.
        Vid avbokning vänligen ring till restaurangen på 08-666666.`
    });
    
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
})

app.delete("/deleteBooking/:id", async (req, res) => {
    const deletedReservation = await Reservation.findOne({
        _id: req.params.id
    });

    deletedReservation.delete();


   res.send(JSON.stringify(deletedReservation) + "deleted")
});

app.get("/updateBooking/:id", async (req,res) => {
    console.log("id =" + req.params)
    const oneBooking = await Reservation.findOne({
        _id: req.params.id
    })
    console.log("detta är id from node "+oneBooking)
    res.send(oneBooking);
})

app.put("/updateBooking/:id", async(req,res)=>{
    const updatedReservation = await Reservation.updateOne({
        _id: req.params._id
    },
    {$set: {
        date: req.body.updateReservation.date,
        time: req.body.updateReservation.time,
    }})

})


mongoose
.connect(config.databaseURL, config.options)
.then(() => {
    app.listen(config.port);
}).catch((e) => {
    console.log(e);
})