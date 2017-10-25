import React, { Component } from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/freelancer.min.css';

import Navigation from './components/Navigation';
import Header from './components/Header';
import {default as Portfolio} from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import {Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {

    return (
        <div className="App">

          <Navigation/>

          <Header title="Start Bootstrap" caption="Web Developer - Graphic Artist - User Experience Designer"/>

          <Portfolio/>

          <About/>

          <Contact/>

          <Footer/>

        </div>
    );
  }
}

export default App;
