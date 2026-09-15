import { popularProperties } from "../../data/popularProperties";
import PropertyCard from "../property/PropertyCard";
import NewsletterCard from "./NewsletterCard";

export default function PopularAds() {
  const [first, second, ...rest] = popularProperties;

  return (
    <section
      id="popular-ads"
      aria-labelledby="popular-ads-heading"
      className="relative overflow-hidden py-20 lg:py-24"
    >
      <div className="nn-container">
        <h2
          id="popular-ads-heading"
          className="nn-h2 text-center text-cream"
        >
          Popular Ads of This Week
        </h2>
        <p className="nn-small mx-auto mt-4 max-w-[700px] text-center text-sage-dim">
          Explore our handpicked selection of popular listings at NovaNest
          Estates, showcasing a diverse range of exceptional properties that
          capture the essence of luxury living.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PropertyCard key={first.title} {...first} />
          <PropertyCard key={second.title} {...second} />
          <NewsletterCard />
          {rest.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
