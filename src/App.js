import React, { useState, useEffect } from "react";
import "./App.css";
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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
