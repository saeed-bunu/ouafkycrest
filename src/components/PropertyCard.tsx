import { Link } from "react-router-dom";
import type { Property } from "../data";

function PropertyCard({ property }: { property: Property }) {
  // Format price to look like ₦25,000,000
  const formattedPrice = property.price === undefined
    ? "Enquire for details"
    : new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
      }).format(property.price);

  return (
    <article className="property-card">
      <div className="card-image-wrapper">
        <img
          src={property.image}
          alt={`Listing image for ${property.title} at ${property.location}`}
          className="card-image"
          loading="lazy"
          decoding="async"
        />
        <span className="concept-badge">Listing image</span>
        {property.tag && <span className="card-tag">{property.tag}</span>}
      </div>
      
      <div className="card-content">
        <div className="card-topline">
          <p className="card-price">{formattedPrice}</p>
          <span className="card-size">{property.sqm ?? "Amenities"}</span>
        </div>
        <h3 className="card-title">{property.title}</h3>
        <p className="card-location"><span aria-hidden="true">⌖</span> {property.location}</p>
        
        <p className="card-description">{property.description}</p>
        <Link to={`/properties/${property.id}`} className="card-btn">
          <span>Explore property</span><span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

export default PropertyCard;