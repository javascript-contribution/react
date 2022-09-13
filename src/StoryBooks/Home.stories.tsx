import React from 'react';
import About from '../Components/Home/About/index';
import Contact from '../Components/Home/Contact';
import Dashboard from '../Components/Home/Dashboard';
import ErrorBoundaryTest from '../Components/Home/ErrorBoundaryTest';
// @ts-ignore
import {withA11y}  from '@storybook/addon-a11y'
import ErrorBoundary from '../Utils/ErrorBoundary/CustomReactErrorBoundary';

// Css
// import '@ds.e/src/Styles/index.css';
// import '@ds.e/src/Styles/App.css';

export const About_Component = () => <About />
export const Dashboard_Component = () => <Dashboard />
export const Contact_Component = () => <Contact />
export const ErrorBoundaryTest_Component = () =>  <ErrorBoundary component={'ErrorBoundaryTest'} size={''}> <ErrorBoundaryTest /></ErrorBoundary> 


export default {
    title: `Component| Home`,
    decorators : [withA11y],
}