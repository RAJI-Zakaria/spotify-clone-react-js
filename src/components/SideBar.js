import React from "react";
import "./SideBar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

import { useDataLayerValue } from "../DataLayer";

const SideBar = () => {
  const [{ playlists }] = useDataLayerValue(); // dispatch will be used to update targeted data

  console.log({
    sidebarPlaylists: playlists,
  });
  return (
    <div className="sidebar">
      <img src="/spotify.svg" alt="spotify logo" className="sidebar-logo" />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}
    </div>
  );
};

export default SideBar;
