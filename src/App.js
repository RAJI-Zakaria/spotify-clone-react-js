import "./App.css";
import Login from "./Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    // code to run on component mount
    // get the access token from the url
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) setToken(_token);
  }, []);
  return (
    <div className="app">
      {token ? <h1> Welcome to Spotify</h1> : <Login />}
    </div>
  );
}

export default App;
