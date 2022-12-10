import React from 'react'

function Condition({ className, dataName, data, unit }) {
    return (
        <div className="condition-container">
            <i className={className}></i>
            <p className='condition-data'>{dataName}</p>
            <p>{data} <span>{unit}</span></p>
        </div >
    )
}

export default Condition

/* 
        <div className='other-conditions'>
            <div className="wind-speed">
                <i class="fa-solid fa-wind"></i>
                <p>Wind speed</p>
                <p>5 km/h</p>
            </div>
            <div className='humidity'>
                <i class="fa-solid fa-droplet"></i>
                <p>Humidity</p>
                <p>50%</p>
            </div>
            <div className="chance-of-rain">
                <i class="fa-solid fa-umbrella"></i>
                <p>Chance of rain</p>
                <p>10%</p>
            </div>
        </div>
*/