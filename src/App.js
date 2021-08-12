import React, { useEffect } from "react";
import "./App.css";
import { useState } from 'react'
import axios from 'axios'
import Image from './components/Image'
import Details from './components/Details'

function App() {
const [apod, setApod] = useState([])

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=7EeKGlXZbaQwqJVpl1Ui7G0T8w75b9ZDG8f8Jhbn')
  .then(res => {
    setApod(res.data)
  })
  .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <Image imgURL={apod.hdurl}/>
      <Details title={apod.title} explanation={apod.explanation} copyright={apod.copyright}
      date={apod.date}/>
    </div>
  );
}

export default App;
