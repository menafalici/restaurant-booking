import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Main from './components/pages/main/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
