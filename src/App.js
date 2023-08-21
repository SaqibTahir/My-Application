import React, { useState } from 'react'
import './App.css';
import Navbar from './Navbar';
import Form from './Form';
import Alert from './Alert';
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [Mode, SetMode] = useState('light');
  const [alert, Setalert] = useState(null);
  const [extra, Setextra] = useState(false);
  // ALERT MODE---------
  let Showalert = (message, type) => {
    Setalert({

      msg: message,
      type: type
    })
    setTimeout(() => {
      Setalert(null)
    }, 2000);
  }
  // THEME MODE--------------------
  let Togglemode = () => {
    if (Mode === 'light') {
      SetMode('dark')
      document.body.style.backgroundColor = '	RGB(62,62,66)'
      Showalert('Dark Mode is enable', 'light')
    }

    else {
      SetMode('light')
      document.body.style.backgroundColor = 'white'
      Showalert('light Mode is enable', 'dark')
    }
  }
  let showwarning =()=>{
      if(extra===true){
        Setextra('bg-success')
      }else{
        Setextra(!extra)
      
  }
  }
  return (
    <>
      <Router>
        <Navbar title='BOSS' mode={Mode} togglemode={Togglemode} showwarning={showwarning} extra={extra}/>
        <Alert alert={alert} />
        <div className='container my-2' >
          <Routes>
            <Route exact path="/about" element={<About mode={Mode} togglemode={Togglemode} />} />
            <Route exact path="/" element={<Form title='Default Text APP' Showalert={Showalert} mode={Mode} extra={extra} showwarning={showwarning}  />}/>
          </Routes>
        </div>
      </Router>





    </>
  );
}

export default App;
