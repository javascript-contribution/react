import { lazy } from "react";
import ErrorBoundary from "../ErrorBoundary/Custom";
const RsuiteStepper = lazy( () => import('../../Components/Stepper/RsuiteStepper'));
const StepIndex = lazy( () => import('../../Components/Stepper/Custom'));
const SignInWithFirebase = lazy( () => import('../../Components/Authentication/SignInWithGoogleFirebase'));
const DynamicHome = lazy( () => import('../../Components/DynamicHome'));
const Contact = lazy( () => import('../../Components/Home/Contact'));
const ForgotPassword = lazy( () => import('../../Components/Authentication/ForgotPassword'));
const LogOut = lazy( () => import('../../Components/Authentication/LogOut'));
const Profile = lazy( () => import('../../Components/Authentication/Profile'));
const SignUp = lazy( () => import('../../Components/Authentication/SignUpWithFirebase'));
const UpdateProfile = lazy( () => import('../../Components/Authentication/UpdateProfile'));
const About = lazy( () => import('../../Components/Home/About'));
const Dashboard = lazy( () => import('../../Components/Home/Dashboard'));
const Login = lazy( () => import('../../Components/Authentication/LogInWithFirebase'));
// import ReactDOMServer from 'react-dom/server';
// const element = <Login />

const TREE = [
  { 
    id: 0,
    name: 'Home',
    baseURL : '/',
    component:  <DynamicHome />, 
    jsx: JSON.stringify(<DynamicHome />) ,
    // jsx: ReactDOMServer.renderToStaticMarkup(element),
    description: 'John Snow is a legend',
    nestedComponent : [
      { 
        No: 0,
        name: 'Dashboard',
        url: '/dashboard',
        description: '',
        imageURL: '',
        component:  <ErrorBoundary component={'Dashboard'}> <Dashboard /></ErrorBoundary>
      },
      { 
        No: 1,
        name: 'About',
        url: '/about',
        description: '',
        imageURL: '',
        component:  <About /> 
      },
      { 
        No: 2,
        name: 'Contact Us',
        url: '/contact-us',
        description: '',
        imageURL: '',
        component:  <Contact />
      }
    ]
  },
  { 
    id: 1,
    name: 'Authenticate',
    baseURL : '/authenticate/',
    component:  <DynamicHome />, 
    description: '',
    nestedComponent : [
      { 
        No: 0,
        name: 'Sign-in-with-firebase',
        url: '/authenticate/sign-in-with-firebase',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase /> 
      },
      { 
        No: 1,
        name: 'Profile',
        url: '/authenticate/profile',
        description: '',
        imageURL: '',
        component:  <Profile /> 
      },
      { 
        No: 2,
        name: 'Login',
        url: '/authenticate/login',
        description: '',
        imageURL: '',
        component:  <Login />
      },
      { 
        No: 3,
        name: 'Log Out',
        url: '/authenticate/log-out',
        description: '',
        imageURL: '',
        component:  <LogOut />
      },
      { 
        No: 4,
        name: 'Sign Up',
        url: '/authenticate/sign-up',
        description: '',
        imageURL: '',
        component: <SignUp /> 
      },
      { 
        No: 5,
        name: 'Update Profile',
        url: '/authenticate/update-profile',
        description: '',
        imageURL: '',
        component:  <UpdateProfile />
      },
      { 
        No: 6,
        name: 'Forgot Password',
        url: '/authenticate/forgot-password',
        description: '',
        imageURL: '',
        component:  <ForgotPassword />
      },
    ]
  },
  { 
    id: 2,
    name: 'Forms',
    baseURL : '/form/',
    component:  <DynamicHome /> , 
    description: '',
    nestedComponent : [
      { 
        No: 0,
        name: 'React Hook Form',
        url: '/form/react-hook-form',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'Redux Form',
        url: '/form/redux-form',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 2,
        name: 'Formik',
        url: '/form/formik',
        description: '',
        imageURL: '',
        component: ''
      }
    ]
  }, 
  { 
    id: 3,
    name: 'Chat Box',
    baseURL : '/chat-box/',
    component:  <DynamicHome />, 
    description: 'We want an abstracted Chat Service with a well defined interface that can be consumed by any chat like experience',
    nestedComponent : [
      { 
        No: 0,
        name: 'Audio Chat',
        url: '/chat-box/audio-chat',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'Video Chat',
        url: '/chat-box/video-chat',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 2,
        name: 'Chat Ui with some library',
        url: '/chat-box/chat-ui-with-some-library',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 3,
        name: 'Custom Chat Ui',
        url: '/chat-box/custom-chat-ui',
        description: '',
        imageURL: '',
        component: ''
      }
    ]
  }, 
  { 
    id: 4,
    name: 'Video Box',
    baseURL : '/video-box/',
    component:  <DynamicHome />, 
    description: '',
    nestedComponent : [
      { 
        No: 0,
        name: 'Video Player with some Library',
        url: '/video-box/video-player-with-some-library',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'Video Chat',
        url: '/video-box/video-chat',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 2,
        name: 'Custom Video Player',
        url: '/video-box/custom-video-player',
        description: '',
        imageURL: '',
        component: ''
      },
    ]
  },
  { 
    id: 5,
    name: 'Chart',
    baseURL : '/chart/',
    component:  <DynamicHome />, 
    description: '',
    nestedComponent : [
      { 
        No: 0,
        name: 'Custom Chart',
        url: '/chart/custom-chart',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'Charts with some library',
        url: '/chart/charts-with-some-library',
        description: '',
        imageURL: '',
        component: ''
      },
    ]
  },
  { 
    id: 6,
    name: 'Calculator',
    baseURL : '/calculator/',
    component:  <DynamicHome />, 
    description: '',
    nestedComponent : [
      { 
        No: 0,
        name: 'Simple Calculator',
        url: '/calculator/simple-calculator',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'BMI',
        url: '/calculator/bmi',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 2,
        name: 'Scientific Calculator',
        url: '/calculator/scientific-calculator',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 3,
        name: 'Chemical Calculator',
        url: '/calculator/chemical-calculator',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 4,
        name: 'Custom Calculator',
        url: '/calculator/custom-calculator',
        description: '',
        imageURL: '',
        component: ''
      },
    ]
  },
  { 
    id: 7,
    name: 'pagination',
    baseURL : '/pagination/',
    component:  <DynamicHome />, 
    description: '',
    nestedComponent : [
      { 
        No: 0,
        name: 'Custom Pagination with some library',
        url: '/pagination/custom-pagination-with-some-library',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'Pagination with Backend',
        url: '/pagination/pagination-with-backend',
        description: '',
        imageURL: '',
        component: ''
      },
    ]
  },
  { 
    id: 8,
    name: 'State Management',
    baseURL : '/manage-state/',
    component:  <DynamicHome />,
    description: `React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.

    The state is just a fancy term for a JavaScript data structure. If a user changes state by interacting with your application, the UI may look completely different afterwards, because it's represented by this new state rather than the old state.`,
    nestedComponent : [
      { 
        No: 0,
        name: 'Zustang',
        url: '/manage-state/zustang',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'Jotai',
        url: '/manage-state/jotai',
        description: '',
        imageURL: '',
        component: ''
      },
    ]
  },
  { 
    id: 9,
    name: 'Stepper',
    baseURL : '/stepper/',
    component:  <DynamicHome />,
    description: 'Customized and simple "Steppers" display progress through a sequence of logical and numbered steps. They may also be used for navigation. For those who wants to use third party library for stepper, can follow this link :  https://mui.com/material-ui/react-stepper/',
    nestedComponent : [
      { 
        No: 0,
        name: 'Custom Stepper',
        url: '/stepper/custom-stepper',
        description: '',
        imageURL: '',
        component:  <StepIndex />,
      },
      { 
        No: 1,
        name: 'Rsuite Stepper',
        url: '/stepper/rsuite-stepper',
        description: '',
        imageURL: '',
        component:  <RsuiteStepper />,
      },
    ]
  },
]

export default TREE