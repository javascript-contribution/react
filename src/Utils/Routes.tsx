import logo from '../Assets/logo.svg';
import RsuiteStepper from '../Components/Stepper/Library'
import StepIndex from '../Components/Stepper/Custom';
import SignInWithFirebase from '../Components/SignIn/SignInWithFirebase';







export const TREE = [
  { 
    name: 'Home',
    url: '/',
    nestedComponent : [
      { 
        name: 'about',
        url: '/about',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Contact Us',
        url: '/contact-us',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      }
    ]
  },
  { 
    name: 'Login',
    url: '/sign-in-with-firebase',
    nestedComponent : [
      { 
        name: 'sign-in-with-firebase',
        url: '/sign-in-with-firebase',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Custom Sign In',
        url: '/Custom Sign In',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      }
    ]
  },
  { 
    name: 'Forms',
    url: '/form',
    nestedComponent : [
      { 
        name: 'React Hook Form',
        url: '/React Hook Form',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Redux Form',
        url: '/Redux Form',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Formik',
        url: '/Formik',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      }
    ]
  }, 
  { 
    name: 'Chat Box',
    url: '/form',
    nestedComponent : [
      { 
        name: 'Audio Chat',
        url: '/Audio Chat',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Video Chat',
        url: '/Video Chat',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Chat Ui with some library',
        url: '/Chat Ui with some library',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Custom Chat Ui',
        url: '/Custom Chat Ui',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      }
    ]
  }, 
  { 
    name: 'Video Box',
    url: '/form',
    nestedComponent : [
      { 
        name: 'Video Player with some Library',
        url: '/Video Player with some Library',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Video Chat',
        url: '/Video Chat',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Custom Video Player',
        url: '/Custom Video Player',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
    ]
  },
  { 
    name: 'Chart',
    url: '/form',
    nestedComponent : [
      { 
        name: 'Custom Chart',
        url: '/Custom Chart',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Charts with some library',
        url: '/Charts with some library',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
    ]
  },
  { 
    name: 'Calculator',
    url: '/calculator',
    nestedComponent : [
      { 
        name: 'Simple Calculator',
        url: '/Simple Calculator',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'BMI',
        url: '/BMI',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Scientific Calculator',
        url: '/Scientific Calculator',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Chemical Calculator',
        url: '/Chemical Calculator',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Custom Calculator',
        url: '/Custom Calculator',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
    ]
  },
  { 
    name: 'pagination',
    url: '/pagination',
    nestedComponent : [
      { 
        name: 'Custom Pagination with some library',
        url: '/Custom Pagination with some library',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Pagination with Backend',
        url: '/Pagination with Backend',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
    ]
  },
  { 
    name: 'State Management',
    url: '/stateManage',
    nestedComponent : [
      { 
        name: 'Zustang',
        url: '/Zustang',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Jotai',
        url: '/Jotai',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
    ]
  },
  { 
    name: 'Stepper',
    url: '/stepper',
    nestedComponent : [
      { 
        name: 'Custom Stepper',
        url: '/Custom Stepper',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
      { 
        name: 'Rsuite Stepper',
        url: '/Rsuite Stepper',
        description: '',
        imageURL: '',
        component: <SignInWithFirebase />
      },
    ]
  },
]

TREE.map((route, index) => { 
  const url = route.nestedComponent.map((nestedEle, i) =>  nestedEle.url[index])
  return { url}
})

const routes = [
    
      // TREE.map((element, index) =>  {
      //   return {
      //     path: TREE[index].nestedComponent.map((nestedEle, i) =>  nestedEle.url) ,
      //     main: () => TREE[index].nestedComponent.map((nestedEle, i) =>  nestedEle.component) 

      //   }
          
        
      // })
    
    {
      path: TREE[0].url,
      main: () => <img src={logo} className="App-logo" alt={TREE[0].name} />
    },
    {
      path: TREE[1].url,
      main: () => <SignInWithFirebase />
    },
    {
      path: "/stepIndex",
      main: () => <StepIndex />
    },
    {
      path: "/rsuite-stepper",
      main: () => <RsuiteStepper />
    },
    
  ];

  export default routes;