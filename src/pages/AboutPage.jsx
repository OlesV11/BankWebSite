import Header from "../partials/Header";
import Frequently from "../partials/Frequently";
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";
import React, { useState } from "react";
import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutPress from "./AboutPress";

export default function AboutPage() {
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <>
      <Header
        signupOpen={signupOpen}
        setSignupOpen={setSignupOpen}
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
      />
      <AboutHero />
      <AboutMission />
      <AboutPress />
      <Footer />
    </>
  );
}
