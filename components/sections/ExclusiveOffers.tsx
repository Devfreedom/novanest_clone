import DecorativeCircle from "../ui/DecorativeCircle";
import ExclusiveOffer, {
  type ExclusiveOfferImage,
} from "../property/ExclusiveOffer";

interface ExclusiveOfferData {
  title: string;
  oldPrice: string;
  price: string;
  location: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  images: [ExclusiveOfferImage, ExclusiveOfferImage, ExclusiveOfferImage];
  reverse: boolean;
}

const exclusiveOffers: ExclusiveOfferData[] = [
  {
    title: "Elegant Apartment",
    oldPrice: "$625,000",
    price: "$600,000",
    location: "Downtown Metropolitan Area",
    area: "120m²",
    bedrooms: "2 Bedrooms",
    bathrooms: "2 Bathrooms",
    images: [
      {
        src: "/assets/images/section-02-offer-apartment-back.png",
        alt: "Elegant Apartment dining area with pendant lighting",
      },
      {
        src: "/assets/images/section-02-offer-apartment-middle.png",
        alt: "Elegant Apartment kitchen with marble island",
      },
      {
        src: "/assets/images/section-02-offer-apartment-front.png",
        alt: "Elegant Apartment living room with sofa and abstract wall art",
      },
    ],
    reverse: false,
  },
  {
    title: "Oceanfront Paradise",
    oldPrice: "$2,000,000",
    price: "$1,900,000",
    location: "Beachfront Property, Coastal Area",
    area: "90m²",
    bedrooms: "1 Bedroom",
    bathrooms: "1 Bathroom",
    images: [
      {
        src: "/assets/images/section-03-offer-oceanfront-back.png",
        alt: "Oceanfront Paradise bedroom with sea view",
      },
      {
        src: "/assets/images/section-03-offer-oceanfront-middle.png",
        alt: "Oceanfront Paradise terrace overlooking the ocean",
      },
      {
        src: "/assets/images/section-03-offer-oceanfront-front.png",
        alt: "Oceanfront Paradise living space with panoramic windows",
      },
    ],
    reverse: true,
  },
];

export default function ExclusiveOffers() {
  return (
    <section
      id="exclusive-offers"
      aria-labelledby="exclusive-offers-heading"
      className="relative overflow-hidden py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-40 hidden lg:block"
      >
        <DecorativeCircle variant="ring" size={320} ringWidth={48} />
        <DecorativeCircle
          variant="gold"
          size={64}
          className="absolute left-10 top-10"
        />
      </div>

      <div className="nn-container">
        <h2
          id="exclusive-offers-heading"
          className="nn-h2 text-center text-cream"
        >
          Exclusive Offers
        </h2>
        <p className="nn-small mx-auto mt-4 max-w-[700px] text-center text-sage-dim">
          Explore our handpicked selection of discounted properties at
          NovaNest Estates. Don&apos;t miss out on these exclusive deals
          offering exceptional value for your dream home.
        </p>

        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-24">
          {exclusiveOffers.map((offer) => (
            <ExclusiveOffer
              key={offer.title}
              title={offer.title}
              oldPrice={offer.oldPrice}
              price={offer.price}
              location={offer.location}
              area={offer.area}
              bedrooms={offer.bedrooms}
              bathrooms={offer.bathrooms}
              images={offer.images}
              reverse={offer.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
