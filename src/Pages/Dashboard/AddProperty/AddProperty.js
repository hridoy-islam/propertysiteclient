import React from 'react';
import Grid from '@mui/material/Grid'
import { Button, Checkbox, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextareaAutosize, TextField, Typography } from '@mui/material';
import cities from '../../../Config/city.json';
import divisons from '../../../Config/divison.json';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const AddProperty = () => {
    return (
        <div style={{paddingBottom: '30px'}}>
            <Typography variant="h6" gutterBottom>
                Add New Property
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Title"
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="price"
                        name="price"
                        label="Price"
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl sx={{ width: '100%' }}>
                        <InputLabel>Divison</InputLabel>
                        <Select
                            input={<OutlinedInput label="Divison" />}
                        >
                            {divisons.map((divison) => <MenuItem>{divison.name}</MenuItem>)}

                        </Select>

                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl sx={{ width: '100%' }}>
                        <InputLabel>City</InputLabel>
                        <Select
                            input={<OutlinedInput label="City" />}
                        >
                            {cities.map((city) => <MenuItem>{city.name}</MenuItem>)}

                        </Select>

                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl sx={{ width: '100%' }}>
                        <InputLabel>Bedroom</InputLabel>
                        <Select
                            input={<OutlinedInput label="Bedroom" />}
                        >
                            <MenuItem>1</MenuItem>
                            <MenuItem>2</MenuItem>
                            <MenuItem>3</MenuItem>
                            <MenuItem>4</MenuItem>
                            <MenuItem>5</MenuItem>
                            <MenuItem>6</MenuItem>

                        </Select>

                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl sx={{ width: '100%' }}>
                        <InputLabel>Baths</InputLabel>
                        <Select
                            input={<OutlinedInput label="Baths" />}
                        >
                            <MenuItem>1</MenuItem>
                            <MenuItem>2</MenuItem>
                            <MenuItem>3</MenuItem>
                            <MenuItem>4</MenuItem>
                            <MenuItem>5</MenuItem>
                            <MenuItem>6</MenuItem>

                        </Select>

                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="sqfoot"
                        name="sqfoot"
                        label="sqft"
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                        placeholder='1000'
                    />
                </Grid>

                <Grid item xs={12} sm={4}>

                    <FormControl sx={{ width: '100%' }}>
                        <InputLabel>Property Type</InputLabel>
                        <Select
                            input={<OutlinedInput label="Property Type" />}
                        >
                            <MenuItem>Appartment</MenuItem>
                            <MenuItem>Building</MenuItem>
                            <MenuItem>Land</MenuItem>

                        </Select>

                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>

                    <FormControl sx={{ width: '100%' }}>
                        <InputLabel>Completion</InputLabel>
                        <Select
                            input={<OutlinedInput label="Completion" />}
                        >
                            <MenuItem>Ready</MenuItem>
                            <MenuItem>On Going</MenuItem>

                        </Select>

                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>

                    <FormControl sx={{ width: '100%' }}>

                        <Button variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>

                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={12} spacing={4}>

                    <InputLabel>Description</InputLabel>
                    <TextareaAutosize style={{ width: '100%' }} minRows={7} />
                </Grid>
                <Grid item xs={12} sm={12} spacing={4}>
                    <Typography variant="h6" gutterBottom>
                        Location & Nearby
                    </Typography>

                    <FormControlLabel control={<Checkbox />} label="Schools" />
                    <FormControlLabel control={<Checkbox />} label="Resturants" />
                    <FormControlLabel control={<Checkbox />} label="Hospital" />
                    <FormControlLabel control={<Checkbox />} label="Shopping Mall" />

                </Grid>
                <Grid item xs={12} sm={12} spacing={4}>
                    <Typography variant="h6" gutterBottom>
                        Project Features / Amenities
                    </Typography>

                    <FormControlLabel control={<Checkbox />} label="Electricity Backup" />
                    <FormControlLabel control={<Checkbox />} label="Waste Disposal" />
                    <FormControlLabel control={<Checkbox />} label="24 Hours Concierge" />
                    <FormControlLabel control={<Checkbox />} label="Electricity" />
                    <FormControlLabel control={<Checkbox />} label="Broadband Internet" />
                    <FormControlLabel control={<Checkbox />} label="Satellite/Cable TV" />
                    <FormControlLabel control={<Checkbox />} label="Business Center" />
                    <FormControlLabel control={<Checkbox />} label="Intercom" />
                    <FormControlLabel control={<Checkbox />} label="ATM Facility" />
                    <FormControlLabel control={<Checkbox />} label="Barbeque Area" />
                    <FormControlLabel control={<Checkbox />} label="Day Care Center" />
                    <FormControlLabel control={<Checkbox />} label="First Aid Medical Center" />
                    <FormControlLabel control={<Checkbox />} label="Gym or Health Club" />
                    <FormControlLabel control={<Checkbox />} label="Lawn or Garden" />
                    <FormControlLabel control={<Checkbox />} label="Game/Sports Area" />
                    <FormControlLabel control={<Checkbox />} label="Nearby Schools" />
                    <FormControlLabel control={<Checkbox />} label="Nearby Public Transport" />
                    <FormControlLabel control={<Checkbox />} label="CCTV Security" />
                    <FormControlLabel control={<Checkbox />} label="Fire Exit" />
                    <FormControlLabel control={<Checkbox />} label="Fire Extinguisher" />
                    <FormControlLabel control={<Checkbox />} label="Fire Hose" />
                    <FormControlLabel control={<Checkbox />} label="Sprinkler" />
                    <FormControlLabel control={<Checkbox />} label="Guard/ Security Staff" />
                    <FormControlLabel control={<Checkbox />} label="Visitor Log" />
                    <FormControlLabel control={<Checkbox />} label="Fire Alarm" />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Button variant="contained" component="label"> Add Property</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default AddProperty;