import Header from "../partials/Header";
import CareersHero from "./CareersHero";
import CareersValues from "./CareersValues";
import CareersBenefits from "./CareersBenefits";
import CareersJobCard from "./CareersJobCard";
import CareersJob from "./CareersJob";
import Frequently from "../partials/Frequently";
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";

import React, { useState } from "react";

export default function CareersPage() {
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
      <CareersHero />
      <CareersValues />
      <CareersBenefits />
      <CareersJob />
      <div className="careers-job-cards-row">
        <CareersJobCard />
        <CareersJobCard />
      </div>
      <div className="careers-job-card-bottom">
        <CareersJobCard />
      </div>
      <Frequently />
      <Cta />
      <Footer />
    </>
  );
}
