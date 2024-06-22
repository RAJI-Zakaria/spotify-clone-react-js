import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

const Login = () => {
  return (
    <div className="login">
      <h1> Login Page </h1>
      <img src="/spotify.svg" alt="spotify logo" className="w-[300px]" />
      {/* Spotify Logo */}
      {/* Login with spotify button */}
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
};

export default Login;
