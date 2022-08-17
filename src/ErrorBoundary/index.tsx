import React, { Component, ReactElement, ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface ErrorProps {
  children: ReactNode | ReactNode[] | ReactElement | ReactElement [] ;
  // component: string;
//   size: string;
}

interface ErrorState {
  hasError: boolean;
  error: string | string[] | any;
  errorInfo: string | string[];
  message: string | string[];
}



export default class ErrorBoundary extends Component<
  ErrorProps,
  ErrorState
> {
  constructor(props: ErrorProps) {
    super(props)
    // this.state = { hasError: false }
    this.state = { hasError: false, error: '', errorInfo: '', message: '' };
  }

  // componentDidCatch () {
  //   this.setState({ hasError: true })
  // }
  static getDerivedStateFromError(error: { message: any; status: any; errorInfo: any; }) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error?.message, status: error?.status, error: error, errorInfo : error?.errorInfo};
  }
  //   static getDerivedStateFromError(error: any) {
  //   // Update state so the next render will show the fallback UI.
  //   console.log(` Reached getDerivedStateFromError ${error}`);
  //   return { hasError: true };
  // }

  componentDidCatch(error: { message: any;}) {
    // You can also log the error to an error reporting service   logErrorToMyService(error, errorInfo);
    this.setState({ hasError: true,  message: error?.message, error  });
    console.log(` Reached componentDidCatch  and error.message ${error.message} and error ${error} `) ;
  }

  render () {
    
    if (this.state.hasError) {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, "0");
            const mm = String(today.getMonth() + 1).padStart(2, "0");
            const yyyy = today.getFullYear();
            const todayDate = dd + "/" + mm + "/" + yyyy;
            console.log('ErrorBoundary', this.state);
            // You can render any custom fallback UI
            return (
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Something went wrong
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {this.state.message}
                      Lizards are a widespread group of squamate reptiles, with over
                      6,000 species, ranging across all continents except Antarctica
                      {this.state.errorInfo}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="secondary">
                    {todayDate}
                  </Button>
                </CardActions>
              </Card>
            );
          }
          return this.props.children;
        }
      }

// export default ErrorBoundary




// export default class ErrorBoundary extends Component<
//   ErrorProps,
//   ErrorState
// > {
//   constructor(props: ErrorProps) {
//     super(props);
//     this.state = { hasError: false, error: '', errorInfo: '' };
//   }

 
//   static getDerivedStateFromError(error: any) {
//     // Update state so the next render will show the fallback UI.
//     console.log(` Reached getDerivedStateFromError ${error}`);
//     return { hasError: true };
//   }

//   componentDidCatch(error: any, errorInfo: any) {
//     // You can also log the error to an error reporting service   logErrorToMyService(error, errorInfo);
//     this.setState({ error, errorInfo });
//     console.log(` Reached componentDidCatch ${errorInfo} and error.message ${error.message} and error ${error} `) ;
//   }


//   render() {
//     if (this.state.hasError) {
//       const today = new Date();
//       const dd = String(today.getDate()).padStart(2, "0");
//       const mm = String(today.getMonth() + 1).padStart(2, "0");
//       const yyyy = today.getFullYear();
//       const todayDate = dd + "/" + mm + "/" + yyyy;
//       // You can render any custom fallback UI
//       return (
//         <Card sx={{ maxWidth: 345 }}>
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="140"
//               image="/static/images/cards/contemplative-reptile.jpg"
//               alt="green iguana"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 Something went wrong
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                   {this.state.error}
//                 Lizards are a widespread group of squamate reptiles, with over
//                 6,000 species, ranging across all continents except Antarctica
//                 {/* {this.state.errorInfo} */}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <Button size="small" color="primary">
//               Share
//             </Button>
//             <Button size="small" color="secondary">
//               {todayDate}
//             </Button>
//           </CardActions>
//         </Card>
//       );
//     }
//     return this.props.children;
//   }
// }



// import React, { Component } from 'react'