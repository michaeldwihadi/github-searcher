import React from "react";
import githubLogo from "../../image/GitHub-Logo.png";
import "./index.css";

const Navbar = () => {
  return (
    <>
      <div>
        <img className="logo" src={githubLogo} alt="github_logo" />
        <div className="header-container">
          <h1 className="header-title">Github Searcher</h1>
          <p className="header-desc">Search Users or repositories below</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
