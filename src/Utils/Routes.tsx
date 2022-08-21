import RsuiteStepper from '../Components/Stepper/RsuiteStepper'
import StepIndex from '../Components/Stepper/Custom';
import SignInWithFirebase from '../Components/Authentication/SignInWithFirebase';
import Home from '../Components/Home';
import Contact from '../Components/Home/Contact';
import ForgotPassword from '../Components/Authentication/ForgotPassword';
import LogOut from '../Components/Authentication/LogOut';
import Profile from '../Components/Authentication/Profile';
import SignUp from '../Components/Authentication/SignUp';
import UpdateProfile from '../Components/Authentication/UpdateProfile';
import About from '../Components/Home/About';
import Authenticate from '../Components/Authentication';
import Calculator from '../Components/Calculator';
import Chart from '../Components/Chart';
import ChatBox from '../Components/ChatBox';
import Forms from '../Components/Forms';
import StateManagement from '../Components/StateManagement';
import VideoBox from '../Components/VideoBox';
import Dashboard from '../Components/Home/Dashboard';
import Login from '../Components/Authentication/LogIn';
import Pagination from '../Components/Pagination';
import Stepper from '../Components/Stepper';







const TREE = [
  { 
    id: 0,
    name: 'Home',
    baseURL : '/',
    component: <Home />, 
    description: '',
    nestedComponent : [
      { 
        name: 'dashboard',
        url: '/dashboard',
        description: '',
        imageURL: '',
        component: <Dashboard />
      },
      { 
        name: 'about',
        url: '/about',
        description: '',
        imageURL: '',
        component: <About />
      },
      { 
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
    baseURL : '/authenticate',
    component: <Authenticate />, 
    description: '',
    nestedComponent : [
      { 
        name: 'sign-in-with-firebase',
        url: '/authenticate/sign-in-with-firebase',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'profile',
        url: '/authenticate/profile',
        description: '',
        imageURL: '',
        component: <Profile />
      },
      { 
        name: 'Login',
        url: '/authenticate/Login',
        description: '',
        imageURL: '',
        component: <Login />
      },
      { 
        name: 'LogOut',
        url: '/authenticate/LogOut',
        description: '',
        imageURL: '',
        component: <LogOut />
      },
      { 
        name: 'SignUp',
        url: '/authenticate/SignUp',
        description: '',
        imageURL: '',
        component: <SignUp />
      },
      { 
        name: 'UpdateProfile',
        url: '/authenticate/UpdateProfile',
        description: '',
        imageURL: '',
        component: <UpdateProfile />
      },
      { 
        name: 'ForgotPassword',
        url: '/authenticate/ForgotPassword',
        description: '',
        imageURL: '',
        component: <ForgotPassword />
      },
      { 
        name: 'Login',
        url: '/authenticate/Login',
        description: '',
        imageURL: '',
        component: <Login />
      },
    ]
  },
  { 
    id: 2,
    name: 'Forms',
    baseURL : '/form',
    component: <Forms />, 
    description: '',
    nestedComponent : [
      { 
        name: 'React Hook Form',
        url: '/form/React Hook Form',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        name: 'Redux Form',
        url: '/form/Redux Form',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
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
    baseURL : '/chat-box',
    component: <ChatBox />, 
    description: '',
    nestedComponent : [
      { 
        name: 'Audio Chat',
        url: '/chat-box/Audio Chat',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        name: 'Video Chat',
        url: '/chat-box/Video Chat',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        name: 'Chat Ui with some library',
        url: '/chat-box/Chat Ui with some library',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
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
    baseURL : '/video-box',
    component: <VideoBox />, 
    description: '',
    nestedComponent : [
      { 
        name: 'Video Player with some Library',
        url: '/video-box/Video Player with some Library',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        name: 'Video Chat',
        url: '/video-box/Video Chat',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
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
    baseURL : '/chart',
    component: <Chart />, 
    description: '',
    nestedComponent : [
      { 
        name: 'Custom Chart',
        url: '/chart/Custom Chart',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
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
    baseURL : '/calculator',
    component: <Calculator />, 
    description: '',
    nestedComponent : [
      { 
        name: 'Simple Calculator',
        url: '/calculator/Simple Calculator',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        name: 'BMI',
        url: '/calculator/BMI',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        name: 'Scientific Calculator',
        url: '/calculator/Scientific Calculator',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
        name: 'Chemical Calculator',
        url: '/calculator/Chemical Calculator',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
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
    baseURL : '/pagination',
    component: <Pagination />, 
    description: '',
    nestedComponent : [
      { 
        name: 'Custom Pagination with some library',
        url: '/pagination/Custom Pagination with some library',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
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
    baseURL : '/manage-state',
    component: <StateManagement />, 
    description: '',
    nestedComponent : [
      { 
        name: 'Zustang',
        url: '/manage-state/Zustang',
        description: '',
        imageURL: '',
        component: ''
      },
      { 
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
    baseURL : '/stepper',
    component: <Stepper />, 
    description: '',
    nestedComponent : [
      { 
        name: 'Custom Stepper',
        url: '/stepper/Custom Stepper',
        description: '',
        imageURL: '',
        component: <StepIndex />
      },
      { 
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