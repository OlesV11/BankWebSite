import "../styles/careers-hero.css";
export default function CareersHero() {
  return (
    <section className="careers__hero__section">
      <div className="container">
        <div className="careers__hero__flex">
          <div className="careers__hero__contain">
            <h1 className="careers__title">
              Welcome to <span className="careers__title__span">YourBank</span>{" "}
              Careers!
            </h1>
            <p className="careers__descr">
              Join our team and embark on a rewarding journey in the banking
              industry. At YourBank, we are committed to fostering a culture of
              excellence and providing opportunities for professional growth.
              With a focus on innovation, customer service, and integrity, we
              strive to make a positive impact in the lives of our customers and
              communities. Join us today and be a part of our mission to shape
              the future of banking.
            </p>
          </div>
          <div className="careers__hero__imgwrap">
            <img
              src="public/assets/peopletwo.png"
              alt="Team meeting"
              className="careers__hero__img"
            />
            <div className="careers__hero__imgoverlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
