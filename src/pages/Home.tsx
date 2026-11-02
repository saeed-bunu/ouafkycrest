
import { Link } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data";

function Home() {
  const featuredIds = ["dei-dei-meat-shop", "palmera-180sqm", "palmera-750sqm"];
  const featuredProperties = properties.filter((property) => featuredIds.includes(property.id));

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-kicker"><span className="kicker-line" /> A more considered way to own</div>
          <h1 className="hero-title">
            Find your place in
            <span> Abuja’s future.</span>
          </h1>
          <p className="hero-subtitle">
            Thoughtfully selected homes and commercial spaces in Abuja—designed around the life and legacy you’re building.
          </p>
          <div className="hero-actions">
            <Link to="/properties" className="btn btn-primary">
              Discover properties <span aria-hidden="true">↗</span>
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Speak with our team
            </Link>
          </div>
          <div className="hero-note">
            <span className="hero-note-mark">A</span>
            <span>Abuja, Nigeria<br /><strong>Built for generations</strong></span>
          </div>
        </div>
        <a className="hero-scroll" href="#featured">
          <span className="scroll-rule" /> Scroll to explore
        </a>
      </section>

      <section className="intro-band">
        <p>Spaces with purpose. Investments with perspective.</p>
        <span>RESIDENTIAL <i /> COMMERCIAL <i /> ABUJA</span>
      </section>

      <section className="featured-section section-wrap" id="featured">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A considered collection</span>
            <h2>Places to move<br />your story forward.</h2>
          </div>
          <div className="section-heading-aside">
            <p>Explore a selection of residential and commercial opportunities across Abuja.</p>
            <Link to="/properties" className="text-link">View the collection <span aria-hidden="true">↗</span></Link>
          </div>
        </div>

        <div className="property-grid">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="featured-footer"><span>01 — 03</span><Link to="/properties" className="btn btn-outline">Explore all properties <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="home-story">
        <div className="home-story-image" role="img" aria-label="Contemporary Abuja residence surrounded by greenery" />
        <div className="home-story-copy">
          <span className="eyebrow">Rooted in Abuja</span>
          <h2>Built for the life you’re creating.</h2>
          <p>From a first home to a lasting investment, we bring care and clarity to every step of your property journey.</p>
          <Link to="/about" className="text-link text-link-light">Discover OUAFKYCREST <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="home-cta">
        <span className="eyebrow">The next move is yours</span>
        <h2>Let’s find the right space.</h2>
        <p>Tell us what you’re looking for. We’ll help you explore what’s possible.</p>
        <Link to="/contact" className="btn btn-primary">Start a conversation <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}

export default Home;