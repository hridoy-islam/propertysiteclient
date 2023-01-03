import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';

const SecondaryList = () => {
    return (
        <>
            <ListSubheader component="div" inset>
                Saved reports
            </ListSubheader>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Current month" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Last quarter" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Year-end sale" />
            </ListItemButton>
        </>
    );
};

export default SecondaryList;