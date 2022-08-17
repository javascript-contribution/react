import React from "react";

const ChainedStepperUI = (props: { status: any; setState: any }) => {
  const { status, setState } = props;
  return (
    <>
      <button onClick={() => setState(Number(status) + 1)}>Next</button>
      {" Step "} {status}
      <button onClick={() => setState(Number(status) - 1)}>Previous</button>
    </>
  );
};

export default ChainedStepperUI;
