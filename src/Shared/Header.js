import AppBar from '@mui/material/AppBar';
import { Button,  Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MainDrawer from './MainDrawer'; 

function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

   


  return (
    <AppBar sx={{ background: "#063970" }}>
      <Toolbar>
        <HomeOutlinedIcon sx={{ fontSize: "2rem" }} />
        <Typography sx={{ fontSize: "2rem", marginTop: "2px" }}>Bdproperty</Typography>
        {isMatch ? (
          <>
            <MainDrawer />
          </>
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
            >
            <Link className='removeUnderline lightColor'><Tab label="Add A Property" /></Link>
            <Link className='removeUnderline lightColor' ><Tab label="Guides" /></Link>
            <Link className='removeUnderline lightColor' ><Tab label="Services" /></Link>
            <Link to='/newprojects' className='removeUnderline lightColor' ><Tab label="New Projects" /></Link>
            
            </Tabs>
            <Button    sx={{ marginLeft: "10px" }} variant="contained">
            <Link to='/login' className='removeUnderline lightColor' >Login </Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;