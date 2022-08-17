import React from "react";
import { Link } from "react-router-dom";
import LoadingBackdrop from "../Loading";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const home = ["About", "Contact Us"]
const forms = ["React Hook Form", "Redux Form", "Formik"]
const stepper = ["Custom Stepper", "Rsuite Stepper"]
const chat_bot = ["Custom Chat Ui", "Chat Ui with some library" , "Audio Chat", "Video Chat"]
const signIn = ["Custom Sign In", "Sign In With Some Library"]
const video = ["Custom Video Player", "Video Player with some Library"]
const charts = ["Custom Chart", "Charts with some library"]
const calculator = ["Custom Calculator", "BMI", "Simple Calculator", "Scientific Calculator", "Chemical Calculator"]
const stateManage = ["Zustang", "Jotai"]
const pagination = ["Custom Pagination with some library", "Pagination with Backend"]
const SideBar = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div
      style={{
        padding: "100px 20px",
        width: "25%",
        height: "100%",
        background: "#f0f0f0",
      }}
    >
      <Typography variant={'h5'}>Components</Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>
              <Link to="/" className={"link"}>
                Home
              </Link>
            </Typography>
          </AccordionSummary>
          {home.map((element, index) =>  <AccordionDetails>
            <Typography key={element + index}>
              <Link key={index + ":" + element} to={element.replace(/\s/g, '-').toLowerCase()} className={"link"}>
                {element}
              </Link>
            </Typography>
          </AccordionDetails>)}
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ color: "text.secondary" }}>Forms</Typography>
          </AccordionSummary>

          {forms.map((element, index) =>  <AccordionDetails>
            <Typography key={element + index}>
              <Link key={index + ":" + element} to={element.replace(/\s/g, '-').toLowerCase()} className={"link"}>
                {element}
              </Link>
            </Typography>
          </AccordionDetails>)}
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ color: "text.secondary" }}>Stepper</Typography>
          </AccordionSummary>
          {stepper.map((element, index) =>  <AccordionDetails>
            <Typography key={element + index}>
              <Link key={index + ":" + element} to={element.replace(/\s/g, '-').toLowerCase()} className={"link"}>
                {element}
              </Link>
            </Typography>
          </AccordionDetails>)}
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ color: "text.secondary" }}>Chat-Bot</Typography>
          </AccordionSummary>

          {chat_bot.map((element, index) =>  <AccordionDetails>
            <Typography key={element + index}>
              <Link key={index + ":" + element} to={element.replace(/\s/g, '-').toLowerCase()} className={"link"}>
                {element}
              </Link>
            </Typography>
          </AccordionDetails>)}
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography sx={{ color: "text.secondary" }}>Sign-In</Typography>
          </AccordionSummary>
          {signIn.map((element, index) =>  <AccordionDetails>
            <Typography key={element + index}>
              <Link key={index + ":" + element} to={element.replace(/\s/g, '-').toLowerCase()} className={"link"}>
                {element}
              </Link>
            </Typography>
          </AccordionDetails>)}
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography sx={{ color: "text.secondary" }}> Video Player</Typography>
          </AccordionSummary>

          {video.map((element, index) =>  <AccordionDetails>
            <Typography key={element + index}>
              <Link key={index + ":" + element} to={element.replace(/\s/g, '-').toLowerCase()} className={"link"}>
                {element}
              </Link>
            </Typography>
          </AccordionDetails>)}

        </Accordion>

        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography sx={{ color: "text.secondary" }}> React Charts</Typography>
          </AccordionSummary>
        
          {charts.map((element, index) =>  <AccordionDetails>
            <Typography key={element + index}>
              <Link key={index + ":" + element} to={element.replace(/\s/g, '-').toLowerCase()} className={"link"}>
                {element}
              </Link>
            </Typography>
          </AccordionDetails>)}


        </Accordion>


        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Typography sx={{ color: "text.secondary" }}>Calculator</Typography>
          </AccordionSummary>
         
          {calculator.map((element, index) =>  <AccordionDetails>
            <Typography key={element + index}>
              <Link key={index + ":" + element} to={element.replace(/\s/g, '-').toLowerCase()} className={"link"}>
                {element}
              </Link>
            </Typography>
          </AccordionDetails>)}


        </Accordion>

        <Accordion
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9bh-content"
            id="panel9bh-header"
          >
            <Typography sx={{ color: "text.secondary" }}> State Management</Typography>
          </AccordionSummary>
         
          {stateManage.map((element, index) =>  <AccordionDetails>
            <Typography key={element + index}>
              <Link key={index + ":" + element} to={element.replace(/\s/g, '-').toLowerCase()} className={"link"}>
                {element}
              </Link>
            </Typography>
          </AccordionDetails>)}


        </Accordion>

        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10bh-content"
            id="panel10bh-header"
          >
            <Typography sx={{ color: "text.secondary" }}>Pagination</Typography>
          </AccordionSummary>
         
          {pagination.map((element, index) =>  <AccordionDetails>
            <Typography key={element + index}>
              <Link key={index + ":" + element} to={element.replace(/\s/g, '-').toLowerCase()} className={"link"} >
                {element}
              </Link>
            </Typography>
          </AccordionDetails>)}

        </Accordion>

      <LoadingBackdrop />
    </div>
  );
};

export default SideBar;
