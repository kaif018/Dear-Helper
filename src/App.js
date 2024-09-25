

import Navbar from './component/Navbar.js'
import './App.css'
import TextFrom from './component/TextFrom.js'
import About from './component/About.js'
import React, {useState} from 'react'
import Alert from './component/Alert.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light'); //for the dark mode enble and disable
  const[alert,setAlert]=useState(null);
  const showAlert=(massage ,type)=>{
     setAlert({
      msg : massage,
     type : type
     })
     setTimeout(() => {
      setAlert(null);
     }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#011533';
      document.body.style.color='white';
      showAlert("Dark mode Enbled","Sucsses");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='#011533';
      showAlert("Light mode Enbled","Sucsses");
    }

  }
  return (
    <>
   < Router>
   <Switch>
          <Route path="/about">
            <About />
          
          </Route>
          <Route path="/">
          <Alert alert={alert}/>
          </Route>
         
    <div className="container">
    
    <TextFrom  showAlert={showAlert} mode={mode}/>
    
      </div>
          
    </Switch>
     
    </Router>
  
  
   <div className="App ">
      <Navbar title="Home" about="About" mode={mode} toggleMode= {toggleMode} />
      
    </div>
    <Alert alert={alert}/>
    <div className="container">
    
    <TextFrom  showAlert={showAlert} mode={mode}/>
    
      </div>
    </>

  );
}

export default App;

