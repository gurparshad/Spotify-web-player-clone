import React from "react";
import "./Sidebar.css";
import logo from "../../images/logo.png";
import SidebarOptions from "../SidebarOptions/SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStateProviderValue } from "../../StateProvider";

export default function Sidebar() {
  const [{ playlists }, dispatch] = useStateProviderValue(); // distrctured the playlists from state store.
  console.log("inside sidebar");
  console.log("<<>>><<>>", playlists);
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={logo} alt="logo" />
      <SidebarOptions Icon={HomeIcon} title="Home" />
      <SidebarOptions Icon={SearchIcon} title="Search" />
      <SidebarOptions Icon={FavoriteIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}
    </div>
  );
}
