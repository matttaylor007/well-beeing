import React from "react";
import "./ResourcesBtn.css";
import { Link } from "react-router-dom";

const ResourcesBtn = () => {
  return (
    <div className="resources-container">
      <h1>Our resources</h1>
      <div className="box-bttn">
        <Link to="/chat">
          <button className="btn-resource">Chat with a Volunteer</button>
        </Link>
        <Link to="/">
          <button className="btn-resource">Breathing Techniques</button>
        </Link>
        <Link to="/">
          <button type="button" className="btn-resource">
            Stretches exercises
          </button>
        </Link>
        <Link to="/links">
          <button type="button" className="btn-resource">
            Links that can interest you
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResourcesBtn;
