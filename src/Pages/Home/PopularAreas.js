import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import divisons from '../../Config/divison.json'

const PopularAreas = () => {
    return (
        <Container sx={{ marginTop: '60px' }}>
            <Typography varient="h2" component="h2" sx={{ fontSize: '28px', fontWeight: '500', textAlign: 'center', p: 4 }}>Popular Areas</Typography>
            <Grid container spacing={2}>
                {divisons.map(divison => <Grid item xs={12} sm={3} key={divison.id}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Link to={`/d/${divison.name}`}>
                            <Typography sx={{ fontSize: 14, fontWeight: '700', textAlign: 'center' }} gutterBottom>
                                {divison.name}
                            </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default PopularAreas;