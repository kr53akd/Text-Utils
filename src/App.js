import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css'
const App = () => {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  
  const handleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor ="white";
      document.body.style.transition='all 0.2s ease';
      document.body.style.color="black";
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='rgb(32, 29, 29)';
      document.body.style.transition='all 0.2s ease';
      document.body.style.color='white';
    }
  }
  useEffect(()=>{handleMode();
  // eslint-disable-next-line 
  },[])
  const ShowAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {setAlert(null);
      
    },3000); 
  }
  return (
    <div className='bg-dark-body'>
      <Navbar title="TextUtils" aboutText = "About" onClick ={handleMode} mode={mode} />
      <Alert alert = {alert}/>
      <Home ShowAlert={ShowAlert} heading='Create Your Text' mode={mode}/>
    </div>
  )
}

export default App
