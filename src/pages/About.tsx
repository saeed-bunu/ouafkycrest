function About() {
  return (
    <main className="about-page">
      <section className="about-header">
        <span className="eyebrow">Built for generations</span>
        <h1>Good places.<br /><em>Lasting possibility.</em></h1>
        <p>We are a real estate development and advisory firm rooted in Abuja, helping people make confident decisions about the places they call their own.</p>
        <span className="about-ornament" aria-hidden="true">OUΛFKYCREST</span>
      </section>

      <section className="about-content">
        <div className="about-text">
          <span className="eyebrow">Who we are</span>
          <h2>Real estate with a longer view.</h2>
          <p>
            Founded on the principles of trust, transparency, and strategic growth,
            OUAFKYCREST helps families and investors build a future through considered
            real estate opportunities.
          </p>
          <p>
            We don’t just present properties; we help people see the potential in them.
            From commercial spaces at Dei-Dei Ultra-Modern Market to homes at Palmera
            Residence in Karsana, every opportunity is part of a bigger vision.
          </p>
          <div className="about-motto">
            <span className="motto-mark">“</span>
            <div><span className="eyebrow">Our promise</span><strong>Built for Generations</strong></div>
          </div>
        </div>

        <figure className="about-image">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
            alt="A real estate team discussing a property investment"
            loading="lazy"
            decoding="async"
          />
          <figcaption><span>01</span> A foundation for what comes next</figcaption>
        </figure>
      </section>

      <section className="about-stats" aria-label="OUAFKYCREST at a glance">
        <div><h3>100<span>+</span></h3><p>Homes built</p></div>
        <div><h3>5<span>+</span></h3><p>Years experience</p></div>
        <div><h3>50<span>+</span></h3><p>Trusted realtors</p></div>
      </section>

      <section className="about-cta">
        <div><span className="eyebrow">Our vision</span><h2>Creating places where futures take shape.</h2></div>
        <p>We believe the right property is more than an address. It’s a foundation for belonging, opportunity, and growth.</p>
      </section>
    </main>
  );
}

export default About;