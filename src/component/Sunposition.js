import React from 'react'

function Sunposition(props) {

  console.log("Sunposition: ", props.data)

    let sunRise = `${props.data.astronomy.astro.sunrise}`
    let sunSet = `${props.data.astronomy.astro.sunset}`
    let localTime = `${props.data.location.localtime}`
    let sunRiseHHMM = sunRise.slice(0, 5);
    let sunSetHHMM = sunSet.slice(0, 5);
    let localTimeHHMM = localTime.slice(11);
    let sunRiseArr = sunRiseHHMM.split(':');
    let sunSetArr = sunSetHHMM.split(':')
    let localTimeArr = localTimeHHMM.split(':')

    console.log(sunRiseArr)
    //--where the magic happens
    let sunRiseMinutes = ((+sunRiseArr[0]) * 60)+ (+sunRiseArr[1]);
    let sunSetMinutes = ((+sunSetArr[0]) * 60 +720)+ (+sunSetArr[1]);
    let localTimeMinutes = (+localTimeArr[0] * 60)+ (+localTimeArr[1]);

    //--day progress in percentage
    let calculateSunRisePosition = Math.round(sunRiseMinutes / 1440 *100);
    console.log(calculateSunRisePosition)
    let calculateSunSetPosition = Math.round(sunSetMinutes / 1440 *100);
    console.log(calculateSunSetPosition)
    let calculateDayProgress = Math.round(localTimeMinutes / 1440 *100) +"%";
    let calculateDashedLineLeftWidth = calculateSunRisePosition + "%";
    let calculateDashedLineRightWidth = 100-calculateSunSetPosition + "%";
    let calculatemiddleLineWidth = 100-calculateSunRisePosition-(100-calculateSunSetPosition) + "%";
    console.log(calculatemiddleLineWidth)

    const sunRisePosition = {
      marginLeft: calculateDashedLineLeftWidth,
    };

    const sunSetPosition = {
      marginRight: calculateDashedLineRightWidth,
    };
    
    const dashedLineLeftWidth = {
      width: calculateDashedLineLeftWidth,
    };

    const dashedLineRightWidth = {
      width: calculateDashedLineRightWidth,
    };

   const breakPointStyles = {
     width: calculatemiddleLineWidth,
     marginLeft: calculateDashedLineLeftWidth,
   };

   const middleLineWidth = {
    width: calculatemiddleLineWidth,
  };

    const sunPosition = {
      left: calculateDayProgress,
    };
    console.log(sunPosition)

    let astralObjectClass;

    if (localTimeMinutes < sunRiseMinutes) {
      astralObjectClass = "fa-solid fa-moon position";
    } 
    else if (localTimeMinutes > sunSetMinutes) {
      astralObjectClass = "fa-solid fa-moon position";
    }
    else {
      astralObjectClass = "fa-solid fa-sun position";
    }

  return (
    <>
      <div className="sundata-container">
        <div className="sun-datas">
        <p className="sunRise" style={sunRisePosition}>{sunRise}</p>
        <p className="sunSet" style={sunSetPosition}>{sunSet}</p>

        </div>
      </div>

      <div className="sunposition">
        <div className="lines">
          <i className={astralObjectClass} style={sunPosition}></i>
          <div className="breakpoints" style={breakPointStyles}></div>
          <div className="dashed-line-left" style={dashedLineLeftWidth}></div>
          <div className="middle-line" style={middleLineWidth}></div>
          <div className="dashed-line-right" style={dashedLineRightWidth}></div>
        </div>

      </div>
    </>
  )
}

export default Sunposition
