import AppBar from '@mui/material/AppBar';
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tabs, Toolbar, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MainDrawer from './MainDrawer';
import { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/LoginContext';

function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { user, logout } = useContext(AuthContext)
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    logout();
  };
  
  
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
              <Link to="/addproperty" className='removeUnderline lightColor'> Add A Property </Link>
              <Link className='removeUnderline lightColor' >Guides</Link>
              <Link className='removeUnderline lightColor' >Services</Link>
              <Link to='/newprojects' className='removeUnderline lightColor' >New Projects</Link>

            </Tabs>
            {
              user ? <>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={user.photoURL} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>

                  </Menu>
                </Box>
              </> :
                <><Button sx={{ marginLeft: "10px" }} variant="contained">
                  <Link to='/login' className='lightColor' style={{ textDecoration: 'none' }} >Login </Link>
                </Button></>
            }




          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;