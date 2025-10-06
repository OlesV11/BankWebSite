import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./partials/Header";
import Hero from "./partials/Hero";
import Products from "./partials/Products";
import Cases from "./partials/Cases";
import Features from "./partials/Features";
import Frequently from "./partials/Frequently";
import Testimonials from "./partials/Testimonials";
import Cta from "./partials/Cta";
import Footer from "./partials/Footer";
import CareersPage from "./pages/CareersPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

import React, { useState } from "react";

function MainPage() {
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
      <Hero onOpenLogin={() => setLoginOpen(true)} />
      <Products />
      <Cases />
      <Features />
      <Frequently />
      <Testimonials />
      <Cta />
      <Footer />
      {/* Модальні вікна */}
      {/* Якщо Header не рендерит модалки,  */}
      {/* <SignUpModal
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
      /> */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/BankWebSite">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
