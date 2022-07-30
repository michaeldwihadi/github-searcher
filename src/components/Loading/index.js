import React from "react";
import { TailSpin } from "react-loader-spinner";
import "./index.css";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <TailSpin color="black" height={80} width={80} />
    </div>
  );
};

export default Loading;
