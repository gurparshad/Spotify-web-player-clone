import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useStateProviderValue } from "../../StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "../SongRow/SongRow";

export default function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateProviderValue();
  console.log("playlist dicover ", discover_weekly);

  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img
          className="body__playlistImage"
          src={discover_weekly?.images[0].url}
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.owner?.display_name}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* list of songs */}
        {discover_weekly?.tracks.items.map((item) => {
          return <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
}
