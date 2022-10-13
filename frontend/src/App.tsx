import "./assets/App.css";
import React from 'react';
import PlusSquare from "./assets/svg/plus-square.svg";
import PersonCircle from "./assets/svg/person-circle.svg";
import {Routes, Route} from "react-router-dom";
import Feed from "./pages/Feed/Feed";

function App() {
  return (
      <div className="container">
          <div className="navbar">
              <div className="navbarStart"><h3>RoadMapper</h3></div>
              <div className="navbarCenter">
                  <h3 className="feed">Feed</h3>
                  <h3 className="divider">|</h3>
                  <h3 className="map">Mapa</h3>
              </div>
              <div className="navbarEnd">
                  <h3>Nahlásit</h3>
                  <img src={PlusSquare} alt="plus square icon" />
                  <img src={PersonCircle} alt="person circle icon" />
              </div>
          </div>
          <Routes>
              <Route path="/test" element={<Feed/>} />
          </Routes>
      </div>

  );
}

export default App;
