import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data";

function Properties() {
  const [filter, setFilter] = useState("All");
  const locations = ["All", "Dei-Dei", "Karsana"];
  const filteredProperties = filter === "All"
    ? properties
    : properties.filter((property) => property.location.includes(filter));

  return (
    <main className="properties-page">
      <section className="catalog-hero">
        <span className="eyebrow">The OUAFKYCREST collection</span>
        <h1>Find a space<br /><em>that feels like yours.</em></h1>
        <p>Explore residential homes and commercial opportunities in Abuja, selected with care and a long view.</p>
        <div className="catalog-count"><span>{String(filteredProperties.length).padStart(2, "0")}</span> properties in this collection</div>
      </section>

      <section className="catalog-content" aria-label="Property listings">
        <div className="catalog-toolbar">
          <div className="filter-bar" aria-label="Filter properties by location">
            {locations.map((location) => (
              <button
                key={location}
                type="button"
                className={`filter-btn ${filter === location ? "active" : ""}`}
                aria-pressed={filter === location}
                onClick={() => setFilter(location)}
              >
                {location}
              </button>
            ))}
          </div>
          <span className="catalog-result-count">{filteredProperties.length} results</span>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="property-grid">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="empty-state"><h2>No properties found</h2><p>Try another location filter to browse the collection.</p></div>
        )}
      </section>
    </main>
  );
}

export default Properties;