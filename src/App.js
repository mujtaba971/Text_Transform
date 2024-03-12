

import './App.css';
import Navbar from './components/Navbar';

import TextFrom from './components/TextFrom';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Has Been Enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success")
    }

  }
  
  return(
    <>
    
   <Navbar title = "Khan" aboutText = "About" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert} />
   <div className="container my-3">
   {<TextFrom showAlert={showAlert} heading = "Enter Text To Analyze" />}
   <About/>
   
   

   
   </div>
   
    </>
  );
  
}

export default App;
