import React from "react";
const { useDataLayerValue } = require("./DataLayer");
const Player = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    user && (
      <div>
        Player
        {user.display_name}
      </div>
    )
  );
};

export default Player;
