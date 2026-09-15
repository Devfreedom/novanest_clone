import Image from "next/image";

interface CategoryCardProps {
  title: string;
  count: string;
  imageSrc: string;
  imageAlt: string;
}

export default function CategoryCard({
  title,
  count,
  imageSrc,
  imageAlt,
}: CategoryCardProps) {
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
      <h3 className="mt-4 text-center text-lg font-medium text-ink">
        {title}
      </h3>
      <p className="mt-1 pb-2 text-center text-[13px] text-fog">{count}</p>
    </article>
  );
}
