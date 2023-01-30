import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import cities from '../../Config/city.json'
import divisons from '../../Config/divison.json'

const Divison = () => {
    const { divison } = useParams();
    const foundDivison = divisons.find(element => element.name === divison);
    const foundCities = cities.filter(element => element.division_id === foundDivison.id)
    console.log(foundCities)
    return (
        <div>
            <Container component="main" sx={{pt: 8}}>
            <Typography varient="h1" component="h1" sx={{ fontSize: '28px', fontWeight: '500', textAlign: 'center', p: 4 }}>Popular Areas in {divison}</Typography>
            <Grid container spacing={2}>
                {foundCities.map(city => <Grid item xs={12} sm={3} key={city.id}>
                    <Card sx={{ minWidth: 275, border: 1 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, fontWeight: '700', textAlign: 'center' }} gutterBottom>
                                {city.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                )}
            </Grid>
            </Container>
        </div>
    );
};

export default Divison;