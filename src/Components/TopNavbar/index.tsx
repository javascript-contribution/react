import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RightDrawer from "./Fragments/RightDrawer";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router";
import ErrorBoundary from "../../Utils/ErrorBoundary/Custom";
import { useAuth } from "../../Utils/Auth";
import { signOutUser } from "../../Utils/Firebase";
import { UserInfo } from "firebase/auth";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./Fragments/StyledWrapper";
const pages = ["Dashboard", "Micro-Services", "About"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const TopAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [userLoggedInData, setUserLoggedInData] = React.useState<null | any | UserInfo>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate = useNavigate();
  const handleNavMenuClick = (url: string) => {
    navigate(url.toLowerCase());
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseUserMenuItem = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if(event.currentTarget.innerText.toLowerCase() === 'logout') {
      signOutUser();
      navigate('/authenticate/sign-in-with-firebase');
    } else if(event.currentTarget.innerText.toLowerCase() === 'account'){
      navigate("/authenticate/" + event.currentTarget.innerText.toLowerCase())
    } else if(event.currentTarget.innerText.toLowerCase() === 'profile'){
      navigate('/authenticate/' + event.currentTarget.innerText.toLowerCase())
    } else if(event.currentTarget.innerText.toLowerCase() === 'dashboard'){
      navigate('/' + event.currentTarget.innerText.toLowerCase())
    }
    setAnchorElUser(null);
  }

  const loggedInUser = useAuth() as unknown as UserInfo;
    React.useEffect(() => {
      setUserLoggedInData(loggedInUser)
  }, [loggedInUser])
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          
          {/* @ts-ignore */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={()=> navigate('/')}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            REACT.JS 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavMenuClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            REACT.JS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavMenuClick(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
         
          <Tooltip
            title={
              userLoggedInData ? userLoggedInData?.displayName || userLoggedInData?.email: "Sign In or Sign Up"
            }
          >
            <IconButton sx={{ p: 0 }} onClick={() => navigate('/authenticate/profile')}>
              <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
                {loggedInUser ? (
                  <Avatar
                    alt={userLoggedInData?.displayName || userLoggedInData?.email}
                    src={userLoggedInData?.photoURL}
                  />
                ) : (
                  <LockOutlinedIcon />
                )}
              </Avatar>
            </IconButton>
          </Tooltip>

          <Box sx={{ flexGrow: 0.1 }}>
            <Tooltip title={"Menu Bar"}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1, margin: 1, color: 'white' }}>
                <DashboardCustomizeRoundedIcon />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenuItem}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box>
            <RightDrawer />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopAppBar;
