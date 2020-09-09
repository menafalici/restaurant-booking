import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Main from './components/pages/main/Main';
import Kontakt from './components/pages/kontakt/Kontakt';
import Boka from './components/pages/boka/Boka'
import Footer from './components/footer/Footer';
import Admin from './components/pages/admin/Admin';
import NotFound from './components/notfound/NotFound';
import Thankyou from './components/pages/thankyou/Thankyou';
import Update from './components/pages/updatereservation/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/kontakt'>
              <Kontakt />
            </Route>
            <Route path='/boka'>
              <Boka />
            </Route>
            <Route path='/admin'>
              <Admin />
            </Route>
            <Route path='/thankyou'>
              <Thankyou />
            </Route>
            {/* <Route component={NotFound}>
              </Route> */}
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

export default App;
