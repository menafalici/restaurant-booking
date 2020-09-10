import React, { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios';
import './boka.css';
import Reservation from '../../../models/Reservation';

function Boka() {
  const [reservationName, setReservationName] = useState('');
  const [reservationMail, setReservationMail] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationPhone, setReservationPhone] = useState('');
  const [reservationTime, setReservationTime] = useState(1800);
  const [reservationPeople, setReservationPeople] = useState(1);
  const [reservations, setReservations] = useState(0);
  const [peopleWarning, setPeopleWarning] = useState(false);
  const [nameWarning, setNameWarning] = useState(false);
  const currentDate: string = new Date().toLocaleDateString();
  const [booking, setBooking] = useState(false);

  function updateName(e: ChangeEvent<HTMLInputElement>) {
    setReservationName(e.target.value);
  }

  function updateMail(e: ChangeEvent<HTMLInputElement>) {
    setReservationMail(e.target.value);
  }

  function updatePhone(e: ChangeEvent<HTMLInputElement>) {
    setReservationPhone(e.target.value);
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
        setReservations(response.data.length);

        if (response.data.length > 15) {
          console.log("Det finns inga bord kvar vid den tiden.")
          setBooking(false);

        }

        else {
          console.log("Det finns bord kvar!")
          setBooking(true);
        }

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

        if (reservationName !== '' && reservationPeople <= 6 && reservationPeople >= 1) {

            
            let newReservation: Reservation = new Reservation();
            
            newReservation.date = reservationDate;
            newReservation.name = reservationName;
            newReservation.mail = reservationMail;
            newReservation.phone = reservationPhone;
            newReservation.people = reservationPeople;
            newReservation.time = reservationTime;
            
            axios.post('http://localhost:5000', newReservation).then((res: { data: any; }) => {
                console.log(res);
                console.log(res.data);
                
                setBooking(false)
                setReservationDate('');
                setReservationName('');
                setReservationMail('');
                setReservationPhone('');
                setReservationTime(0);

            });
        }
    }
  }

  return (
    <>
      <img className=" d-block w-100" src="images/booking_pic.jpg" alt="" />
      <div className='booking m-5'>
        <div className="row">
          <div className="col-sm-12 ">
            <div className="card  mb-3">

              {!booking
                ? <div >
                  <h3 className="card-header text-white bg-dark">Sök på datum och tid</h3>
                  <div className="card-body">
                    <div className='booking-date'>
                      <input type="date" value={reservationDate} onChange={updateDate} min={currentDate} />
                      <br /> <br />

                      <div onChange={updateTime}>
                        <input type="radio" value="1800" name="time" /> 18.00 <br />
                        <input type="radio" value="2100" name="time" /> 21.00
                </div>
                      <br />
                      <button onClick={searchCalendar}>Sök datum</button>
                    </div>
                  </div>
                </div>
                : <div></div>
              }

            </div>
          </div>
        </div>
      </div>

      {/* Kontaktuppgifter */}

      <div className='booking m-5'>
        <div className="row">
          <div className="col-sm-12 ">
            <div className="card  mb-3">

              {booking
                ?
                <div>
                  <h3 className="card-header text-white bg-dark">Kontaktuppgifter</h3>
                  <div className="card-body">
                    <div className='booking-date'>
                      {reservations < 15
                        ?
                        <div>
                          <div>
                            {nameWarning ? <p>Vänligen skriv in ett namn</p> : <div></div>}
                            {peopleWarning ? <p>Vänligen välj ett antal personer mellan 1 och 6</p> : <div></div>}
                          </div>

                          <form onSubmit={postNewReservation}>
                            <div>
                              <span>
                                &nbsp; Du vill boka ett bord för <b>{reservationPeople} </b> {reservationPeople < 2 ? 'person' : 'personer'} klockan
                            {reservationTime === 1800 ? ' 18.00' : ' 21.00'} på datumet: {reservationDate}
                              </span>

                              <br /> <br />

                              <input type="text" placeholder="Namn på bokningen" value={reservationName} onChange={updateName} required />
                            </div>

                            <br />

                            <div>
                              <input type="email" placeholder="Mail till bokningen" value={reservationMail} onChange={updateMail} required />
                            </div>
                            <br />

                            <div>
                              <input type="tel" placeholder="XXX-XXX XX XX" pattern="[0-9]{3}-[0-9]{3} [0-9]{2} [0-9]{2}" value={reservationPhone} onChange={updatePhone} required />
                            </div>
                            <br />

                            <div className='antal'>
                              <span>Antal personer: </span>
                              <input type="number" value={reservationPeople} onChange={updatePeople} min="1" max="6" placeholder="1-6" />

                            </div>
                            <br />
                            <button type="submit">Boka</button>
                          </form>
                        </div>
                        :
                        <div>
                          <h3>Det finns inga bord lediga vid den tiden.</h3>

                          <button onClick={() => { setBooking(false) }}>Tillbaka till kalendern</button>
                        </div>
                      }
                    </div>
                  </div>
                </div>
                :
                <div></div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Boka
