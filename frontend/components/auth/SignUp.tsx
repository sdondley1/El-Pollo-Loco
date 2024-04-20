'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { randomBytes } from "crypto";


export default function SignUp() {
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const { push } = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const password = data.get("password");
    const confirm_password = data.get("confirm-password");
    const username = data.get("username");
    const email = data.get("email");
    const fname = data.get("firstname");
    const lname = data.get("lastname");

    if (password === confirm_password) {
      setPasswordError(false);
      fetch(`${process.env.BACKEND_URL}/auth/signup`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        credentials: "include",
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            fname: fname,
            lname: lname,
            salt: randomBytes(8).toString('hex')
        }),
      })
      .then((res) => {
          if (res.status === 200) {
            setAlert(false);
            push("/discover");
          }
          else {
            setAlert(true);
          }
      })
      .catch((err) => {
          throw err;
      });
    }
    else {
      setPasswordError(true);
    }
  };

  return (
    <div>
      { alert ? <Alert severity='error' onClose={() => setAlert(false)}>Signup failed. Try again later.</Alert> : <></> }
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
          <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="Username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={passwordError}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={passwordError}
                  name="confirm-password"
                  label="Confirm Password"
                  type="password"
                  id="Confirmpassword"
                  autoComplete="new-password"
                  helperText={passwordError ? "Passwords do not match." : undefined}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/auth/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
