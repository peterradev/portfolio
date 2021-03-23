
// import './App.css';
import React from 'react'
import Header from './components/Header'
import { useState } from 'react'
import Footer from './components/Footer'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const name = "Peter Radev"
  // let num1 = 0;
  // let num2 = 0;

//   const [input, setInput] = useState([{num: ''}]);
//   const [num, setNum] = useState([{num: ''}]);
//   const [total, setTotal] = useState({total: ''});

  

// const logValue = (e) => {
//   console.log(input + num);
//   setTotal(input + num);
//   // e.preventDefault();
// }

// const handleChange = e => {
//   setInput(Number(e.target.value));
// }

// const handleChange2 = e => {
//   setNum(Number(e.target.value));
// }

// let value  = JSON.stringify(total);


  // const logNum = () => {
  //   console.log(num);
  // }
  

  return (
    <Router>
      <div className="container">
        <Header />
        {/* <h2>{name}</h2> */}
        {/* <img src={} alt="profile-image"/> */}
        {/* <form className="addition"action="">

          <input type="number" value={input} onChange={handleChange} />

          <p> + </p>

         <input type="number" value={num} onChange={handleChange2} />
        </form> */}

        {/* <button onClick={logValue} > Print Number </button>
        <h1>Answer: {value}</h1> */}

        {/* <Route path='/' component={Home}/> */}
        <Switch>
          <Route path='/'  exact component={Home} />
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
    <h1>Home Page</h1>
  </div>
);

export default App;
