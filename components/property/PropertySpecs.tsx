import Image from "next/image";

interface PropertySpecsProps {
  area: string;
  bedrooms: string;
  bathrooms: string;
}

function AreaIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 1.5h5.5V7h-1.6V4L8.4 8.4 7.3 7.3l4.5-4.5H9V1.5ZM7 14.5H1.5V9h1.6v3l4.5-4.5 1.1 1.1-4.5 4.5H7v1.4Z"
        fill="#9ECABC"
      />
    </svg>
  );
}

export default function PropertySpecs({
  area,
  bedrooms,
  bathrooms,
}: PropertySpecsProps) {
  return (
    <ul className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-fog">
      <li className="flex items-center gap-1.5">
        <AreaIcon />
        <span>{area}</span>
      </li>
      <li className="flex items-center gap-1.5">
        <Image
          src="/assets/icons/bed.svg"
          alt=""
          width={16}
          height={16}
          className="h-4 w-4"
        />
        <span>{bedrooms}</span>
      </li>
      <li className="flex items-center gap-1.5">
        <Image
          src="/assets/icons/bathroom.svg"
          alt=""
          width={16}
          height={16}
          className="h-4 w-4"
        />
        <span>{bathrooms}</span>
      </li>
    </ul>
  );
}
