import React from "react";
import "./Body.css";
import { useDataLayerValue } from "../DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue(); // dispatch will be used to update targeted data

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body-info flex-col md:flex-row items-center md:items-end">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body-info-text">
          <strong>PLAYLISTS</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <div className="body-song-row flex-col md:flex-row items-center">
            <img
              className="body-song-row-img"
              src={item.track.album.images[0].url}
              alt=""
            />
            <div className="body-song-row-info">
              <h1 className="font-bold text">{item.track.name}</h1>
              <p>
                {item.track.artists.map((artist) => artist.name).join(", ")} -{" "}
                {item.track.album.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
