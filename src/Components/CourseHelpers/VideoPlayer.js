import React from "react";

import Vimeo from "@u-wave/react-vimeo";

// https://www.npmjs.com/package/@u-wave/react-vimeo

export default (props) => {
  const onEnd = () => {
    console.log("ended");
  };

  return <Vimeo video="422209584" onEnd={onEnd} responsive />;
};
