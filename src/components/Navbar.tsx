import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isSolid = scrolled || pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${isSolid ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="logo" aria-label="OUAFKYCREST home" onClick={closeMenu}>
          <span className="logo-name">OU<span>Λ</span>FKYCREST</span>
          <span className="logo-motto">Built for Generations</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/properties" onClick={closeMenu}>Properties</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <Link to="/contact" className="nav-btn" onClick={closeMenu}>Let’s talk <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;