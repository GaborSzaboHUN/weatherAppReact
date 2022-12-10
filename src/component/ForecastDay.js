import React from 'react'

function ForecastDay({ day, temperature }) {
  return (
    <div className='forecast-day'>
      <p className='forecast-day-of-week'>{day}</p>
      <p className='forecast-temp'>{temperature} ºC</p>
    </div>
  )
}

export default ForecastDay