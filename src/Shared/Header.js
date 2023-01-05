import AppBar from '@mui/material/AppBar';
import { Button, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
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
        <Typography sx={{ fontSize: "2rem", marginTop: "2px" }}><Link className='removeUnderline lightColor' to="/">Bdproperty</Link></Typography>
        
        {isMatch ? (
          <>
            <MainDrawer />
          </>
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
            >
            <Link className='removeUnderline lightColor'> Add A Property </Link>
            <Link className='removeUnderline lightColor' >Guides</Link>
            <Link className='removeUnderline lightColor' >Services</Link>
            <Link to='/newprojects' className='removeUnderline lightColor' >New Projects</Link>
            
            </Tabs>
            <Button    sx={{ marginLeft: "10px" }} variant="contained">
            <Link to='/login' className='lightColor' style={{textDecoration: 'none'}} >Login </Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;