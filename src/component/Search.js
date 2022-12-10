import { useState } from "react";
import React from 'react'



function Search({ updateSearchTerm }) {
    const [value, setValue] = useState(''); //search value given in the input field

    const capitalsAll = [
        "Abu Dhabi",
        "Abuja",
        "Accra",
        "Adamstown",
        "Addis Ababa",
        "Algiers",
        "Alofi",
        "Amman",
        "Amsterdam",
        "Andorra la Vella",
        "Ankara",
        "Antananarivo",
        "Apia",
        "Ashgabat",
        "Asmara",
        "Asunción",
        "Athens",
        "Avarua",
        "Baghdad",
        "Baku",
        "Bamako",
        "Bandar Seri Begawan",
        "Bangkok",
        "Bangui",
        "Banjul",
        "Basseterre",
        "Basse-Terre",
        "Beijing",
        "Beirut",
        "Belgrade",
        "Belmopan",
        "Berlin",
        "Bern",
        "Bishkek",
        "Bissau",
        "Bogotá",
        "Brades",
        "Brasília",
        "Bratislava",
        "Brazzaville",
        "Bridgetown",
        "Brussels",
        "Bucharest",
        "Budapest",
        "Buenos Aires",
        "Bujumbura",
        "Cairo",
        "Canberra",
        "Capital City",
        "Capital City",
        "Caracas",
        "Castries",
        "Cayenne",
        "Charlotte Amalie",
        "Chisinau",
        "Città del Vaticano",
        "Cockburn Town",
        "Colombo",
        "Conakry",
        "Concelho de Macau",
        "Copenhagen",
        "Dakar",
        "Damascus",
        "Dhaka",
        "Dili",
        "Djibouti",
        "Dodoma",
        "Doha",
        "Douglas",
        "Dublin",
        "Dushanbe",
        "El Aaiún",
        "Flying Fish Cove",
        "Fort-de-France",
        "Freetown",
        "Funafuti",
        "Gaborone",
        "George Town",
        "Georgetown",
        "Gibraltar",
        "Guatemala City",
        "Gustavia",
        "Hagåtña",
        "Hamilton",
        "Hanoi",
        "Harare",
        "Havana",
        "Helsinki",
        "Hong Kong",
        "Honiara",
        "Islamabad",
        "Jakarta",
        "Jamestown",
        "Jerusalem",
        "Juba",
        "Kabul",
        "Kampala",
        "Kathmandu",
        "Khartoum",
        "Kiev",
        "Kigali",
        "King Edward Point",
        "Kingston",
        "Kingston",
        "Kingstown",
        "Kinshasa",
        "Kuala Lumpur",
        "Kuwait City",
        "Libreville",
        "Lilongwe",
        "Lima",
        "Lisbon",
        "Ljubljana",
        "Lomé",
        "London",
        "Longyearbyen",
        "Luanda",
        "Lusaka",
        "Luxembourg",
        "Madrid",
        "Majuro",
        "Malabo",
        "Malé",
        "Mamoudzou",
        "Managua",
        "Manama",
        "Manila",
        "Maputo",
        "Mariehamn",
        "Marigot",
        "Maseru",
        "Mata-Utu",
        "Mbabane",
        "Mexico City",
        "Minsk",
        "Mogadishu",
        "Monaco",
        "Monrovia",
        "Montevideo",
        "Moroni",
        "Moscow",
        "Muscat",
        "Nairobi",
        "Nassau",
        "Nay Pyi Taw",
        "N'Djamena",
        "New Delhi",
        "Niamey",
        "Nicosia",
        "Nouakchott",
        "Nouméa",
        "Nuku‘alofa",
        "Nursultan",
        "Nuuk",
        "Oranjestad",
        "Oslo",
        "Ottawa",
        "Ouagadougou",
        "Pago Pago",
        "Panama City",
        "Papeete",
        "Paramaribo",
        "Paris",
        "Philipsburg",
        "Phnom Penh",
        "Podgorica",
        "Port Louis",
        "Port Moresby",
        "Port-au-Prince",
        "Port-of-Spain",
        "Porto-Novo",
        "Port-Vila",
        "Prague",
        "Praia",
        "Pretoria",
        "Pristina",
        "Pyongyang",
        "Quito",
        "Rabat",
        "Ramallah",
        "Reykjavík",
        "Riga",
        "Riyadh",
        "Road Town",
        "Rome",
        "Roseau",
        "Saint George's",
        "Saint Helier",
        "Saint John’s",
        "Saint Peter Port",
        "Saint-Denis",
        "Saint-Pierre",
        "Saipan",
        "San José",
        "San Juan",
        "San Marino",
        "San Salvador",
        "Sanaa",
        "Santiago",
        "Santo Domingo",
        "São Tomé",
        "Sarajevo",
        "Seoul",
        "Singapore",
        "Skopje",
        "Sofia",
        "Stanley",
        "Stockholm",
        "Sucre",
        "Suva",
        "Taipei",
        "Tallinn",
        "Tarawa",
        "Tashkent",
        "Tbilisi",
        "Tegucigalpa",
        "Tehran",
        "The Valley",
        "Thimphu",
        "Tirana",
        "Tokyo",
        "Tórshavn",
        "Tripoli",
        "Tunis",
        "Ulaanbaatar",
        "Vaduz",
        "Valletta",
        "Victoria",
        "Vienna",
        "Vientiane",
        "Vilnius",
        "Warsaw",
        "Washington, D.C.",
        "Wellington",
        "West Island",
        "Willemstad",
        "Windhoek",
        "Yamoussoukro",
        "Yaoundé",
        "Yaren",
        "Yerevan",
        "Zagreb",
        ]

    console.log(capitalsAll)
/* 
    dropDownCity = document.querySelector("#capitals")

        for(let i = 0; i<capitalsAll.length; i++){
            let newCityName = capitalsAll[i]
            let newCityOption = document.createElement("OPTION")
            newCityOption.textContent = newCityName
            dropDownCity.appendChild(newCityOption)
        }
 */
    const handleSubmit = e => {
        e.preventDefault(); //prevent default function of form on submit
        if (!value) return; //if value is empty, do nothing (return stops the function)
        updateSearchTerm(value);// update 'location' state in App.js
        setValue(''); //empty the input field
    }


    /* - - - - - Location search hide-visible - - - - - */
    const [isHidden, setHidden] = useState(true)

    const classChange = () => {
        setHidden(!isHidden)
    }

    return (
        <div className='search-section grid-row-span-3'>

            <div className='search'>
                <form onSubmit={handleSubmit} autoComplete="on" id="searchform">
                    <input
                        className={isHidden ? 'hidden transition' : 'visible transition'}
                        list="capitals"
                        type='text'
                        placeholder='Search for a city...'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    
                    <datalist id="capitals">
                        <option value="Abu Dhabi"></option>
                        <option value="Abuja"></option>
                        <option value="Accra"></option>
                        <option value="Adamstown"></option>
                        <option value="Addis Ababa"></option>
                        <option value="Algiers"></option>
                        <option value="Alofi"></option>
                        <option value="Amman"></option>
                        <option value="Amsterdam"></option>
                        <option value="Andorra la Vella"></option>
                        <option value="Ankara"></option>
                        <option value="Antananarivo"></option>
                        <option value="Apia"></option>
                        <option value="Ashgabat"></option>
                        <option value="Asmara"></option>
                        <option value="Asunción"></option>
                        <option value="Athens"></option>
                        <option value="Avarua"></option>
                        <option value="Baghdad"></option>
                        <option value="Baku"></option>
                        <option value="Bamako"></option>
                        <option value="Bandar Seri Begawan"></option>
                        <option value="Bangkok"></option>
                        <option value="Bangui"></option>
                        <option value="Banjul"></option>
                        <option value="Basseterre"></option>
                        <option value="Basse-Terre"></option>
                        <option value="Beijing"></option>
                        <option value="Beirut"></option>
                        <option value="Belgrade"></option>
                        <option value="Belmopan"></option>
                        <option value="Berlin"></option>
                        <option value="Bern"></option>
                        <option value="Bishkek"></option>
                        <option value="Bissau"></option>
                        <option value="Bogotá"></option>
                        <option value="Brades"></option>
                        <option value="Brasília"></option>
                        <option value="Bratislava"></option>
                        <option value="Brazzaville"></option>
                        <option value="Bridgetown"></option>
                        <option value="Brussels"></option>
                        <option value="Bucharest"></option>
                        <option value="Budapest"></option>
                        <option value="Buenos Aires"></option>
                        <option value="Bujumbura"></option>
                        <option value="Cairo"></option>
                        <option value="Canberra"></option>
                        <option value="Capital City"></option>
                        <option value="Capital City"></option>
                        <option value="Caracas"></option>
                        <option value="Castries"></option>
                        <option value="Cayenne"></option>
                        <option value="Charlotte Amalie"></option>
                        <option value="Chisinau"></option>
                        <option value="Città del Vaticano"></option>
                        <option value="Cockburn Town"></option>
                        <option value="Colombo"></option>
                        <option value="Conakry"></option>
                        <option value="Concelho de Macau"></option>
                        <option value="Copenhagen"></option>
                        <option value="Dakar"></option>
                        <option value="Damascus"></option>
                        <option value="Dhaka"></option>
                        <option value="Dili"></option>
                        <option value="Djibouti"></option>
                        <option value="Dodoma"></option>
                        <option value="Doha"></option>
                        <option value="Douglas"></option>
                        <option value="Dublin"></option>
                        <option value="Dushanbe"></option>
                        <option value="El Aaiún"></option>
                        <option value="Flying Fish Cove"></option>
                        <option value="Fort-de-France"></option>
                        <option value="Freetown"></option>
                        <option value="Funafuti"></option>
                        <option value="Gaborone"></option>
                        <option value="George Town"></option>
                        <option value="Georgetown"></option>
                        <option value="Gibraltar"></option>
                        <option value="Guatemala City"></option>
                        <option value="Gustavia"></option>
                        <option value="Hagåtña"></option>
                        <option value="Hamilton"></option>
                        <option value="Hanoi"></option>
                        <option value="Harare"></option>
                        <option value="Havana"></option>
                        <option value="Helsinki"></option>
                        <option value="Hong Kong"></option>
                        <option value="Honiara"></option>
                        <option value="Islamabad"></option>
                        <option value="Jakarta"></option>
                        <option value="Jamestown"></option>
                        <option value="Jerusalem"></option>
                        <option value="Juba"></option>
                        <option value="Kabul"></option>
                        <option value="Kampala"></option>
                        <option value="Kathmandu"></option>
                        <option value="Khartoum"></option>
                        <option value="Kiev"></option>
                        <option value="Kigali"></option>
                        <option value="King Edward Point"></option>
                        <option value="Kingston"></option>
                        <option value="Kingston"></option>
                        <option value="Kingstown"></option>
                        <option value="Kinshasa"></option>
                        <option value="Kuala Lumpur"></option>
                        <option value="Kuwait City"></option>
                        <option value="Libreville"></option>
                        <option value="Lilongwe"></option>
                        <option value="Lima"></option>
                        <option value="Lisbon"></option>
                        <option value="Ljubljana"></option>
                        <option value="Lomé"></option>
                        <option value="London"></option>
                        <option value="Longyearbyen"></option>
                        <option value="Luanda"></option>
                        <option value="Lusaka"></option>
                        <option value="Luxembourg"></option>
                        <option value="Madrid"></option>
                        <option value="Majuro"></option>
                        <option value="Malabo"></option>
                        <option value="Malé"></option>
                        <option value="Mamoudzou"></option>
                        <option value="Managua"></option>
                        <option value="Manama"></option>
                        <option value="Manila"></option>
                        <option value="Maputo"></option>
                        <option value="Mariehamn"></option>
                        <option value="Marigot"></option>
                        <option value="Maseru"></option>
                        <option value="Mata-Utu"></option>
                        <option value="Mbabane"></option>
                        <option value="Mexico City"></option>
                        <option value="Minsk"></option>
                        <option value="Mogadishu"></option>
                        <option value="Monaco"></option>
                        <option value="Monrovia"></option>
                        <option value="Montevideo"></option>
                        <option value="Moroni"></option>
                        <option value="Moscow"></option>
                        <option value="Muscat"></option>
                        <option value="Nairobi"></option>
                        <option value="Nassau"></option>
                        <option value="Nay Pyi Taw"></option>
                        <option value="N'Djamena"></option>
                        <option value="New Delhi"></option>
                        <option value="Niamey"></option>
                        <option value="Nicosia"></option>
                        <option value="Nouakchott"></option>
                        <option value="Nouméa"></option>
                        <option value="Nuku‘alofa"></option>
                        <option value="Nursultan"></option>
                        <option value="Nuuk"></option>
                        <option value="Oranjestad"></option>
                        <option value="Oslo"></option>
                        <option value="Ottawa"></option>
                        <option value="Ouagadougou"></option>
                        <option value="Pago Pago"></option>
                        <option value="Panama City"></option>
                        <option value="Papeete"></option>
                        <option value="Paramaribo"></option>
                        <option value="Paris"></option>
                        <option value="Philipsburg"></option>
                        <option value="Phnom Penh"></option>
                        <option value="Podgorica"></option>
                        <option value="Port Louis"></option>
                        <option value="Port Moresby"></option>
                        <option value="Port-au-Prince"></option>
                        <option value="Port-of-Spain"></option>
                        <option value="Porto-Novo"></option>
                        <option value="Port-Vila"></option>
                        <option value="Prague"></option>
                        <option value="Praia"></option>
                        <option value="Pretoria"></option>
                        <option value="Pristina"></option>
                        <option value="Pyongyang"></option>
                        <option value="Quito"></option>
                        <option value="Rabat"></option>
                        <option value="Ramallah"></option>
                        <option value="Reykjavík"></option>
                        <option value="Riga"></option>
                        <option value="Riyadh"></option>
                        <option value="Road Town"></option>
                        <option value="Rome"></option>
                        <option value="Roseau"></option>
                        <option value="Saint George's"></option>
                        <option value="Saint Helier"></option>
                        <option value="Saint John’s"></option>
                        <option value="Saint Peter Port"></option>
                        <option value="Saint-Denis"></option>
                        <option value="Saint-Pierre"></option>
                        <option value="Saipan"></option>
                        <option value="San José"></option>
                        <option value="San Juan"></option>
                        <option value="San Marino"></option>
                        <option value="San Salvador"></option>
                        <option value="Sanaa"></option>
                        <option value="Santiago"></option>
                        <option value="Santo Domingo"></option>
                        <option value="São Tomé"></option>
                        <option value="Sarajevo"></option>
                        <option value="Seoul"></option>
                        <option value="Singapore"></option>
                        <option value="Skopje"></option>
                        <option value="Sofia"></option>
                        <option value="Stanley"></option>
                        <option value="Stockholm"></option>
                        <option value="Sucre"></option>
                        <option value="Suva"></option>
                        <option value="Taipei"></option>
                        <option value="Tallinn"></option>
                        <option value="Tarawa"></option>
                        <option value="Tashkent"></option>
                        <option value="Tbilisi"></option>
                        <option value="Tegucigalpa"></option>
                        <option value="Tehran"></option>
                        <option value="The Valley"></option>
                        <option value="Thimphu"></option>
                        <option value="Tirana"></option>
                        <option value="Tokyo"></option>
                        <option value="Tórshavn"></option>
                        <option value="Tripoli"></option>
                        <option value="Tunis"></option>
                        <option value="Ulaanbaatar"></option>
                        <option value="Vaduz"></option>
                        <option value="Valletta"></option>
                        <option value="Victoria"></option>
                        <option value="Vienna"></option>
                        <option value="Vientiane"></option>
                        <option value="Vilnius"></option>
                        <option value="Warsaw"></option>
                        <option value="Washington></option> D.C."></option>
                        <option value="Wellington"></option>
                        <option value="West Island"></option>
                        <option value="Willemstad"></option>
                        <option value="Windhoek"></option>
                        <option value="Yamoussoukro"></option>
                        <option value="Yaoundé"></option>
                        <option value="Yaren"></option>
                        <option value="Yerevan"></option>
                        <option value="Zagreb"></option>
                    </datalist>

                </form>
                <div onClick={classChange} className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                </div>
            </div>

            <div className="favorites">

                <select
                    name="favorites"
                    id="select-favorite"
                    className='hidden'>
                    <option value=''></option>
                </select>

                <div className="icon">
                    <i className="fa-solid fa-heart"></i>
                </div>
            </div>

        </div>
    )
}

/* 
const apiKey = "6a395e43e8b53078ca9036ad0b54661a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
    console.log(url)

const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation("")
        }

    }
*/

export default Search