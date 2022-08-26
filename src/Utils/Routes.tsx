import RsuiteStepper from '../Components/Stepper/RsuiteStepper'
import StepIndex from '../Components/Stepper/Custom';
import SignInWithFirebase from '../Components/Authentication/SignInWithGoogleFirebase';
import DynamicHome from '../Components/DynamicHome';
import Contact from '../Components/Home/Contact';
import ForgotPassword from '../Components/Authentication/ForgotPassword';
import LogOut from '../Components/Authentication/LogOut';
import Profile from '../Components/Authentication/Profile';
import SignUp from '../Components/Authentication/SignUpWithFirebase';
import UpdateProfile from '../Components/Authentication/UpdateProfile';
import About from '../Components/Home/About';
import Dashboard from '../Components/Home/Dashboard';
import Login from '../Components/Authentication/LogInWithFirebase';

const TREE = [
  { 
    id: 0,
    name: 'Home',
    baseURL : '/',
    component: <DynamicHome />, 
    description: 'John Snow is a legend',
    nestedComponent : [
      { 
        No: 0,
        name: 'dashboard',
        url: '/dashboard',
        description: '',
        imageURL: '',
        component: <Dashboard />
      },
      { 
        No: 1,
        name: 'about',
        url: '/about',
        description: '',
        imageURL: '',
        component: <About />
      },
      { 
        No: 2,
        name: 'Contact Us',
        url: '/contact-us',
        description: '',
        imageURL: '',
        component: <Contact />
      }
    ]
  },
  { 
    id: 1,
    name: 'Authenticate',
    baseURL : '/authenticate/',
    component: <DynamicHome />, 
    description: '',
    nestedComponent : [
      { 
        No: 0,
        name: 'sign-in-with-firebase',
        url: '/authenticate/sign-in-with-firebase',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        No: 1,
        name: 'profile',
        url: '/authenticate/profile',
        description: '',
        imageURL: '',
        component: <Profile />
      },
      { 
        No: 2,
        name: 'Login',
        url: '/authenticate/Login',
        description: '',
        imageURL: '',
        component: <Login />
      },
      { 
        No: 3,
        name: 'LogOut',
        url: '/authenticate/LogOut',
        description: '',
        imageURL: '',
        component: <LogOut />
      },
      { 
        No: 4,
        name: 'SignUp',
        url: '/authenticate/SignUp',
        description: '',
        imageURL: '',
        component: <SignUp />
      },
      { 
        No: 5,
        name: 'UpdateProfile',
        url: '/authenticate/UpdateProfile',
        description: '',
        imageURL: '',
        component: <UpdateProfile />
      },
      { 
        No: 6,
        name: 'ForgotPassword',
        url: '/authenticate/ForgotPassword',
        description: '',
        imageURL: '',
        component: <ForgotPassword />
      },
    ]
  },
  { 
    id: 2,
    name: 'Forms',
    baseURL : '/form/',
    component: <DynamicHome />, 
    description: '',
    nestedComponent : [
      { 
        No: 0,
        name: 'React Hook Form',
        url: '/form/React Hook Form',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'Redux Form',
        url: '/form/Redux Form',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 2,
        name: 'Formik',
        url: '/form/Formik',
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
    component: <DynamicHome />, 
    description: 'We want an abstracted Chat Service with a well defined interface that can be consumed by any chat like experience',
    nestedComponent : [
      { 
        No: 0,
        name: 'Audio Chat',
        url: '/chat-box/Audio Chat',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'Video Chat',
        url: '/chat-box/Video Chat',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 2,
        name: 'Chat Ui with some library',
        url: '/chat-box/Chat Ui with some library',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 3,
        name: 'Custom Chat Ui',
        url: '/chat-box/Custom Chat Ui',
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
    component: <DynamicHome />, 
    description: '',
    nestedComponent : [
      { 
        No: 0,
        name: 'Video Player with some Library',
        url: '/video-box/Video Player with some Library',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'Video Chat',
        url: '/video-box/Video Chat',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 2,
        name: 'Custom Video Player',
        url: '/video-box/Custom Video Player',
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
    component: <DynamicHome />, 
    description: '',
    nestedComponent : [
      { 
        No: 0,
        name: 'Custom Chart',
        url: '/chart/Custom Chart',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'Charts with some library',
        url: '/chart/Charts with some library',
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
    component: <DynamicHome />, 
    description: '',
    nestedComponent : [
      { 
        No: 0,
        name: 'Simple Calculator',
        url: '/calculator/Simple Calculator',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'BMI',
        url: '/calculator/BMI',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 2,
        name: 'Scientific Calculator',
        url: '/calculator/Scientific Calculator',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 3,
        name: 'Chemical Calculator',
        url: '/calculator/Chemical Calculator',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 4,
        name: 'Custom Calculator',
        url: '/calculator/Custom Calculator',
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
    component: <DynamicHome />, 
    description: '',
    nestedComponent : [
      { 
        No: 0,
        name: 'Custom Pagination with some library',
        url: '/pagination/Custom Pagination with some library',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'Pagination with Backend',
        url: '/pagination/Pagination with Backend',
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
    component: <DynamicHome />, 
    description: `React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.

    The state is just a fancy term for a JavaScript data structure. If a user changes state by interacting with your application, the UI may look completely different afterwards, because it's represented by this new state rather than the old state.`,
    nestedComponent : [
      { 
        No: 0,
        name: 'Zustang',
        url: '/manage-state/Zustang',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        No: 1,
        name: 'Jotai',
        url: '/manage-state/Jotai',
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
    component: <DynamicHome />, 
    description: 'Customized and simple "Steppers" display progress through a sequence of logical and numbered steps. They may also be used for navigation. For those who wants to use third party library for stepper, can follow this link :  https://mui.com/material-ui/react-stepper/',
    nestedComponent : [
      { 
        No: 0,
        name: 'Custom Stepper',
        url: '/stepper/Custom Stepper',
        description: '',
        imageURL: '',
        component: <StepIndex />
      },
      { 
        No: 1,
        name: 'Rsuite Stepper',
        url: '/stepper/Rsuite Stepper',
        description: '',
        imageURL: '',
        component: <RsuiteStepper />
      },
    ]
  },
]

export default TREE