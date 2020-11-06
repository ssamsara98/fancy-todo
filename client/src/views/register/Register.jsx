import React, { useState } from 'react';
import { Link as RLink } from 'react-router-dom';
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  // Checkbox,
  Container,
  CssBaseline,
  // FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import { LockOutlined, ErrorOutline } from '@material-ui/icons';

import useStyles from './Register.styles';
import Copyright from '../../components/copyright/Copyright';
import todoApi from '../../apis/todoApi';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../stores/actions/authAction';

export default function SignUp(props) {
  const classes = useStyles();

  const [regForm, setRegForm] = useState({ name: '', email: '', password: '' });
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  function handleRegister(e) {
    e.preventDefault();
    setBackdropOpen(true);

    todoApi({
      url: '/api/users/sign-up',
      method: 'POST',
      data: regForm,
    })
      .then((result) => {
        localStorage.clear();
        localStorage.setItem('token', result?.data?.token);
        localStorage.setItem('user', JSON.stringify(result?.data?.user));
        dispatch(authLogin());
        setBackdropOpen(false);
        props.history.replace('/');
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
          setBackdropOpen(false);
        }, 2000);
      });
  }

  function onRegFormChange(value, type) {
    if (type === 'name') {
      setRegForm({ ...regForm, name: value });
    } else if (type === 'email') {
      setRegForm({ ...regForm, email: value });
    } else if (type === 'password') {
      setRegForm({ ...regForm, password: value });
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleRegister}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  autoComplete="fullname"
                  autoFocus
                  value={regForm.name}
                  onChange={(e) => onRegFormChange(e.target.value, 'name')}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid> */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  autoComplete="email"
                  inputProps={{ inputMode: 'email' }}
                  value={regForm.email}
                  onChange={(e) => onRegFormChange(e.target.value, 'email')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  inputProps={{ minLength: 6, maxLength: 32 }}
                  value={regForm.password}
                  onChange={(e) => onRegFormChange(e.target.value, 'password')}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              /> */}
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link variant="body2" component={RLink} to="login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* backdrop */}
      <Backdrop
        className={classes.backdrop}
        open={backdropOpen}
        style={{ flexDirection: 'column' }}
      >
        {!isError ? (
          <CircularProgress color="inherit" size="10rem" />
        ) : (
          <>
            <ErrorOutline color="secondary" style={{ fontSize: '10rem' }} />
            <span style={{ fontSize: '3rem' }}>Error</span>
          </>
        )}
      </Backdrop>
    </>
  );
}
