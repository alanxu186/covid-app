import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import CovidData from "./components/CovidData";
import Map from "./components/Map";
import CovidTable from "./components/CovidTable";
import InfoBox from "./components/InfoBox";
import LineGraph from "./components/LineGraph";
import Navbar from "./components/Navbar";
import "leaflet/dist/leaflet.css"

function App() {

  // dropdown feature
  const [countries, setCountries] = useState([]);
  // store selected country name
  const [country, setCountry] = useState('worldwide');
  // store country info
  const [countryInfo, setCountryInfo] = useState({});
  // store data of total covid cases for each country
  const [tableData, setTableData] = useState([]);
  // store latitude and longitude value of selected country
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  // zoom in and zoom out of map
  const [mapZoom, setMapZoom] = useState(3);
  // store array of list of countries present in map
  const [mapCountries, setMapCountries] = useState([]);
  // style components based on cases, recovered, deaths 
  const [caseTypes, setCaseTypes] = useState('cases');

  //fetch from covid api
  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(res => res.json())
      .then(data =>
        setCountryInfo(data))
  }, [])

  //fetch individual country info
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((res) => res.json())
        .then((data) => {
          //store country's name and value
          const countries = countries.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ));
          // sort data in descending order and setting it to tabledData
          const sortedData = sortData(data)
          setTableData(sortedData);
          // data response passed to mapCountries to be used in map component
          setMapCountries(data);
          setCountries(countries)
        })
    }
    getCountriesData
  }, [])

  // when clicking dropdown, set the value of the selected country and fetch for its info
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);
    // if countryCode matches worldwide then return fetch for all, else return the specific country code
    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);
        // set the specific latitude and longitude of the selected country
        setMapCenter([data.countryInfo.lat, data.countryInfo.long])
        // magnify by 4x when country is selected
        setMapZoom(4);
      })
  }

  return (
    <div className="App">
      <Navbar />
      {/* <CovidData /> */}
    </div>
  );
}

export default App;
