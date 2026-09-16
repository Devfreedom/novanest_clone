import Image from "next/image";

const columns = [
  {
    heading: "Quick Links",
    links: [
      "Stuff for Designers",
      "Cool Stuff",
      "Random Feature",
      "Another One",
      "Last Time",
    ],
  },
  {
    heading: "Company Info",
    links: ["About Us", "Terms & Conditions", "User's Guide"],
  },
  {
    heading: "Popular Searches",
    links: ["Apartment for Rent", "Modern House", "Seaside House"],
  },
];

const socials = [
  { label: "NovaNest on X", iconSrc: "/assets/icons/x.svg" },
  { label: "NovaNest on YouTube", iconSrc: "/assets/icons/youtube.svg" },
  { label: "NovaNest on Instagram", iconSrc: "/assets/icons/instagram.svg" },
  { label: "NovaNest on LinkedIn", iconSrc: "/assets/icons/linkedin.svg" },
];

export default function Footer() {
  return (
    <footer className="bg-pine-darkest text-sage-dim">
      <div className="nn-container pb-10 pt-16 lg:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[22fr_26fr_26fr_26fr] lg:gap-8">
          <div>
            <a href="#" aria-label="NovaNest home">
              <Image
                src="/assets/logos/section-01-header-logo.svg"
                alt="NovaNest"
                width={128}
                height={36}
                className="h-9 w-auto"
              />
            </a>
          </div>
          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-base font-medium text-white">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-cream">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm">Design by Seda Sen</p>
          <ul className="flex items-center gap-5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#"
                  aria-label={social.label}
                  className="block transition-opacity hover:opacity-80"
                >
                  <Image
                    src={social.iconSrc}
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
