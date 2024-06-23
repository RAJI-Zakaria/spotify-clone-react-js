import React from "react";
import "./Player.css";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";
const { useDataLayerValue } = require("../DataLayer");

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player-body">
        {/* SideBar */}
        <SideBar />
        {/* Body */}
        <Body spotify={spotify} />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Player;
