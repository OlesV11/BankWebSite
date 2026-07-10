import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          {/* SVG логотип */}
          <Link to="/" className="footer__logo-img" aria-label="YourBank home">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.27116 14.5749L14.7712 6.07487L23.2712 14.5749L14.7712 23.0749L6.27116 14.5749Z"
                fill="#CAFF33"
              />
              <path
                d="M28.9378 8.9082L23.2712 14.5749V6.07487H14.7712L20.4378 0.408203H28.9378V8.9082Z"
                fill="#CAFF33"
              />
              <path
                d="M28.9378 20.2415L23.2712 14.5749V23.0749H14.7712L20.4378 28.7415H28.9378V20.2415Z"
                fill="#CAFF33"
              />
              <path
                d="M0.604492 20.2415L6.27116 14.5749V23.0749H14.7712L9.10449 28.7415H0.604492L0.604492 20.2415Z"
                fill="#CAFF33"
              />
              <path
                d="M0.604492 8.9082L6.27116 14.5749V6.07487H14.7712L9.10449 0.408203H0.604492L0.604492 8.9082Z"
                fill="#CAFF33"
              />
            </svg>
          </Link>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <Link to="/" className="footer__nav-link">
            Home
          </Link>
          <Link to="/careers" className="footer__nav-link">
            Careers
          </Link>
          <Link to="/about" className="footer__nav-link">
            About
          </Link>
          <Link to="/security" className="footer__nav-link">
            Security
          </Link>
        </nav>
        <hr className="footer__divider" />
        <div className="footer__contacts">
          <div className="footer__contact">
            <span className="footer__contact-icon" aria-hidden="true">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M2.5 4.5A2 2 0 014.5 2.5h11a2 2 0 012 2v11a2 2 0 01-2 2h-11a2 2 0 01-2-2v-11z"
                  stroke="#caff33"
                  strokeWidth="1.5"
                />
                <path
                  d="M3.5 5.5l6.5 5.5 6.5-5.5"
                  stroke="#caff33"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <a href="mailto:info@bank.com" className="footer__nav-link">
              info@bankhellokitty.com
            </a>
          </div>
          <div className="footer__contact">
            <span className="footer__contact-icon" aria-hidden="true">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M4 6.5A1.5 1.5 0 015.5 5h9A1.5 1.5 0 0116 6.5v7A1.5 1.5 0 0114.5 15h-9A1.5 1.5 0 014 13.5v-7z"
                  stroke="#caff33"
                  strokeWidth="1.5"
                />
                <path d="M6.5 8.5h7" stroke="#caff33" strokeWidth="1.5" />
              </svg>
            </span>
            <a href="tel:+380991234567" className="footer__nav-link">
              +38 (099) 123-45-67
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__socials" aria-label="Соціальні мережі">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M12.5 7.5V6.25A1.25 1.25 0 0113.75 5h1.25V2.5h-2.5A3.75 3.75 0 009 6.25V7.5H7.5V10h1.5v7.5h2.5V10h1.5l.5-2.5h-2V7.5h2z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <rect
                  x="3"
                  y="3"
                  width="14"
                  height="14"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Telegram">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M16.5 3.5L3.5 9.5l4.5 1.5 1.5 4.5 7-13z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 11.5l2.5 2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>
          <div className="footer__copyright">
            © {new Date().getFullYear()} YourBank All Rights Reserved
          </div>
          <div className="footer__links">
            <a href="#" className="footer__policy-link">
              Privacy Policy
            </a>
            <a href="#" className="footer__policy-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
