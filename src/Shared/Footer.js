import { Container, Grid } from '@mui/material';
import React from 'react'; 

const Footer = () => {
    return (
        <div className='footerbg'>
            <Container>
            <Grid container spacing={3}>
                {/* <Grid item xs={12} sm={4}>
                    <Link className='removeUnderline lightColor'> About </Link>
                    <Link className='removeUnderline lightColor'> About </Link>
                    <Link className='removeUnderline lightColor'> About </Link>
                    <Link className='removeUnderline lightColor'> About </Link>
                </Grid>
                <Grid item xs={12} sm={4}>

                </Grid>
                <Grid item xs={12} sm={4}>

                </Grid> */}
                <Grid item xs={12} sm={12} >
                <p className='lightColor' style={{textAlign: 'center'}}>&copy; All Rights Researved. Design and Developed By <a className='lightColor' href="https://github.com/hridoy-islam">Ridoy Islam</a></p>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default Footer;