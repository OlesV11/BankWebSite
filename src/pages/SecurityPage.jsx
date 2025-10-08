import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Frequently from "../partials/Frequently";
import SecurityHero from "./SecurityHero";
import SecurityProtect from "./SecurityProtect";
import React, { useState } from "react";

export default function SecurityPage() {
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
      <SecurityHero />
      <SecurityProtect />
      <Frequently />
      <Footer />
    </>
  );
}
