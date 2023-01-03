import { Button, FormControl, Input, InputAdornment, MenuItem, Select } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Search = () => {

    return (
        <div className='container'>
            <form>
                <FormControl fullWidth>
                    <Select>
                        <MenuItem selected value={'buy'}>Buy</MenuItem>
                        <MenuItem value={'rent'}>Rent</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <Input
                        endAdornment={
                            <InputAdornment position="end">
                                <LocationOnIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button variant="contained">Find</Button>
                <Button color="secondary">Reset Search</Button>
            </form>
        </div>
    );
};

export default Search;