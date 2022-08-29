import React, { Component, ReactElement, ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

interface ErrorProps {
  children: ReactNode | ReactNode[] | ReactElement | ReactElement[];
  component: string;
  size: string | undefined;
}

interface ErrorState {
  hasError: boolean;
  errorInfo: string;
}

export default class ErrorBoundary extends Component<
  ErrorProps,
  ErrorState
> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false, errorInfo: '' };
  }


  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    console.log(` Reached getDerivedStateFromError ${error}`);
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ errorInfo });
    console.log(` Reached componentDidCatch ${errorInfo} and error.message ${error.message} and error ${error} `);
  }


  render() {
    if (this.state.hasError) {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();
      const todayDate = dd + "/" + mm + "/" + yyyy;
      // You can render any custom fallback UI
      const size = () => {
        if (this.props.size === 'component') {
          return { minWidth: 745, maxWidth: 845, maxHeight: 1545 }
        } else if (this.props.size === ('SideBar' || undefined)) {
          return { maxWidth: 400, minHeight: 1000, marginTop: 10 }
        } else if (this.props.size === ('TopNavbar' || undefined)) {
          return { minWidth: window.innerWidth, maxHeight: 100, display: 'flex' }
        }
      }
      return (
        <>
          <Card sx={size()}>
            <CardActionArea>
              {!(this.props.size === 'TopNavbar') ? <CardMedia
                component="img"
                height="160"
                image={'https://blog.manawa.com/wp-content/uploads/2018/06/surfing-wipeout-1600x980.jpg'}
                alt="Surf dive into your code"
              /> : null}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Something went wrong at {`<${this.props.component} />`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {JSON.stringify(this.state.errorInfo)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="mailto:clinto.abraham@srijan.net">
                Share
              </Button>
              <Button size="small" color="secondary">
                {todayDate}
              </Button>
            </CardActions>
          </Card>
        </>
      );
    }
    return this.props.children;
  }
}
