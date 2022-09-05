import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TREE from "./Utils/Routes";
import TopNavbar from "./Components/TopNavbar";
import SideBar from "./Components/SideBar";
import BottomBar from "./Components/BottomBar";
import EditSpeedDial from "./Components/EditSpeedDial";
import { Box } from "@mui/material";
import PrivateRoutes from "./Components/Authentication/PrivateRoutes";
import PageNotFound from "./Components/PageNotFound";
import CircularProgress from '@mui/material/CircularProgress';
import "./Styles/App.css";
import ErrorBoundary from "./Utils/ErrorBoundary/CustomReactErrorBoundary";

export default function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", scrollBehavior: "smooth" }}>
        <ErrorBoundary component={'TopNavbar'} size={'TopNavbar'}> <TopNavbar /></ErrorBoundary>
        <ErrorBoundary component={'SideBar'} size={'SideBar'}>  <SideBar /></ErrorBoundary>
        <div className={"components"}>
          <Suspense fallback={<CircularProgress color="inherit" />}>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path={TREE[0].baseURL} element={TREE[0].component}>
                  <Route path={TREE[0].nestedComponent[0].url} element={TREE[0].nestedComponent[0].component} />
                  <Route path={TREE[0].nestedComponent[1].url} element={TREE[0].nestedComponent[1].component} />
                  <Route path={TREE[0].nestedComponent[2].url} element={TREE[0].nestedComponent[2].component} />
                </Route>
                <Route path={TREE[1].baseURL} element={TREE[1].component}>
                  <Route path={TREE[1].nestedComponent[1].url} element={TREE[1].nestedComponent[1].component} />
                  <Route path={TREE[1].nestedComponent[3].url} element={TREE[1].nestedComponent[3].component} />
                  <Route path={TREE[1].nestedComponent[5].url} element={TREE[1].nestedComponent[5].component} />
                </Route>
                <Route path={TREE[2].baseURL} element={TREE[2].component}>
                  <Route path={TREE[2].nestedComponent[0].url} element={TREE[2].nestedComponent[0].component} />
                  <Route path={TREE[2].nestedComponent[1].url} element={TREE[2].nestedComponent[1].component} />
                  <Route path={TREE[2].nestedComponent[2].url} element={TREE[2].nestedComponent[2].component} />
                </Route>
                <Route path={TREE[3].baseURL} element={TREE[3].component}>
                  <Route path={TREE[3].nestedComponent[0].url} element={TREE[3].nestedComponent[0].component} />
                  <Route path={TREE[3].nestedComponent[1].url} element={TREE[3].nestedComponent[1].component} />
                  <Route path={TREE[3].nestedComponent[2].url} element={TREE[3].nestedComponent[2].component} />
                  <Route path={TREE[3].nestedComponent[3].url} element={TREE[3].nestedComponent[3].component} />
                </Route>
                <Route path={TREE[4].baseURL} element={TREE[4].component}>
                  <Route path={TREE[4].nestedComponent[0].url} element={TREE[4].nestedComponent[0].component} />
                  <Route path={TREE[4].nestedComponent[1].url} element={TREE[4].nestedComponent[1].component} />
                  <Route path={TREE[4].nestedComponent[2].url} element={TREE[4].nestedComponent[2].component} />
                </Route>
                <Route path={TREE[5].baseURL} element={TREE[5].component}>
                  <Route path={TREE[5].nestedComponent[0].url} element={TREE[5].nestedComponent[0].component} />
                  <Route path={TREE[5].nestedComponent[1].url} element={TREE[5].nestedComponent[1].component} />
                </Route>
                <Route path={TREE[6].baseURL} element={TREE[6].component}>
                  <Route path={TREE[6].nestedComponent[0].url} element={TREE[6].nestedComponent[0].component} />
                  <Route path={TREE[6].nestedComponent[1].url} element={TREE[6].nestedComponent[1].component} />
                  <Route path={TREE[6].nestedComponent[2].url} element={TREE[6].nestedComponent[2].component} />
                  <Route path={TREE[6].nestedComponent[3].url} element={TREE[6].nestedComponent[3].component} />
                  <Route path={TREE[6].nestedComponent[4].url} element={TREE[6].nestedComponent[4].component} />
                </Route>
                <Route path={TREE[7].baseURL} element={TREE[7].component}>
                  <Route path={TREE[7].nestedComponent[0].url} element={TREE[7].nestedComponent[0].component} />
                  <Route path={TREE[7].nestedComponent[1].url} element={TREE[7].nestedComponent[1].component} />
                </Route>
                <Route path={TREE[8].baseURL} element={TREE[8].component}>
                  <Route path={TREE[8].nestedComponent[0].url} element={TREE[8].nestedComponent[0].component} />
                  <Route path={TREE[8].nestedComponent[1].url} element={TREE[8].nestedComponent[1].component} />
                  <Route path={TREE[8].nestedComponent[2].url} element={TREE[8].nestedComponent[2].component} />
                </Route>
                <Route path={TREE[9].baseURL} element={TREE[9].component}>
                  <Route path={TREE[9].nestedComponent[0].url} element={TREE[9].nestedComponent[0].component} />
                  <Route path={TREE[9].nestedComponent[1].url} element={TREE[9].nestedComponent[1].component} />
                </Route>
              </Route>

              <Route>
                <Route path={TREE[1].nestedComponent[0].url} element={TREE[1].nestedComponent[0].component} />
                <Route path={TREE[1].nestedComponent[2].url} element={TREE[1].nestedComponent[2].component} />
                <Route path={TREE[1].nestedComponent[4].url} element={TREE[1].nestedComponent[4].component} />
                <Route path={TREE[1].nestedComponent[6].url} element={TREE[1].nestedComponent[6].component} />
                <Route path={TREE[0].nestedComponent[3].url} element={TREE[0].nestedComponent[3].component} />
                <Route path={'*'} element={<PageNotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </div>
        <ErrorBoundary component={'EditSpeedDial'} size={''}> <EditSpeedDial /></ErrorBoundary>
        <ErrorBoundary component={'BottomBar'} size={''}> <BottomBar /></ErrorBoundary>
      </Box>
    </Router>
  );
}

