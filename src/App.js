import "./App.css";
import Login from "./Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue(); // dispatch will be used to update targeted data
  useEffect(() => {
    // code to run on component mount !!
    // get the access token from the url
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      //here is your magic token that will allow our app to communicate with spotify api.
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });

        dispatch({
          type: "SET_TOKEN",
          token: _token,
        });
        //
        console.log(" 👨‍🎨 ", user);
        console.log(" 👽 ", token);
      });
    }
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
