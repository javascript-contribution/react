import React, { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../../Redux/Users/user.action";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useAuth } from "../../../Utils/Auth";
import { UserInfo } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import TransitionAlerts, { ErrorAlert, SuccessAlert } from "./Fragments/Alert";

const defaultFormFields = {
  email: "",
  password: "",
};

const theme = createTheme();


export default function SignInWithFirebase() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [userLoggedInData, setUserLoggedInData] = React.useState<
    null | any | UserInfo
  >(null);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      dispatch(emailSignInStart(email, password));

      if (!loggedInUser?.isAnonymous ){
        setSuccess(true);
        setTimeout(() => {
          
          navigate("/");
        }, 10000)
        return ;
      }
      resetFormFields();
    } catch (error) {
      setError("Failed to Sign in");
      console.log("user sign in failed", error);
    }
    setLoading(false);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle();
  };

  const loggedInUser: any = useAuth();

   

  React.useEffect(() => {
    setUserLoggedInData(loggedInUser);
  }, [loggedInUser]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh", width: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
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
              <Typography component={'h2'} variant='h5'> {success? <SuccessAlert /> : (error ? <ErrorAlert error={error} />:  <TransitionAlerts success={success} error={error} />)} </Typography>
            <Tooltip
              title={
                userLoggedInData
                  ? userLoggedInData?.displayName
                  : userLoggedInData?.email
              }
            >
              <IconButton sx={{ p: 0, margin: 2 }}>
                <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
                  {userLoggedInData ? (
                    <Avatar
                      alt={userLoggedInData?.displayName}
                      src={userLoggedInData?.photoURL}
                      sizes={"large"}
                    />
                  ) : (
                    <LockOutlinedIcon />
                  )}
                </Avatar>
              </IconButton>
            </Tooltip>
    
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {error && <Alert>{error}</Alert>}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={handleChange}
                name="email"
                value={email}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                onChange={handleChange}
                name="password"
                value={password}
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
                {loading ? <CircularProgress color="inherit" /> : "Sign In"}
              </Button>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                type="button"
                onClick={handleGoogleSignIn}
              >
                <img
                  width="40"
                  height="40"
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                  }
                  alt="Google"
                />
                {loading && !success? (
                  <CircularProgress color="inherit" />
                ) : ( " Sign In with Google"
                   )
                }
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    onClick={() => navigate("/authenticate/forgot-password")}
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    onClick={() => navigate("/authenticate/sign-up")}
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
