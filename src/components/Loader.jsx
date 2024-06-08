import React from "react";
import { dotSpinner } from "ldrs";

const Loader = () => {
  dotSpinner.register();
  return (
    <div className="container-loader">
      <l-dot-spinner size="40" speed="0.9" color="black"></l-dot-spinner>
    </div>
  );
};

export default Loader;
