
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client";
import Questionnaire from "./components/Questionnaire";
import Links from "./components/LinksPage";
import ResourcesBtn from "./components/ResourcesBtn";

const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/questionnaire" element={<Questionnaire />}></Route>
          <Route path="/links" element={<Links />}></Route>
          <Route path="/resources" element={<ResourcesBtn />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

