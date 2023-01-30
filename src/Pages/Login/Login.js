import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { AuthContext } from '../../Contexts/LoginContext';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import {  useNavigate, useLocation, Link, Navigate } from "react-router-dom";

const Login = () => {

  const { googleLogin, setUser, user } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if(user){
    return <Navigate to="/" />
  }

  const handleGoogleLogin = () => {

    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  }
  return (
    <div>
      <Container component="main" maxWidth="xs">

        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
            Log in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mb: 2 }}
            onClick={handleGoogleLogin}
          >
            <GoogleIcon sx={{ mr: 1 }} />Login With Google
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgotpassword">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>

        </Box>
      </Container>
    </div>
  );
};

export default Login;