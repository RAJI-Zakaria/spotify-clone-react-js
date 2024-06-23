import React from "react";
import "./Footer.css";

import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

import { Grid, Slider } from "@mui/material";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src="/lunatic.jpeg" alt="" className="footer-album-logo" />
        <div className="footer-song-info">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer-center">
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon className="footer-icon" />
        <PlayCircleFilledIcon fontSize="large" className="footer-icon" />
        <SkipNextIcon fontSize="large" className="footer-icon" />
        <RepeatIcon className="footer-green" />
      </div>
      <div className="footer-right">
        <Grid container gap={1} alignContent="center" alignItems="center">
          <Grid padding={0} margin={0} item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid padding={0} margin={0} item>
            <VolumeDownIcon />
          </Grid>
          <Grid
            padding={0}
            margin={0}
            item
            className="md:w-[calc(100%-120px)] w-full md:!mt-[10px]"
          >
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
