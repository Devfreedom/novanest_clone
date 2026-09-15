export interface PopularProperty {
  title: string;
  price: string;
  location: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  imageSrc: string;
  imageAlt: string;
}

export const popularProperties: PopularProperty[] = [
  {
    title: "Urban Oasis",
    price: "$500,000",
    location: "Downtown Metropolitan Area",
    area: "120m²",
    bedrooms: "2 Bedrooms",
    bathrooms: "2 Bathrooms",
    imageSrc: "/assets/images/section-04-property-urban-oasis.png",
    imageAlt: "Modern apartment building surrounded by lush greenery",
  },
  {
    title: "Coastal Serenity",
    price: "$1,200,000",
    location: "Beachfront Property, Coastal Area",
    area: "250m²",
    bedrooms: "4 Bedrooms",
    bathrooms: "3 Bathrooms",
    imageSrc: "/assets/images/section-04-property-coastal-serenity.png",
    imageAlt: "White beachfront villa with swimming pool and palm trees",
  },
  {
    title: "Contemporary Haven",
    price: "$2,000,000",
    location: "Suburban Luxury Community",
    area: "400m²",
    bedrooms: "5 Bedrooms",
    bathrooms: "4 Bathrooms",
    imageSrc: "/assets/images/section-04-property-contemporary-haven.png",
    imageAlt: "Contemporary luxury house with pool at dusk",
  },
  {
    title: "Tranquil Farmstead",
    price: "$800,000",
    location: "Rural Countryside, Farming District",
    area: "800m²",
    bedrooms: "3 Bedrooms",
    bathrooms: "2 Bathrooms",
    imageSrc: "/assets/images/section-04-property-tranquil-farmstead.png",
    imageAlt: "Spacious countryside farmstead with open lawns",
  },
];
