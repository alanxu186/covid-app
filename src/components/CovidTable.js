import React from 'react';
import '../stylesheets/CovidTable.css';
import numeral from 'numeral';

const CovidTable = ({ countries }) => {
    
    console.log(countries)

    return (
        <div className='table'>
            {countries.map(({ country, cases }) => {
                <tr>
                    <td>{country}</td>
                    <td><strong>{numeral(cases).format()}</strong></td>
                </tr>
            })}
        </div>
    )
}

export default CovidTable