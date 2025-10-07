import "../styles/about-mission.css";

export default function AboutMission() {
  return (
    <section className="about-mission">
      <div className="container">
        <h2 className="about-mission__title">Mission & Vision</h2>
        <p className="about-mission__decr">
          We envision being a leading force in the industry, driven by
          innovation, integrity, and inclusivity, creating a brighter financial
          future for individuals and businesses while maintaining a strong
          commitment to customer satisfaction and community development
        </p>
        <div className="about-mission__cards">
          <div className="about-mission__card about-mission__card--horizontal">
            <div className="about-mission__imgwrap">
              <img
                src="/BankWebSite/assets/mission-flower.png"
                alt="Mission"
                className="about-mission__img"
              />
            </div>
            <div className="about-mission__cardtext">
              <h3 className="about-mission__cardtitle ">Mission</h3>
              <p className="about-mission__carddesc">
                At YourBank, our mission is to empower our customers to achieve
                financial success. We are dedicated to delivering innovative
                banking solutions that cater to their unique needs. Through
                personalized services, expert guidance, and cutting-edge
                technology, we aim to build strong, lasting relationships with
                our customers. Our mission is to be their trusted partner,
                helping them navigate their financial journey and realize their
                dreams.
              </p>
            </div>
          </div>
          <div className="about-mission__card about-mission__card--horizontal about-mission__card--reverse">
            <div className="about-mission__cardtext">
              <h3 className="about-mission__cardtitle ">Vision</h3>
              <p className="about-mission__carddesc">
                Our vision at YourBank is to redefine banking by creating a
                seamless and personalized experience for our customers. We
                envision a future where banking is accessible, transparent, and
                tailored to individual preferences. Through continuous
                innovation and collaboration, we strive to be at the forefront
                of the industry, setting new standards for customer-centric
                banking. Our vision is to be the preferred financial
                institution, known for our unwavering commitment to excellence,
                trust, and customer satisfaction.
              </p>
            </div>
            <div className="about-mission__imgwrap">
              <img
                src="/BankWebSite/assets/mission-eye.png"
                alt="Vision"
                className="about-mission__img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
