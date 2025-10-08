import React from "react";
import "../styles/security-hero.css";

export default function SecurityHero() {
  return (
    <section className="security-hero">
      <div className="container">
        <div className="security-bg">
          <div className="security-thumb">
            <h1 className="security-title">
              Your Security is Our
              <div className="security-title-span">Top Priority</div>
            </h1>
            <p className="security-desc">
              At YourBank, we understand the importance of keeping your
              financial information secure. We employ robust security measures
              and advanced technologies to protect your personal and financial
              data. Rest assured that when you bank with us, your security is
              our utmost priority.
            </p>
          </div>
          <div>
            <img
              src="/BankWebSite/assets/security-phone.png"
              alt="Security illustration"
              className="security-hero-img"
              width="715"
              height="568"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
