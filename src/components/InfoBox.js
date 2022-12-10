import React from 'react'
import '../stylesheets/InfoBox.css'
import { Card, CardContent, Typography } from '@mui/material'

const InfoBox = ({ title, cases, total, isRed, active }) => {

    console.log(active)
    return (
            <Card>
                <CardContent>
                    <Typography>
                        {title}
                    </Typography>
                    <h2>
                        {cases}
                    </h2>
                    <Typography>
                        {total}
                    </Typography>
                </CardContent>
            </Card>
        )
}

export default InfoBox