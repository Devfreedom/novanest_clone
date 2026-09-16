import Image from "next/image";
import PropertySpecs from "./PropertySpecs";

export interface ExclusiveOfferImage {
  src: string;
  alt: string;
}

interface ExclusiveOfferProps {
  title: string;
  oldPrice: string;
  price: string;
  location: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  images: [ExclusiveOfferImage, ExclusiveOfferImage, ExclusiveOfferImage];
  reverse?: boolean;
}

export default function ExclusiveOffer({
  title,
  oldPrice,
  price,
  location,
  area,
  bedrooms,
  bathrooms,
  images,
  reverse = false,
}: ExclusiveOfferProps) {
  const [back, middle, front] = images;
  const mediaOrder = reverse ? "lg:order-2" : "lg:order-1";
  const contentOrder = reverse ? "lg:order-1" : "lg:order-2";

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
      <div className={`relative h-[380px] sm:h-[440px] lg:h-[500px] ${mediaOrder}`}>
        <div className="absolute bottom-8 left-0 top-8 w-[62%] overflow-hidden rounded-media">
          <Image
            src={back.src}
            alt={back.alt}
            fill
            sizes="(max-width: 1024px) 60vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-[9%] top-4 w-[70%] overflow-hidden rounded-media">
          <Image
            src={middle.src}
            alt={middle.alt}
            fill
            sizes="(max-width: 1024px) 65vw, 28vw"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 top-0 w-[78%] overflow-hidden rounded-media shadow-card">
          <Image
            src={front.src}
            alt={front.alt}
            fill
            sizes="(max-width: 1024px) 75vw, 32vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className={contentOrder}>
        <h3 className="text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.15] text-cream">
          {title}
        </h3>
        <p className="mt-5 text-lg text-sage-dim">{oldPrice}</p>
        <p className="mt-1 text-[1.75rem] font-medium text-sage">{price}</p>
        <p className="mt-4 text-base text-sage-dim">{location}</p>
        <PropertySpecs area={area} bedrooms={bedrooms} bathrooms={bathrooms} />
      </div>
    </div>
  );
}
