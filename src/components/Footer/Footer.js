import React, { useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Slider } from "@material-ui/core";
import { useStateProviderValue } from "../../StateProvider";
import songThumbnail from "../../images/ghosts.jpg";

export default function Footer({ spotify }) {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src={songThumbnail}
          alt="thumbnail"
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>Ghosts</h4>
          <p>Sdader</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__icon" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__icon" />
      </div>

      <div className="footer__right">
        <PlaylistPlayIcon />
        <VolumeDownIcon />
        <Slider defaultValue={70} />
      </div>
    </div>
  );
}
