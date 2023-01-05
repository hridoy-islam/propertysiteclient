import { Button, Container, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import React from 'react';
import PropertyCard from '../../Components/PropertyCard';
import cities from '../../Config/city.json';

const NewProjects = () => {
    return (
        <div>
            <Container sx={{padding: '150px 0'}} style={{textAlign: "center", background: '#f2f2f2', borderRadius: '0 0 10px 10px'}}> 
                <FormControl sx={{ m: 1, width: 250 }}>
                    <InputLabel id="demo-multiple-name-label">City</InputLabel>
                    <Select
                        input={<OutlinedInput label="City" />}
                    >
                        {cities.map((city)=> <MenuItem>{city.name}</MenuItem>)}
                        
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 250 }}>
                    <InputLabel id="demo-multiple-name-label">Property Type</InputLabel>
                    <Select
                        input={<OutlinedInput label="Property Type" />}
                    >
                        <MenuItem>Residential</MenuItem>
                        <MenuItem>Commercial</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 250 }}>
                    <TextField id="outlined-basic" label="Project Name" variant="outlined" />
                </FormControl>
                <FormControl sx={{ m: 1, width: 200 }}>
                    <Button variant="contained" sx={{ padding: '15px' }}>Find </Button>
                </FormControl>
            </Container>
            <Container>
                <h2 style={{ textAlign: "center", padding: '20px 0' }}>Discover New Projects</h2>
                <Grid container spacing={2}>
                    <Grid item md={4}><PropertyCard></PropertyCard></Grid>
                    <Grid item md={4}><PropertyCard></PropertyCard></Grid>
                    <Grid item md={4}><PropertyCard></PropertyCard></Grid>
                    <Grid item md={4}><PropertyCard></PropertyCard></Grid>
                    <Grid item md={4}><PropertyCard></PropertyCard></Grid>
                    <Grid item md={4}><PropertyCard></PropertyCard></Grid>
                    <Grid item md={4}><PropertyCard></PropertyCard></Grid>
                    <Grid item md={4}><PropertyCard></PropertyCard></Grid>
                    <Grid item md={4}><PropertyCard></PropertyCard></Grid>
                    <Grid item md={4}><PropertyCard></PropertyCard></Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default NewProjects;