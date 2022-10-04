import './App.css';

//import libraries here
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3001/'

function App() {

  //define state variable for a message
  const[message, setMessage] =useState('test')

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      console.log(response.data)
      setMessage(response.data.message)
    }).catch(error =>{
      setMessage(error)
    })
  }, [])

  return (
    <p>{message}</p>
  );
}

export default App;
