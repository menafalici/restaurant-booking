import React, { useEffect, useState, ChangeEvent } from 'react'
import axios from 'axios';
import Reservation from '../../../models/Reservation';

function Admin() {
    const [reservations, setReservations] = useState([]);
    
    const [reservationName, setReservationName] = useState('');
    const [reservationMail, setReservationMail] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [reservationTime, setReservationTime] = useState(1800);
    const currentDate: string = new Date().toLocaleDateString();

    function updateName(e: ChangeEvent<HTMLInputElement>) {
        setReservationName(e.target.value);
    }
    function updateMail(e: ChangeEvent<HTMLInputElement>) {
        setReservationMail(e.target.value);
    }

    function updateDate(e: ChangeEvent<HTMLInputElement>) {
        setReservationDate(e.target.value);
    }

    function updateTime(e: ChangeEvent<HTMLInputElement>) {
        setReservationTime(parseInt(e.target.value));
        console.log(reservationTime)
    }

    function deleteReservation(reservationId: string){
        axios.delete('http://localhost:5000/deleteBooking/' + reservationId).then((res) => {
            updateAdmin();
        })
    }

    function updateAdmin(){
        axios.get('http://localhost:5000').then((res) => {
            setReservations(res.data);
        })
    }

    function postNewReservation() {

        let newReservation: Reservation = new Reservation();

        newReservation.date = reservationDate;
        newReservation.mail = reservationMail;
        newReservation.name = reservationName;
        newReservation.time = reservationTime;

        axios.post('http://localhost:5000', newReservation).then(res => {
            console.log(res);
            console.log(res.data);

            axios.get('http://localhost:5000').then(
            response => {
                setReservations(response.data);
            })
          });
    }

    useEffect(() => {
        axios.get('http://localhost:5000').then(
            response => {
                setReservations(response.data);
            })
    }, []);


    return (<div>
        <h3> Admin page</h3>
        <div>
            <h3>Bokning fungerar</h3>
            <input type="text" placeholder="email" value={reservationMail} onChange={updateMail} />
            <input type="text" placeholder="full name" value={reservationName} onChange={updateName} />
            <input type="date" value={reservationDate} onChange={updateDate} min={currentDate} />
            <div onChange={updateTime}>
                <input type="radio" value="1800" name="time" /> 1800
                <input type="radio" value="2100" name="time" /> 2100
            </div>
            <button onClick={postNewReservation}>Boka</button>
        </div>
    
        <ul>
            {reservations.map((reservation: Reservation) => {
<<<<<<< HEAD
                return <div>
                    <li key={reservation._id}>{reservation.email} - {reservation.name} - {reservation.date} - {reservation.time}</li>
                    <button onClick={() => deleteReservation(reservation._id)}>Ta bort</button>
                    <input type="date" value={reservationDate} onChange={updateDate} min={currentDate} />
            <div onChange={updateTime}>
                <input type="radio" value="1800" name="time" /> 18:00
                <input type="radio" value="2100" name="time" /> 21:00
            </div>
            <button onClick={postNewReservation}>Uppdatera</button>
=======
                return <div key={reservation._id}>
                    <li key={reservation._id}>{reservation.mail} - {reservation.name} - {reservation.date} - {reservation.time}</li>
                    <button onClick={() => deleteReservation(reservation._id)}>remove</button>
                    <button onClick={() => deleteReservation(reservation._id)}>change</button>
>>>>>>> f0bba4fdf32ef91fa7903e210860c424fff14156
                    
                </div>
            })}
        </ul>
    </div>)
}

export default Admin
