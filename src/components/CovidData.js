import React, { useEffect, useState } from 'react'

const CovidData = () => {
    const [country, setCountry] = useState('');
    const [cases, setCases] = useState('')
    const [recovered, setRecovered] = useState('')
    const [deaths, setDeaths] = useState('')
    const [todayCases, setTodayCases] = useState('')
    const [deathCases, setDeathCases] = useState('')
    const [recoveredCases, setRecoveredCases] = useState('')
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/countries')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    // form value inputs 
    const setData = ({
        country,
        cases,
        recovered,
        deaths,
        todayCases,
        todayDeaths,
        todayRecovered
    }) => {
        setCountry(country)
        setCases(cases)
        setRecovered(recovered)
        setDeaths(deaths)
        setTodayCases(todayCases)
        setDeathCases(todayDeaths)
        setRecoveredCases(todayRecovered)
    }

    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
            .then(res => res.json())
            .then(data => setData(data))
    }

    return (
        <div>
            <h1>COVID-19 CASES COUNTRY</h1>
            <form onSubmit={handleSubmit}>
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className='relative flex items-center justify-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96 '>
                    <div className="inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={handleSearch} type="search" className="block w-96 p-4 pl-10 text-sm  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Country..." required />

                    <button type="submit" className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>

                </div>
            </form>

            {/* display details for searched country */}
            <div>
                <p>Country Name: {country}</p>
                <p>Cases: {cases}</p>
                <p>Deaths: {deaths}</p>
                <p>Recovered: {recovered}</p>
                <p>Cases Today: {todayCases}</p>
                <p>Deaths Today: {deathCases}</p>
                <p>Recovered Today: {recoveredCases}</p>
            </div>
        </div>
    )
}

export default CovidData