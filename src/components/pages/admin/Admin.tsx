import React, { useEffect, useState, ChangeEvent } from 'react'
import axios from 'axios';
import Reservation from '../../../models/Reservation';

function Admin() {
    const [reservations, setReservations] = useState([]);
    
    const [reservationName, setReservationName] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [reservationTime, setReservationTime] = useState(1800);
    const currentDate: string = new Date().toLocaleDateString();

    function updateName(e: ChangeEvent<HTMLInputElement>) {
        setReservationName(e.target.value);
    }

    function updateDate(e: ChangeEvent<HTMLInputElement>) {
        setReservationDate(e.target.value);
    }

    function updateTime(e: ChangeEvent<HTMLInputElement>) {
        setReservationTime(parseInt(e.target.value));
        console.log(reservationTime)
    }

    function postNewReservation() {

        let newReservation: Reservation = new Reservation;

        newReservation.date = reservationDate;
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
            <input type="text" value={reservationName} onChange={updateName} />
            <input type="date" value={reservationDate} onChange={updateDate} min={currentDate} />
            <div onChange={updateTime}>
                <input type="radio" value="1800" name="time" /> 1800
                <input type="radio" value="2100" name="time" /> 2100
            </div>
            <button onClick={postNewReservation}>Boka</button>
        </div>
        <ul>
            {reservations.map((reservation: Reservation) => {
                return <li key={reservation._id}>{reservation.name} - {reservation.date} - {reservation.time}</li>
            
            })}
        </ul>
    </div>)
}

export default Admin
