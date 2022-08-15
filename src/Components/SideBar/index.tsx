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
import { TREE } from "../../Utils/Routes";

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
      <Typography variant={"h5"}>Components</Typography>

      {TREE.map((element, index) => (
        <Accordion
          expanded={expanded === element.name + index}
          onChange={handleChange(element.name + index)}
          key={element.name + index}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>
              <Link to="/" className={"link"}>
                {element.name}
              </Link>
            </Typography>
          </AccordionSummary>
          {element.nestedComponent.map((nestedElement, index) => (
            <AccordionDetails>
              <Typography key={nestedElement.name + index}>
                <Link
                  key={index + ":" + nestedElement.name}
                  to={nestedElement.name.replace(/\s/g, "-").toLowerCase()}
                  className={"link"}
                >
                  {nestedElement.name}
                </Link>
              </Typography>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}

      <LoadingBackdrop />
    </div>
  );
};

export default SideBar;
