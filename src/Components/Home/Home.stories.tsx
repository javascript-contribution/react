import React from 'react';
import About from './About/index';
import Contact from './Contact';
import Dashboard from './Dashboard';
import ErrorBoundaryTest from './ErrorBoundaryTest';
import {withA11y}  from '@storybook/addon-a11y'
// Css
// import '@ds.e/src/Styles/index.css';
// import '@ds.e/src/Styles/App.css';

export const About_Component = () => <About />
export const Dashboard_Component = () => <Dashboard />
export const Contact_Component = () => <Contact />
export const ErrorBoundaryTest_Component = () => <ErrorBoundaryTest />
export default {
    title: `Component|Home`,
    decorators : [withA11y],
}