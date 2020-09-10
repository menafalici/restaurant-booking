const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require ('cors')
const nodemailer = require('nodemailer')

const config = require("./database/config");;
const Reservation = require("./models/Reservation");

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

let sendFrom = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    auth: {
      user: config.email,
      pass: config.password,
    }
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
    });

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
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
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
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
})

app.delete("/deleteBooking/:id", async (req, res) => {
    // removing reservation from database
    const deletedReservation = await Reservation.findOne({
        _id: req.params.id
    });
    // const reservation = await Reservation.deleteOne({
    //     reservationId: req.params.id
    // });

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