import React from "react";
import "./Login.css";
import logo from "../../images/logo.png";
import { loginUrl } from "../../spotify";

export default function Login() {
  return (
    <div className="login">
      <img className="logoImg" src={logo} alt="askdln" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
