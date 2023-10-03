import { Grid } from '@mui/material';
import React from 'react';
import { Card, CardContent, Typography, Container } from '@mui/material';

const cardTexts = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

const Services = () => {
    const cardContainerStyle = {
        display: 'flex',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        animation: 'slide-in 2s ease-in-out infinite alternate',
    };

    const cardStyle = {
        width: '200px',
        height: '100px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 10px',
        transform: 'translateX(-100%)',
    };


    return (
        <Grid container xs={12} sm={12} md={12} lg={12}
            sx={{
                padding: '1rem',
                borderRadius: '15px',
                width: '100%',
                backgroundColor: '#fff',
                display: 'flex',
            }}>
            <Container>
                <div sx={cardContainerStyle}>
                    {cardTexts.map((text, index) => (
                        <div key={index} style={cardStyle}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{text}</Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>

        </Grid>
    )
}

export default Services