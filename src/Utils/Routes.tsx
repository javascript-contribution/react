import logo from '../Assets/logo.svg';
import RsuiteStepper from '../Components/Stepper/Library'
import StepIndex from '../Components/Stepper/Custom';

const routes = [
    {
      path: "/",
      main: () => <img src={logo} className="App-logo" alt="logo" />
    },
    {
      path: "/stepIndex",
      main: () => <StepIndex />
    },
    {
      path: "/rsuite-stepper",
      main: () => <RsuiteStepper />
    }
  ];

  export default routes;