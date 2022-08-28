import { Avatar, Grid, IconButton, Tooltip } from "@mui/material";
import { useAuth } from "../../../Utils/Auth";
import { UserInfo } from "firebase/auth";
import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { signOutUser } from "../../../Utils/Firebase";

export default function Profile() {
  const [error, setError] = useState("");
  const [userLoggedInData, setUserLoggedInData] = React.useState<
    null | any | UserInfo
  >(null);
  const loggedInUser: any = useAuth();
  const navigate = useNavigate();

  async function handleLogout(event: { preventDefault: () => void }) {
    event.preventDefault();
    signOutUser();
    setError("");
    try {
      navigate("/authenticate/login");
    } catch {
      setError("Failed to log out");
      console.log(error);
    }
  }
  React.useEffect(() => {
    setUserLoggedInData(loggedInUser);
  }, [loggedInUser]);

  return (
    <>
      <Card>
        <Card.Body>
          <Tooltip
            title={
              userLoggedInData
                ? userLoggedInData?.displayName
                : userLoggedInData?.email
            }
          >
            <IconButton sx={{ p: 0, margin: 1, marginLeft: 30 }}>
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

          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Grid container>
            <Grid item xs={12}>
              <strong>Email:</strong>
              {userLoggedInData?.email}
              <Grid item xs={12}>
                {" "}
                <strong>Full Name:</strong>
                {userLoggedInData?.displayName}
              </Grid>
            </Grid>
            <Grid item>
              <strong>Account created at :</strong>
              {/* @ts-ignore */}
              {Date(userLoggedInData?.reloadUserInfo?.createdAt)}
            </Grid>

            <Grid item xs={12}>
              <strong>Last Login :</strong>
              {/* @ts-ignore */}
              {Date(userLoggedInData?.reloadUserInfo?.lastLoginAt)}
            </Grid>

            <Grid item xs={12}>
              <strong>Email Verified :</strong>
              {JSON.stringify(userLoggedInData?.reloadUserInfo?.emailVerified)}
            </Grid>
            {JSON.stringify(userLoggedInData?.reloadUserInfo?.photoURL)}
          </Grid>

          <Link
            to="/authenticate/update-profile"
            className="btn btn-primary w-100 mt-3"
          >
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
