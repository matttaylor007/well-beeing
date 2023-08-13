import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MHLogo } from "../assets/MHLogo.svg";
import "./Home.style.css";
import "../index.css";
import Button from "./Button";

const Home = ({ socket, text: string }) => {
  const navigate = useNavigate();
  const [userName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    //sends the username and socket ID to the Node.js server
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/questionnaire");
  };

  return (
    <div>
      <form className="home__container" onSubmit={handleSubmit}>
        <div className="home__header__container">
          <p className="home__header">Welcome to</p>
          <label className="home__label">WellBeeing</label>
          <MHLogo />
          <p className="prj__name">
            A platform connecting communities for people facing mental health
            challenges
          </p>
        </div>

        <Button text="Get Started" />
      </form>
    </div>
  );
};

export default Home;
