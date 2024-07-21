import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        arogyai.ai
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(data:image/jpeg;base64,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)",

            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
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
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
