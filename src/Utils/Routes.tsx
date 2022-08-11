import logo from '../Assets/logo.svg';
import RsuiteStepper from '../Components/Stepper/Library'
import StepIndex from '../Components/Stepper/Custom';
import Redux_Toolkit_Form from '../Components/Forms/Redux_Toolkit_Form';

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
    },
    {
      path: "/redux-form",
      main: () => <Redux_Toolkit_Form />
    }
  ];

  export default routes;