import React from 'react'
import ForecastDay from './ForecastDay'


function Forecast(props) {

   // console.log(props.data)

    const getLocalDate = function (localTime) {
        const year = parseInt(localTime.substring(0, 4));
        const month = parseInt(localTime.substring(5, 7));
        const day = parseInt(localTime.substring(8, 10));

        const date = new Date(`${year}, ${month}, ${day}`);

        const weekDays = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];

        const dayOfTheWeek = weekDays[date.getDay()];
        return `${dayOfTheWeek}`
    };

    //console.log(props.data.list[0].dt_txt)
    //console.log(props.data.list[1].dt_txt)
    console.log("Forecast: ", props.data)

    return (
        <div className='forecasts-container'>
            {/* daily data to be mapped */}
            <ForecastDay day={getLocalDate(props.data.list[0].dt_txt)} temperature={(props.data.list[0].main.temp).toFixed(0)} />
            <ForecastDay day={getLocalDate(props.data.list[8].dt_txt)} temperature={(props.data.list[8].main.temp).toFixed(0)} />
            <ForecastDay day={getLocalDate(props.data.list[16].dt_txt)} temperature={(props.data.list[16].main.temp).toFixed(0)} />
            <ForecastDay day={getLocalDate(props.data.list[24].dt_txt)} temperature={(props.data.list[24].main.temp).toFixed(0)} />
            <ForecastDay day={getLocalDate(props.data.list[32].dt_txt)} temperature={(props.data.list[32].main.temp).toFixed(0)} />
{/* 
            <ForecastDay day={getLocalDate(props.data.list[39].dt_txt)} temperature={(props.data.list[39].main.temp).toFixed(0)} />
             */}
        </div>
    )
}
/* props.data.list[0].main.temp */
export default Forecast

/* 
props.data.list[0].dt_txt

getLocalDate(props.data.location.localtime)
*/
