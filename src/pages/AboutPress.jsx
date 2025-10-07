import React from "react";
import "../styles/about-press.css";

const pressReleases = [
  {
    img: "/BankWebSite/assets/press-people.png",
    alt: "Press Release 1",
    title:
      "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
    location: "India",
    date: "06/11/2024",
    desc: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",
  },
  {
    img: "/BankWebSite/assets/press-buildings.png",
    alt: "Press Release 2",
    title:
      "YourBank Expands Branch Network with Opening of New Location in Chennai",
    location: "Germany",
    date: "12/01/2024",
    desc: "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.",
  },
  {
    img: "/BankWebSite/assets/press-write.png",
    alt: "Press Release 3",
    title:
      "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
    location: "USA",
    date: "03/15/2025",
    desc: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
  },
  {
    img: "/BankWebSite/assets/press-laptop.png",
    alt: "Press Release 4",
    title:
      "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
    location: "UK",
    date: "09/22/2025",
    desc: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
  },
];

export default function AboutPress() {
  return (
    <section className="about-press">
      <div className="container">
        <div className="about-press-thumb">
          <h2 className="about-press-title">Press Releases</h2>
          <p className="about-press-title-desc">
            Stay updated with the latest happenings and exciting developments at
            YourBank through our press releases.
          </p>
          <div className="about-press-content">
            {pressReleases.map((item, idx) => (
              <div className="about-press-item" key={idx}>
                <img
                  src={item.img}
                  alt={item.alt}
                  className="about-press-img"
                  width="582"
                  height="277"
                />
                <h3 className="about-press-subtitle">{item.title}</h3>
                <div className="about-press-container-data">
                  <p className="about-press-location">
                    Location: {item.location}
                  </p>
                  <p className="about-press-date">Date: {item.date}</p>
                </div>
                <p className="about-press-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
