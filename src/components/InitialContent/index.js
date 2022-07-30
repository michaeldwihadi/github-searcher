import React from "react";
import "./index.css";
import octocatLogo from "../../image/Octocat.jpg";

const InitialContent = ({ error }) => {
  return (
    <div className="initial-container">
      <img className="octocatLogo" src={octocatLogo} alt="github_logo" />
      <h1>{error ? "No result found" : "No result yet"} </h1>
      <p className="initial-content">
        Please {error ? "re-type" : "type"} on the search input
      </p>
    </div>
  );
};

export default InitialContent;
