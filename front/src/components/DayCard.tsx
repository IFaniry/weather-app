import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

function DayCard() {
  return (
    <Card>
        <CardHeader
            title={
            <Typography variant="h4" component="h3">
                h1. Heading
            </Typography>
            }
        >
            title
        </CardHeader>
    </Card>
  );
}

export default DayCard;
