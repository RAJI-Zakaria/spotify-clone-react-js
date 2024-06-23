import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AvatarIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "../DataLayer";
const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header flex-col md:flex-row ">
      <div className="header-left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts"
          type="text"
        />
      </div>
      <div className="header-right">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/21/21155.svg"
          alt=""
        />
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
