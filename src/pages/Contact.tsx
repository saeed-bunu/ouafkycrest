import type { FormEvent } from "react";
import { businessPhone, companyEmail, getWhatsAppLink, instagramUrl } from "../contactDetails";

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = `Property enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nEnquiry:\n${message}`;

    window.location.href = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="contact-page">
      <section className="contact-header">
        <span className="eyebrow">We’re here to help</span>
        <h1>Good things start<br /><em>with a conversation.</em></h1>
        <p>Tell us what you’re looking for. Our advisory team is ready to help you explore the possibilities.</p>
      </section>

      <nav className="contact-quick-links" aria-label="Contact us directly">
        <a
          className="btn btn-primary contact-action"
          href={getWhatsAppLink("Hello OUAFKYCREST, I’d like to learn more about your properties.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp <span>{businessPhone}</span><span aria-hidden="true">↗</span>
        </a>
        <a className="btn btn-outline contact-action" href={`mailto:${companyEmail}`}>
          Email us <span>{companyEmail}</span><span aria-hidden="true">↗</span>
        </a>
        <a className="btn btn-outline contact-action" href={instagramUrl} target="_blank" rel="noopener noreferrer">
          Instagram <span>@ouakfycrest</span><span aria-hidden="true">↗</span>
        </a>
      </nav>

      <div className="contact-grid">
        <section className="contact-form">
          <div className="contact-form-heading"><span className="eyebrow">Send us a note</span><h2>How can we help?</h2></div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Full name</label>
              <input id="contact-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-phone">Phone number</label>
              <input id="contact-phone" name="phone" type="tel" placeholder="+234" autoComplete="tel" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">What would you like to know?</label>
              <textarea id="contact-message" name="message" rows={5} placeholder="Tell us about the property or opportunity you have in mind..." required />
            </div>
            <button type="submit" className="btn btn-primary">
              Continue by email <span aria-hidden="true">↗</span>
            </button>
          </form>
        </section>

        <aside className="contact-info">
          <div className="contact-aside-intro">
            <span className="eyebrow">Let’s make it personal</span>
            <p>Whether you’re looking for a home, an investment, or a new commercial space, we’ll help you take the next step with confidence.</p>
          </div>
          <div className="info-block">
            <span className="info-number">01</span><div><h3>Head office</h3>
            <p><br />Abuja, FCT, Nigeria.</p>
            </div>
          </div>
          <div className="info-block">
            <span className="info-number">02</span><div><h3>Contact</h3>
            <p><a href={`mailto:${companyEmail}`}>{companyEmail}</a></p>
            <p><a href={getWhatsAppLink("Hello OUAFKYCREST, I’d like to learn more about your properties.")} target="_blank" rel="noopener noreferrer">WhatsApp: {businessPhone}</a></p>
            <p><a href={instagramUrl} target="_blank" rel="noopener noreferrer">@ouakfycrest on Instagram</a></p>
            </div>
          </div>
          <div className="info-block">
            <span className="info-number">03</span><div><h3>Office hours</h3>
            <p>Monday - Friday: 8am - 5pm</p>
            <p>Saturday: 10am - 2pm</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Contact;