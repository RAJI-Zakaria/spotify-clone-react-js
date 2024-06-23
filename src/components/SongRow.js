import React from "react";
import "./SongRow.css";
const SongRow = ({ track }) => {
  return (
    <div className="song-row">
      <img className="song-row-album" alt="" src={track.album.images[0].url} />
      <div className="song-row-info">
        <h1>Test</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
