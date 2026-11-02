import { useParams, Link } from "react-router-dom";
import { properties } from "../data";
import { businessPhone, getWhatsAppLink } from "../contactDetails";

function PropertyDetail() {
  // Get the ID from the URL (e.g., /properties/karsana-villa)
  const { id } = useParams();
  
  // Find the matching property in our data
  const property = properties.find((p) => p.id === id);

  // If the ID doesn't match any property, show an error
  if (!property) {
    return (
      <div className="detail-page">
        <h1>Property Not Found</h1>
        <Link to="/properties" className="btn btn-outline">Back to Properties</Link>
      </div>
    );
  }

  const formattedPrice = property.price === undefined
    ? "Enquire for details"
    : new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
      }).format(property.price);

  return (
    <main className="detail-page">
      <div className="detail-header">
        <Link to="/properties" className="back-link"><span aria-hidden="true">←</span> Back to collection</Link>
        <div className="detail-title-row">
          <div>
            <span className="eyebrow">{property.tag ?? "Property"}{property.sqm ? ` · ${property.sqm}` : ""}</span>
            <h1>{property.title}</h1>
            <p className="detail-location"><span aria-hidden="true">⌖</span> {property.location}</p>
          </div>
        </div>
      </div>

      <div className="detail-hero">
        <img
          src={property.image}
          alt={`Listing image for ${property.title} at ${property.location}`}
        />
      </div>
      <p className="image-disclaimer"><span aria-hidden="true">✦</span> Image shown represents the property or development; confirm the exact unit with our team.</p>

      <div className="detail-grid">
        <div className="detail-main">
          <span className="eyebrow">A closer look</span>
          <h2>About this property</h2>
          <p>{property.description}</p>
          
          <div className="detail-features">
            <div><span>{property.sqm ? "Property size" : "Property type"}</span><strong>{property.sqm ?? "Shared amenities"}</strong></div>
            <div><span>Location</span><strong>{property.location.split(",").at(-1)?.trim() ?? "Abuja"}</strong></div>
            <div><span>Availability</span><strong>Enquire now</strong></div>
          </div>
        </div>

        <div className="detail-sidebar">
          <div className="price-card">
            <span className="eyebrow">Investment</span>
            <h3>{property.price === undefined ? "Availability" : "Asking price"}</h3>
            <p className="detail-price">{formattedPrice}</p>
            <p className="price-note">Interested in this opportunity? Our team can help you with the next steps.</p>
            <a
              href={getWhatsAppLink(`Hello OUAFKYCREST, I’m interested in ${property.title} at ${property.location}${property.sqm ? ` (${property.sqm})` : ""}. Please share more details.`)}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a
              href={getWhatsAppLink(`Hello OUAFKYCREST, I’d like to learn more about the ${property.title} at ${property.location}.`)}
              className="price-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us: {businessPhone}
            </a>
            <Link to="/properties" className="detail-back-secondary">Continue exploring</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PropertyDetail;