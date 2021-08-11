import React, { useEffect } from "react";
import "./App.css";
import { useState } from 'react'
import axios from 'axios'
import Image from './components/Image'
import Details from './components/Details'

function App() {
const [apod, setApod] = useState(null)

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=7EeKGlXZbaQwqJVpl1Ui7G0T8w75b9ZDG8f8Jhbn')
  .then(res => {
    console.log(res.data)
    setApod(res.data)
  })
  .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Image ImgURL={apod}/>
      <Details title={title} />
      {console.log(apod)}
    </div>
  );
}

export default App;
