import Image from "next/image";
import Button from "../ui/Button";

export default function NewsletterCard() {
  return (
    <article
      aria-labelledby="newsletter-heading"
      className="relative flex h-full flex-col overflow-hidden rounded-card bg-[linear-gradient(150deg,var(--color-news-deep),var(--color-news-mid)_55%,var(--color-news-soft))] p-6 shadow-card sm:p-8 md:col-span-2 lg:col-span-1 lg:row-span-2"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/40 blur-2xl" />
        <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-white/35 blur-2xl" />
        <div className="absolute right-10 top-1/3 h-24 w-24 rounded-full bg-white/30 blur-xl" />
      </div>

      <div className="relative flex h-full flex-col">
        <Image
          src="/assets/images/section-04-newsletter-logo.svg"
          alt="NovaNest mark"
          width={40}
          height={40}
          className="h-10 w-10"
        />
        <h3
          id="newsletter-heading"
          className="mt-4 text-[22px] font-bold leading-snug text-ink"
        >
          The most intriguing, unique, and novel offers.
        </h3>
        <div className="mt-4 space-y-3 text-[13px] leading-relaxed text-ink/80">
          <p>
            Stay updated with the latest trends, market insights, and exclusive
            property offers by subscribing to our real estate newsletter.
          </p>
          <p>
            Receive curated content straight to your inbox, including tips for
            buyers, sellers, and investors.
          </p>
          <p>
            Don&apos;t miss out on the opportunity to be informed and inspired.
            Subscribe now!
          </p>
        </div>

        <div className="mt-auto pt-6">
          <label
            htmlFor="newsletter-email"
            className="mb-2 block text-[13px] font-medium text-ink"
          >
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Your email address"
            className="w-full rounded-[10px] border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-fog focus:border-ink/30 focus:outline-none"
          />
          <Button href="#" variant="primary" className="mt-3 w-full">
            Subscribe
          </Button>
        </div>
      </div>
    </article>
  );
}
