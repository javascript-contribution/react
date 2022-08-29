import React from "react";
import StepUI from "./Fragments/ChainedStepper";

const StepIndex = () => {
  const [state, setState] = React.useState(1);

  switch (state) {
    case 1:
      return <StepUI status="1" setState={setState} />;
    case 2:
      return <StepUI status="2" setState={setState} />;
    case 3:
      return <StepUI status="3" setState={setState} />;
    case 4:
      return <StepUI status="4" setState={setState} />;
    default:
      setState(1);
      return <StepUI status="1" setState={setState} />;
  }
};

export default StepIndex;
