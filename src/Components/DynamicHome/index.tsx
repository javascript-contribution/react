import React from 'react'
import {  Outlet, useLocation } from "react-router-dom";
import TREE from '../../Utils/Routes';

const DynamicHome = () => {
  const location = useLocation();

  const dynamic = TREE.filter(path => path.baseURL === location.pathname)[0]
  console.log('pathname', location.pathname, 'is dynamic ?', dynamic);
  
  return (
    <div>
      <h1>{dynamic.name}</h1>
      <p>{dynamic.description}</p>
      Home
        <Outlet />
    </div>
  )
}

export default DynamicHome