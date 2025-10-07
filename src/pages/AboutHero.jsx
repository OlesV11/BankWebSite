import React from "react";
import "../styles/about-hero.css";
export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-bg">
          <div className="about-thumb">
            <p className="about-hero-desc">Welcome to YourBank</p>
            <h1 className="about-title">
              Where Banking Meets
              <div className="about-title-span">Excellence!</div>
            </h1>
            <p className="about-desc">
              At YourBank, we believe that banking should be more than just
              transactions. It should be an experience that empowers individuals
              and businesses to thrive and reach their financial goals. As a
              trusted financial institution, we are committed to delivering
              exceptional banking services that go beyond expectations. With a
              focus on innovation, personalized solutions, and unwavering
              integrity, we strive to provide the best banking experience for
              our valued customers. Join us on this exciting journey and
              discover a new level of banking excellence.
            </p>
          </div>
          <div>
            <img
              src="/BankWebSite/assets/about-us.png"
              alt="YourBank team in front of office building"
              className="about-hero-img"
              width="715"
              height="568"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
