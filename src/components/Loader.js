import spinner from "./loading-buffering.gif";

import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default Loader;
