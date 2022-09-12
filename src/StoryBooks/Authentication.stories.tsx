import React, { useState, FormEvent, ChangeEvent } from "react";
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

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TransitionAlerts, { ErrorAlert, SuccessAlert } from "../Components/Authentication/SignInWithGoogleFirebase/Fragments/Alert";
import { UserInfo } from "firebase/auth";
import {withA11y}  from '@storybook/addon-a11y'

export default {
  title: "Component | Authentication",
  decorators : [withA11y],
  // component: LogInWithFirebase,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

export const ForgotPassword = () => {
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: any) {
    e.preventDefault()
    try {
      setMessage("")
      setError("")
      setLoading(true)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <Grid container>
        <Grid item>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert color="error">{error}</Alert>}
          {message && <Alert color="success">{message}</Alert>}
          <form
            onSubmit={handleSubmit}
          >
            <Grid item id="email">
              <label>Email</label>
              <input type="email"
                // ref={emailRef}
                required />
            </Grid>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link href="/authenticate/login">Login</Link>
          </div>
        </Grid>
      </Grid>
      <div className="w-100 text-center mt-2">
        Need an account? <Link href="/authenticate/sign-up">Sign Up</Link>
      </div>
    </>
  )
}



export const LogInWithFirebase = () => {
  // const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      // dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      setError("Failed to log in");
      console.log("user sign in failed", error);
    }
    setLoading(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <>
        <Grid container>
          <span className="text-center mb-4">Already have an account?</span>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert color="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <Grid item >

              <TextField id="outlined-basic" label="Email" variant="outlined"
                onChange={handleChange}
                name="email"
                value={email}
                required
              />

            </Grid>
            <Grid item>
              <TextField id="outlined-basic2" label="Password" variant="outlined"
                onChange={handleChange}
                name="password"
                value={password}
                required
              />
            </Grid>

            <Button disabled={loading} className="w-100" type="submit">
              {loading ? <CircularProgress color="inherit" /> : "Log In"}
            </Button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link href="/authenticate/forgot-password">Forgot Password?</Link>
          </div>
        </Grid>
      </>
      <div className="w-100 text-center mt-2">
        Need an account? <Link href="/authenticate/sign-up">Sign Up</Link>
      </div>
    </div>
  );
}



const defaultFormFields = {
  email: "",
  password: "",
};

const theme = createTheme();


export const SignInWithFirebase = () => {
  // const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  // const navigate = useNavigate();
  const [userLoggedInData, setUserLoggedInData] = React.useState<
    null | any | UserInfo
  >(null);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    // dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      // dispatch(emailSignInStart(email, password));

      // if (!loggedInUser?.isAnonymous ){
      //   setSuccess(true);
      //   setTimeout(() => {

      //     navigate("/");
      //   }, 10000)
      //   return ;
      // }
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

  // const loggedInUser: any = useAuth();
  // React.useEffect(() => {
  //   setUserLoggedInData(loggedInUser);
  // }, [loggedInUser]);

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
            <Typography component={'h2'} variant='h5'> {success ? <SuccessAlert /> : (error ? <ErrorAlert error={error} /> : <TransitionAlerts success={success} error={error} />)} </Typography>
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
                {loading && !success ? (
                  <CircularProgress color="inherit" />
                ) : (" Sign In with Google"
                )
                }
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    // onClick={() => navigate("/authenticate/forgot-password")}
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    // onClick={() => navigate("/authenticate/sign-up")}
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

