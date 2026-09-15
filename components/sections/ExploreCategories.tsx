import ArrowButton from "../ui/ArrowButton";
import DecorativeCircle from "../ui/DecorativeCircle";
import CategoryCard from "../property/CategoryCard";

const categories = [
  {
    title: "Apartment Residences",
    count: "7.200 Properies",
    imageSrc: "/assets/images/section-01-category-apartment.png",
    imageAlt: "Aerial view of apartment residences surrounded by greenery",
  },
  {
    title: "Modern Villas",
    count: "966 Properies",
    imageSrc: "/assets/images/section-01-category-villa.png",
    imageAlt: "Modern white villa with a swimming pool",
  },
  {
    title: "Farm Houses",
    count: "245 Properies",
    imageSrc: "/assets/images/section-01-category-farmhouse.png",
    imageAlt: "Timber farm house in a grassy meadow",
  },
];

export default function ExploreCategories() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="relative overflow-hidden pb-24 pt-4"
    >
      <div aria-hidden="true" className="absolute -left-40 top-10 hidden lg:block">
        <DecorativeCircle variant="ring" size={320} ringWidth={48} />
        <DecorativeCircle
          variant="outline"
          size={220}
          className="absolute -bottom-16 left-24"
        />
      </div>

      <div className="nn-container">
        <div className="grid items-end gap-6 lg:grid-cols-[220px_1fr_auto] lg:gap-10">
          <h2
            id="categories-heading"
            className="nn-h3 text-cream"
          >
            Explore
            <br />
            Categories
          </h2>
          <p className="nn-small max-w-[520px] text-sage-dim">
            Start exploring at NovaNest Estates and navigate our extensive
            range of categories to find the living space of your dreams. Each
            carefully curated, browse through diverse types of homes to
            discover your ideal residence.
          </p>
          <div className="flex items-center gap-3">
            <ArrowButton direction="left" label="Previous categories" />
            <ArrowButton direction="right" label="Next categories" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mx-auto sm:max-w-[480px] md:mx-0 md:max-w-none md:grid-cols-3 md:gap-4 lg:-mr-40 lg:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
