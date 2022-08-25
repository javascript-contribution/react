import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TREE  from "./Utils/Routes";
import AppBar from "./Components/AppBar";
import SideBar from "./Components/SideBar";
import BottomBar from "./Components/BottomBar";
import EditSpeedDial from "./Components/EditSpeedDial";
import "./Styles/App.css";
import { Box } from "@mui/material";
// import { AuthProvider } from "./Utils/Contexts/AuthProvider";

export default function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", scrollBehavior: "smooth" }}>
        <AppBar />
        <SideBar />
        <div className={"components"}>
        {/* <AuthProvider> */}
          <Routes>
            <Route path={TREE[0].baseURL} element={TREE[0].component}>
              <Route path={TREE[0].nestedComponent[0].url} element={TREE[0].nestedComponent[0].component} />
              <Route path={TREE[0].nestedComponent[1].url} element={TREE[0].nestedComponent[1].component} />
              <Route path={TREE[0].nestedComponent[2].url} element={TREE[0].nestedComponent[2].component} />
            </Route>
            <Route path={TREE[1].baseURL} element={TREE[1].component}>
              <Route path={TREE[1].nestedComponent[0].url} element={TREE[1].nestedComponent[0].component} />
              <Route path={TREE[1].nestedComponent[1].url} element={TREE[1].nestedComponent[1].component} />
              <Route path={TREE[1].nestedComponent[2].url} element={TREE[1].nestedComponent[2].component} />
              <Route path={TREE[1].nestedComponent[3].url} element={TREE[1].nestedComponent[3].component} />
              <Route path={TREE[1].nestedComponent[4].url} element={TREE[1].nestedComponent[4].component} />
              <Route path={TREE[1].nestedComponent[5].url} element={TREE[1].nestedComponent[5].component} />
              <Route path={TREE[1].nestedComponent[6].url} element={TREE[1].nestedComponent[6].component} />
              <Route path={TREE[1].nestedComponent[7].url} element={TREE[1].nestedComponent[7].component} />
            </Route>
            <Route path={TREE[9].baseURL} element={TREE[9].component}>
              <Route path={TREE[9].nestedComponent[0].url} element={TREE[9].nestedComponent[0].component} />
              <Route path={TREE[9].nestedComponent[1].url} element={TREE[9].nestedComponent[1].component} />
            </Route>
          </Routes>
          {/* </AuthProvider> */}
        </div>
        <EditSpeedDial />
        <BottomBar />
      </Box>
    </Router>
  );
}

// {TREE.map((element, index) => {
//   <Route key={index} path={element.baseURL} >
//     {element.nestedComponent.map((nested, i) => {
//       <Route key={i} path={nested.url} element={nested.component} />
//     })}
// </Route>
// })}
