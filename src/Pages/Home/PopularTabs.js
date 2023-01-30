import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Divider, Grid, Link, List, ListItem, ListItemText } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const PopularTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container sx={{ p: 4 }}>
            <Typography varient="h2" component="h2" sx={{ fontSize: '28px', fontWeight: '500', textAlign: 'center', p: 4 }}>Popular Neighborhoods</Typography>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="For Sale" {...a11yProps(0)} />
                        <Tab label="To Rent" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4} >
                            <Typography component="h2" sx={{ fontSize: '20px' }}><Link to="/">Dhaka Apartments</Link></Typography>
                            <List>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Bashundhara R-A" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Uttara" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Mirpur" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Gulshan" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Dhanmondi" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography component="h2" sx={{ fontSize: '20px' }}><Link to="/">Chattogram Apartments</Link></Typography>
                            <List>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Bayazid" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Double Mooring" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Khulshi" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="16 No. Chawk Bazaar Ward" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="4 No Chandgaon Ward" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography component="h2" sx={{ fontSize: '20px' }}><Link to="/">Chattogram Popular locations</Link></Typography>
                            <List>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Bayazid" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Khulshi" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="4 No Chandgaon Ward" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Jamal Khan" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Bakalia" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 4 }} />
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4} >
                            <Typography component="h2" sx={{ fontSize: '20px' }}><Link to="/">Dhaka offices</Link></Typography>
                            <List>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Motijheel" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Mohammadpur" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Kalabagan" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Dhanmondi" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Badda" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography component="h2" sx={{ fontSize: '20px' }}><Link to="/">Dhaka Popular locations</Link></Typography>
                            <List>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Bashundhara R-A" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Uttara" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Mirpur" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Gulshan" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Dhanmondi" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography component="h2" sx={{ fontSize: '20px' }}><Link to="/">Dhaka Commercial</Link></Typography>
                            <List>
                            <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Motijheel" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Dhanmondi" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Badda" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Tejgaon" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Uttra" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4} >
                            <Typography component="h2" sx={{ fontSize: '20px' }}><Link to="/">Dhaka Apartments</Link></Typography>
                            <List>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Bashundhara R-A" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Uttara" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Mirpur" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Gulshan" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Dhanmondi" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography component="h2" sx={{ fontSize: '20px' }}><Link to="/">Chattogram Apartments</Link></Typography>
                            <List>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Khulshi" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Halishahar" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="South Khulsi" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Kazir Dewri" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="15 No. Bagmoniram Ward" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography component="h2" sx={{ fontSize: '20px' }}><Link to="/">Chattogram Popular locations</Link></Typography>
                            <List>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Halishahar" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Khulshi" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Kazir Dewri" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Panchlaish" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 4 }} />
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4} >
                            <Typography component="h2" sx={{ fontSize: '20px' }}><Link to="/">Dhaka offices</Link></Typography>
                            <List>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Motijheel" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Mohammadpur" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Kalabagan" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Dhanmondi" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Badda" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography component="h2" sx={{ fontSize: '20px' }}><Link to="/">Dhaka Popular locations</Link></Typography>
                            <List>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Bashundhara R-A" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Uttara" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Mirpur" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Gulshan" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Dhanmondi" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography component="h2" sx={{ fontSize: '20px' }}><Link to="/">Dhaka Commercial</Link></Typography>
                            <List>
                            <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Motijheel" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Dhanmondi" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Badda" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Tejgaon" />
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemText primary="Uttra" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </TabPanel>
            </Box>
        </Container>
    );
}

export default PopularTabs;