import "../styles/header.css";
import { Link } from "react-router-dom";
import React from "react";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";

export default function Header({
  signupOpen,
  setSignupOpen,
  loginOpen,
  setLoginOpen,
}) {
  return (
    <>
      <header className="header">
        <Link
          to="/"
          className="header__logo"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="36" rx="12" fill="#C4FF4A" />
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              fill="#181c23"
              fontSize="16"
              fontWeight="bold"
              dy=".3em"
            >
              YB
            </text>
          </svg>
          <span className="header__brand">YourBanK</span>
        </Link>
        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/about">About</Link>
          <Link to="/security">Security</Link>
        </nav>
        <div className="header__actions">
          <button
            className="header__signup"
            onClick={() => setSignupOpen(true)}
          >
            Sign Up
          </button>
          <button className="header__login" onClick={() => setLoginOpen(true)}>
            Login
          </button>
        </div>
      </header>
      <SignUpModal
        open={signupOpen}
        onClose={() => setSignupOpen(false)}
        onLogin={() => {
          setSignupOpen(false);
          setLoginOpen(true);
        }}
      />
      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSignUp={() => {
          setLoginOpen(false);
          setSignupOpen(true);
        }}
      />
    </>
  );
}
