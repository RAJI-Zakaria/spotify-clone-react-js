import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h1> Login Page </h1>
      <img src="/spotify.svg" alt="spotify logo" className="w-[300px]" />
      {/* Spotify Logo */}
      {/* Login with spotify button */}
      <button>Login With Spotify</button>
    </div>
  );
};

export default Login;
