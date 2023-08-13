import React from "react";
import "./ResourcesBtn.css";
import "./Button.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const ResourcesBtn = ({ text: string }) => {
  return (
    <div className="resources-container">
      <h1 className="title-question">Our resources</h1>
      <div className="box-bttn">
        <Link to="/chat">
          <Button text="Chat with a Volunteer" />
        </Link>
        <Link to="/">
          <Button text="Breathing Techniques" />
        </Link>
        <Link to="/">
          <Button text="Stretches exercises" />
        </Link>
        <Link to="/links">
          <Button text="Interest Links" />
        </Link>
      </div>
    </div>
  );
};

export default ResourcesBtn;
