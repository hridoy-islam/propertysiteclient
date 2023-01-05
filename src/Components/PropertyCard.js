import {Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const PropertyCard = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image="https://mui.com/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
};

export default PropertyCard;