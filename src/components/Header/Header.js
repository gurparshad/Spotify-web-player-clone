import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateProviderValue } from "../../StateProvider";

export default function Header() {
  const [{ user }] = useStateProviderValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs, or Albums" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="G" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
