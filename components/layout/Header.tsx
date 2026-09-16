import Image from "next/image";
import Button from "../ui/Button";

const navLinks = [
  { label: "Categories", href: "#categories" },
  { label: "Exclusive Offers", href: "#exclusive-offers" },
  { label: "Popular Ads", href: "#popular-ads" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-pine-deep">
      <div className="nn-container flex h-[70px] items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <a
          href="#"
          aria-label="NovaNest home"
          className="justify-self-start"
        >
          <Image
            src="/assets/logos/section-01-header-logo.svg"
            alt="NovaNest"
            width={128}
            height={36}
            loading="eager"
            className="h-9 w-auto"
          />
        </a>

        <nav aria-label="Primary" className="hidden lg:block lg:justify-self-center">
          <ul className="flex items-center gap-10 text-sm text-sage-dim">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex lg:justify-self-end">
          <Button href="#categories" variant="primary">
            Explore Properties
          </Button>
          <Button href="#" variant="outline">
            Contact Us
          </Button>
        </div>

        <details className="relative justify-self-end lg:hidden">
          <summary
            aria-label="Open menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-[10px] border border-sage/40 text-sage [&::-webkit-details-marker]:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 4.5h14M2 9h14M2 13.5h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-white/10 bg-pine-deep p-5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)]">
            <ul className="flex flex-col gap-4 text-sm text-sage-dim">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-3">
              <Button href="#categories" variant="primary">
                Explore Properties
              </Button>
              <Button href="#" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
