
// import './App.css';
import React from 'react'
import Header from './components/Header'
import { useState } from 'react'
import Footer from './components/Footer'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import {Link} from 'react-router-dom'

function App() {
  const name = "Peter Radev"



  return (
    <Router>
      <div className="container">
        <Header />
        

        {/* <Route path='/' component={Home}/> */}
        <Switch>
          <Route path='/portfolio'  exact component={Home} />
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Welcome</h1>
  </div>
);

export default App;
