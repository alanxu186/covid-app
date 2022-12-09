import React from 'react';
import { Circle, Popup } from 'react-leaflet';
import numeral from 'numeral'

// hex colors for cases types (cases, recovered, death)
// multiplier value for map component 
const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 800
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 1200
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 2000
    }
}

//function to sort data response
export const sortData = (data) => {
    const sortedData = [...data];
    // sort the array of data received 
    sortedData.sort((a, b) => {
        if (a.cases > b.cases) {
            return -1;
        } else {
            return 1
        }
    })
    return sortedData
}

// function to be used in Map function
// when clicking on a country, it should popup and have its flag, country name, total cases, recovered, and deaths
export const showDataOnMap = (data, casesType = 'cases') => {
    data.map(country => (
        <Circle center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
            }
        >
            <Popup>
                <div className='info-container'>
                    <div className='info-flag'
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}>
                        <div className='info-name'>{country.country}</div>
                        <div className='info-confirm'>Cases:{numeral(country.cases).format("0,0")}</div>
                        <div className='info-recovered'>Recovered: {numeral(country.recovered).format("0,0")}</div>
                        <div className='info-deaths'>Deaths: {numeral(country.deaths).format("0,0")}</div>
                    </div>
                </div>
            </Popup>
        </Circle>
    ))
};

//if there is any info to show in infoBox, show it in prettier format
export const prettyPrintStat = (stat) =>
    stat ? `+${numeral(stat).format('0,0a')}` : "+0";

