import "../styles/cta.css";

export default function Cta({ setSignupOpen }) {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">
            Start your financial journey with{" "}
            <span className="cta__accent">YourBank today!</span>
          </h2>
          <p className="cta__desc">
            Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
            pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
            Nascetur viverra arcu sed amet cursus purus.
          </p>
        </div>
        <div className="cta__action">
          <button className="cta__btn" onClick={() => setSignupOpen(true)}>
            Open Account
          </button>
        </div>
      </div>
    </section>
  );
}
