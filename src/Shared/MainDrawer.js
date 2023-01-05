import { Button, Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';

const MainDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItemButton>
                        <ListItemText><Link className='removeUnderline' to="/login">Add A Property</Link></ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText><Link className='removeUnderline' to="/login">Guides</Link></ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText><Link className='removeUnderline' to="/login">Services</Link></ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText><Link className='removeUnderline' to="/login">New Projects</Link></ListItemText>
                    </ListItemButton> 

                    <ListItemButton>
                        <ListItemText>
                            <Button sx={{ marginLeft: "10px" }} variant="contained">
                                <Link to='/login' className='removeUnderline lightColor' >Login </Link>
                            </Button>
                        </ListItemText>
                    </ListItemButton>




                </List>
            </Drawer>
            <IconButton
                sx={{ color: "white", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon color="white" />
            </IconButton>
        </>
    );
};

export default MainDrawer;