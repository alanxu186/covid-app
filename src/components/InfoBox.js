import React from 'react'
import '../stylesheets/InfoBox.css'
import { Card, CardContent, Typography } from '@mui/material'

const InfoBox = ({ title, cases, total, isRed, active }) => {

    console.log(active)
    return (
            <Card className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
                <CardContent>
                    <Typography className='infoBox_title' color='text-Secondary'>
                        {title}
                    </Typography>
                    <h2 className={`infoBox_cases ${!isRed && 'infoBox_cases--green'}`}>
                        {cases}
                    </h2>
                    <Typography color='textSecondary'>
                        {total}
                    </Typography>
                </CardContent>
            </Card>
        )
}

export default InfoBox