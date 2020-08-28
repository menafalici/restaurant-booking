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
import Boka from './components/pages/boka/Boka';
import Footer from './components/footer/Footer';
import Admin from './components/pages/admin/Admin';
import NotFound from './components/notfound/NotFound';

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
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
