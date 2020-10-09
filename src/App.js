import React, { useEffect, useState } from "react";
import "./App.css";

import Login from "./components/Login/Login";
import Player from "./components/Player/Player";

import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProviderValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists }, dispatch] = useStateProviderValue();

  // run code on a given condition.
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      // getting the user data.
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      // getting user playlists
      // important -------------->>>>>>>> need to make the playlists public from the actual spotify, if they are not already.
      // only then they will be available on this clone.
      spotify.getUserPlaylists().then((playlists) => {
        console.log("baby baby ", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("5E5PzbDTojETa4QMnmmerg").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  console.log("user is ", user);
  console.log("token bro", token);
  console.log("playlists bro", playlists);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
