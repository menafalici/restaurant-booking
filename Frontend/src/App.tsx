import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Main from './components/pages/main/Main';
import Contact from './components/pages/contact/Contact';
import Booking from './components/pages/booking/Booking'
import Footer from './components/footer/Footer';
import Admin from './components/pages/admin/Admin';
import Thankyou from './components/pages/thankyou/Thankyou';
import Update from './components/pages/updatereservation/Update';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/booking'>
              <Booking />
            </Route>
            <Route path='/admin'>
              <Admin />
            </Route>
            <Route path='/thankyou'>
              <Thankyou />
            </Route>
            <Route path="/updateBooking/:id" component={Update}>
              <Update></Update>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>

  );
}