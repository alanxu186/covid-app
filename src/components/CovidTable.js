import React from 'react';
import '../stylesheets/CovidTable.css';
import numeral from 'numeral';

const CovidTable = ({ countries }) => {

    console.log(countries)

    return (
        <div className='table'>
            <tbody>
                {countries.map((country, cases, key) => (
                    <tr key={key}>
                        <td>{country.country}</td>
                        <td><strong>{numeral(country.cases).format()}</strong></td>
                    </tr>
                )

                )}
            </tbody>
        </div>
    )
}

export default CovidTable