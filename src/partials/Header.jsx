import "../styles/header.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";

export default function Header({
  signupOpen,
  setSignupOpen,
  loginOpen,
  setLoginOpen,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <Link
          to="/"
          className="header__logo"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={closeMenu}
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
        <button
          type="button"
          className="header__menu-toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`header__panel${menuOpen ? " header__panel--open" : ""}`}>
          <nav className="header__nav">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/careers" onClick={closeMenu}>
              Careers
            </Link>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
            <Link to="/security" onClick={closeMenu}>
              Security
            </Link>
          </nav>
          <div className="header__actions">
            <button
              className="header__signup"
              onClick={() => {
                closeMenu();
                setSignupOpen(true);
              }}
            >
              Sign Up
            </button>
            <button
              className="header__login"
              onClick={() => {
                closeMenu();
                setLoginOpen(true);
              }}
            >
              Login
            </button>
          </div>
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
