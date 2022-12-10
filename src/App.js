import './reset.css';
import './App.css';

import React, { useEffect, useState } from 'react';

import Main from './component/Main'
import Condition from './component/Condition';
import Search from './component/Search';
import Sunposition from './component/Sunposition';
import Forecast from './component/Forecast';
import Autocomplete from "./component/Autocomplete";

//import BackgroundImage from './component/Background';

function App() {


  // ----- states
  const [location, setLocation] = useState('Budapest')
  const [forecastData, setForecastData] = useState('')
  const [currentWeather, setCurrentWeather] = useState('')
  const [astroData, setAstroData] = useState('')
  const [backgroundURL, setBackgroundURL] = useState('')

  

  // ----- useEffect: runs when 'location' state is updated from search input field
  /* useEffect(() => {
    if (location === '') {
      //do nothing
    } else {
      fetchCurrentWeather(location)
    }},
    []); */

  useEffect(() => {
    if (location === '') {
      //do nothing
    } else {
      fetchCurrentWeather(location);
      fetchForecastData(location);
      fetchAstroData(location);
      //getImage(location)
    };
  }, [location]);


  // ----- fetch function ---- CURRENT Weather and time

  async function fetchCurrentWeather(city) {
    try {
      const responseCurrent = await fetch(`https://api.weatherapi.com/v1/current.json?key=4be9c70adbdd44848ca81837221705&q=${city}`);
      const currentData = await responseCurrent.json();
      //console.log("Fetch done")
      setCurrentWeather(currentData);

    } catch (error) {
      console.log("error", error)
    }
  }

  // ----- fetch function ---- WEATHER FORECAST
  async function fetchForecastData(city) {
    try {
      const apiKey = '029e230506372c0158b2cac8fd7cebe2'
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
      const data = await response.json();
      //console.log("Fetch forecast done")
      setForecastData(data);

    } catch (error) {
      console.log("error", error)
    }
  }

  // --------fetch for astronomy data -------------

  async function fetchAstroData(city) {
    let astronomyDetails = await fetch(`http://api.weatherapi.com/v1/astronomy.json?key=296968cc4da0492696b81321221505&q=${city}`);
    if (astronomyDetails.status != 200) {
      alert("File not found")
    } else {
    
    const astronomyData = await astronomyDetails.json();   
    //console.log("astro data done");
    setAstroData(astronomyData);
      console.log(astronomyData)
  }
}

  //-----------Pexels API for background image---------------

  
  async function getImage (value) {

    /* Geri's api key = 563492ad6f917000010000018c7180100af14cd8a3a8486c690e5762 */
    /* G API FB key = 563492ad6f91700001000001cd879a94927e49bb9e9715c99fb7ecc9 
    Your API key: 563492ad6f9170000100000123e71ec13d694b4e8dd43f4cf6f946d1
    */
    const rekaNewKey = '563492ad6f91700001000001424293d5cdd8474bb6a91e924ef0f188'
    
    
    const response = await fetch(`https://api.pexels.com/v1/search?query=${value}&per_page=1`,{
        headers: {Authorization: "563492ad6f91700001000001ff24965070704f299ee63e106f4ed677"}
    });
    
    const cityImage = await response.json();
    // console.log("City image: ", cityImage)
    // console.log("City image: ", cityImage.photos[0].src.landscape)

    /* document.querySelector("body").style.backgroundImage = `url(${cityImage.photos[0].src.landscape})` */
  };

  getImage("Budapest")




  // set location state to the value of input
  const updateSearchTerm = text => {
    setLocation(text)
  };




  // ----- RETURN
  return (
    <>
      <div className="app">

      <div className='background-image' style={{ backgroundImage: `url("{cityImage.photos[0].src.landscape}")` }}></div>

        <div className="components-container">

          <div className='top-section'>

            {currentWeather === ''
              ?
              <div className='loading'>Loading...</div>
              :
              
            <>
              <Main data={currentWeather} />
              <div className='other-conditions'>
                <Condition className={"fa-solid fa-wind"}
                  dataName={"Wind speed"} data={currentWeather.current.wind_kph} unit={"km/h"} />
                <Condition className={"fa-solid fa-droplet"}
                  dataName={"Humidity"} data={currentWeather.current.humidity} unit={"%"} />
                <Condition className={"fa-solid fa-sun"}
                  dataName={"UV index"} data={currentWeather.current.uv} />
              </div>
            </>
            }

            <Search updateSearchTerm={updateSearchTerm} />
            <Autocomplete
              suggestions={[
                "Alligator",
                "Bask",
                "Crocodilian",
                "Death Roll",
                "Eggs",
                "Jaws",
                "Reptile",
                "Solitary",
                "Tail",
                "Wetlands"
              ]}
            />

          </div>

            
          <div className='bottom-section'>
            {astroData === '' ? <div>loading</div> : <Sunposition data={astroData} />}
            {forecastData === '' ? <div>loading</div> : <Forecast data={forecastData} />}
          </div>

        </div >
      </div >
    </>
  );
}



export default App;
