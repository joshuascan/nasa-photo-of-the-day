import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './components/Header'
import Photo from './components/Photo'
import Description from './components/Description'
import axios from 'axios';
import { BASE_URL, API_KEY } from './Constants';

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        .then(function (response) {
            console.log(response.data);
            setData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

  return (
    <div className="App">
      <Header data={data}/>
      <Photo data={data}/>
      {/* <Description data={data}/> */}
    </div>
  );
}

export default App;
