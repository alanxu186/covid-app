import React, { useEffect, useState } from 'react'

const CovidData = () => {
    const [country, setCountry] = useState('');
    const [cases, setCases] = useState('')
    const [recovered, setRecovered] = useState('')
    const [deaths, setDeaths] = useState('')
    const [todayCases, setTodayCases] = useState('')
    const [recoveredCases, setRecoveredCases] = useState('')
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/countries')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>CovidData</div>
    )
}

export default CovidData