import { Link } from "react-router-dom";
import { businessPhone, companyEmail, getWhatsAppLink } from "../contactDetails";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="logo" aria-label="OUAFKYCREST home">
            <span className="logo-name">OU<span>Λ</span>FKYCREST</span>
            <span className="logo-motto">Built for Generations</span>
          </Link>
          <p>Thoughtful real estate opportunities, rooted in Abuja and built for the future.</p>
        </div>
        <div className="footer-links">
          <span className="footer-label">Explore</span>
          <Link to="/properties">Properties</Link>
          <Link to="/about">Our story</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-cta">
          <span className="footer-label">Your next chapter</span>
          <p>Find a space that feels like the start of something.</p>
          <a className="footer-contact-link" href={`mailto:${companyEmail}`}>{companyEmail}</a>
          <a className="footer-contact-link" href={getWhatsAppLink("Hello OUAFKYCREST, I’d like to learn more about your properties.")} target="_blank" rel="noopener noreferrer">WhatsApp · {businessPhone}</a>
          <Link to="/properties" className="footer-arrow-link">
            Explore properties <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} OUAFKYCREST. All rights reserved.</span>
        <span>Abuja, Nigeria</span>
      </div>
    </footer>
  );
}

export default Footer;
