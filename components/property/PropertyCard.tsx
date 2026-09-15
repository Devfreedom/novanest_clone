import Image from "next/image";
import type { PopularProperty } from "../../data/popularProperties";
import PropertySpecs from "./PropertySpecs";

type PropertyCardProps = Omit<PopularProperty, "imageSrc" | "imageAlt"> & {
  imageSrc: string;
  imageAlt: string;
};

export default function PropertyCard({
  title,
  price,
  location,
  area,
  bedrooms,
  bathrooms,
  imageSrc,
  imageAlt,
}: PropertyCardProps) {
  return (
    <article className="rounded-card bg-white p-3 shadow-card">
      <div className="overflow-hidden rounded-media">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={640}
          height={480}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-base font-medium text-ink">{price}</p>
      <p className="mt-1 text-[13px] text-fog">{location}</p>
      <PropertySpecs area={area} bedrooms={bedrooms} bathrooms={bathrooms} />
    </article>
  );
}
