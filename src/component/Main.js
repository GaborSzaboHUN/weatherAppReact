import React from 'react'

function Main(props) {

  const getLocalDate = function (localTime) {
    const year = parseInt(localTime.substring(0, 4));
    const month = parseInt(localTime.substring(5, 7));
    const day = parseInt(localTime.substring(8, 10));

    const date = new Date(`${year}, ${month}, ${day}`);

    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const dayOfTheWeek = weekDays[date.getDay()];
    return `${dayOfTheWeek}`
  };


  //console.log("Main: ", props.data)
  //console.log(getLocalDate(props.data.location.localtime))
  //console.log(typeof (props.data.current.condition.icon))

  return (
    <div className='main-container'>

      <div className='upper-row'>

        <div className='date-all'>
          <h3>{(props.data.location.localtime).slice(11)}</h3>
          <p className='today'>{getLocalDate(props.data.location.localtime)}</p>
          <p className='date'>{(props.data.location.localtime).slice(0, -5).replaceAll("-", ". ")}</p>
        </div>

        <div className='city-country'>
          <h1 className='city'>{props.data.location.name}</h1>
          <h3 className='country'>{props.data.location.country}</h3>
        </div>
        <i className="fa-regular fa-heart"></i>

      </div>

      <div className='lower-row'>
        <div className="temp-container">
          <p className='temp'>{(props.data.current.temp_c).toFixed(0)}</p>
          <p className='text-shadow'>°C</p>
        </div>

        <div className="general-condition-container">
          {/* <img src={props.data.current.condition.icon} alt="" /> */}
          <img src={props.data.current.condition.icon} alt="weather icon" />
          {/* <i className="fa-solid fa-cloud-sun"></i> */}
          <p className='general-condition'>{props.data.current.condition.text}</p>
        </div>
      </div>

    </div >
  )
}

export default Main
