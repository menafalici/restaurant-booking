import React, { useEffect, useState, ChangeEvent } from 'react'
import axios from 'axios';
import Reservation from '../../../models/Reservation';
import { Link } from 'react-router-dom';
import Update from '../updatereservation/Update';

function Admin() {
    const [reservations, setReservations] = useState([]);
    const [tablesReserved, setTablesReserved] = useState(0);
    const [reservationPeople, setReservationPeople] = useState(1);
    const [peopleWarning, setPeopleWarning] = useState(false);
    const [nameWarning, setNameWarning] = useState(false);
    const [reservationName, setReservationName] = useState('');
    const [reservationMail, setReservationMail] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [reservationTime, setReservationTime] = useState(1800);
    const [booking, setBooking] = useState(false);
    const currentDate: string = new Date().toLocaleDateString();
    const [showReservation, setShowReservation] = useState(false);

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

    function updatePeople(e: ChangeEvent<HTMLInputElement>) {
        setReservationPeople(parseInt(e.target.value));
        console.log(reservationTime)
    }

    function searchCalendar() {
        axios.get('http://localhost:5000/search/' + reservationDate + '/' + reservationTime).then(
            response => {
                setTablesReserved(response.data.length);

                if(response.data.length > 15) {
                    console.log("Det finns inga bord kvar vid den tiden.")
                    setBooking(false);
                    
                }

                else {
                    console.log("Det finns bord kvar!")
                    setBooking(true);
                }
                
            })
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
        
        if (reservationPeople < 1 || reservationPeople > 6) {
            setPeopleWarning(true);
        }

        else {
            setPeopleWarning(false);
        }

        if (reservationName === '') {
            setNameWarning(true);
        }

        else {
            setNameWarning(false);
        }

        if (reservationName !== '' && reservationPeople <= 6 && reservationPeople >= 1) {

            
            let newReservation: Reservation = new Reservation();
            
            newReservation.date = reservationDate;
            newReservation.name = reservationName;
            newReservation.mail = reservationMail;
            newReservation.people = reservationPeople;
            newReservation.time = reservationTime;
            
            axios.post('http://localhost:5000', newReservation).then((res: { data: any; }) => {
                console.log(res);
                console.log(res.data);
                
                setBooking(false)
                setReservationDate('');
                setReservationName('');
                setReservationMail('');
                setReservationTime(0);
            });
        }
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
        {!booking
            
            ?<div>
            <h3>Sök på datum och tid</h3>
            <div>
                <input type="date" value={reservationDate} onChange={updateDate} min={currentDate} />
                
                <div onChange={updateTime}>
                    <input type="radio" value="1800" name="time" /> 18.00
                    <input type="radio" value="2100" name="time" /> 21.00
                </div>
                
                <button onClick={searchCalendar}>Sök datum</button> 
            </div>
            </div>
            :<div></div>
            }

            {booking
              ? 
                <div>
                  {tablesReserved < 15
                    ?
                    <div>
                      <div>
                        {nameWarning ? <p>Vänligen skriv in ett namn</p> : <div></div>}
                        {peopleWarning ? <p>Vänligen välj ett antal personer mellan 1 och 6</p> : <div></div>}
                      </div>

                    <form onSubmit={postNewReservation}>
                      <div>
                        <input type="text" placeholder="Namn på bokningen" value={reservationName} onChange={updateName} required />
                        <span>
                            &nbsp;vill boka ett bord för {reservationPeople} {reservationPeople < 2 ? 'person' : 'personer'} klockan 
                            {reservationTime === 1800 ? ' 18.00' : ' 21.00'} på datumet: {reservationDate}
                        </span>
                      </div>

                      <div>
                        <input type="email" placeholder="Mail till bokningen" value={reservationMail} onChange={updateMail} required />
                      </div>

                      <div>
                          <span>Antal personer: </span>
                          <input type="number" value={reservationPeople} onChange={updatePeople} min="1" max="6" placeholder="1-6" /> 

                      </div>
                      
                      <button type="submit">Boka</button>
                    </form>
                    </div>
                    :
                      <div>
                        <h3>Det finns inga bord lediga vid den tiden.</h3>
                                    
                        <button onClick={()=>{setBooking(false)}}>Tillbaka till kalendern</button>
                      </div>
                    }
                </div>
              : 
              <div></div>
            }
        </div>
    
        <ul>
            {reservations.map((reservation: Reservation) => {
                console.log(reservation._id)
                return <div key={reservation._id}>
                    <li key={reservation._id}>{reservation.mail} - {reservation.name} - {reservation.people} personer - {reservation.date} - {reservation.time}</li>
                    <button onClick={() => deleteReservation(reservation._id)}>Ta bort</button>
                    <button onClick={() => deleteReservation(reservation._id)}>Updatera</button>
                    {showReservation ? <Update oneReservation={reservations}></Update> : ''}

                    
                </div>
            })}
        </ul>
    </div>)
}

export default Admin
