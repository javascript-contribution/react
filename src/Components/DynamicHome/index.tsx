import React from 'react'
import { Outlet, useLocation } from "react-router-dom";
import TREE from '../../Utils/Routes';
import Box from '@mui/material/Box';
import TabPanel, { StyledTab, StyledTabs, a11yProps } from './Fragments';

function DynamicHome () {
  const location = useLocation();
  const dynamic = TREE.filter(path => path.baseURL === location.pathname)[0]
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault()
    setValue(newValue);
  };
  if (dynamic === undefined) {
    const nestedRouteComponent = TREE.filter((ele) => ele.nestedComponent.some((nested: { url: string | string[]; }) => nested.url.includes(location.pathname)))
    // @ts-ignore
    const nest = nestedRouteComponent.map(path => path.nestedComponent)[0].filter((a: { url: string; }) => a.url === location.pathname)
    return <> {nest[0].component}</>;
  }

  return (
    <>
    <Box sx={{ bgcolor: '#2e1534', width: '164%', height: '120%', color: '#fff', padding: 2 }}>
      <h1>{dynamic.name}</h1>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
        {...a11yProps(0)}
      >
        <StyledTab label="Workflows" />
        <StyledTab label="Code Base" />
        <StyledTab label="Snapshots" />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <p>{dynamic.description ? dynamic.description : 'No description'}</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {dynamic.component ? dynamic.jsx : 'No code base provided yet'}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Dynamic snapshots are building up!
      </TabPanel>

      <Outlet />
    </Box>
    </>
  )
}

export default DynamicHome;
