import Image from "next/image";
import Button from "../ui/Button";
import DecorativeCircle from "../ui/DecorativeCircle";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="nn-container grid items-center gap-12 py-16 lg:grid-cols-[55fr_45fr] lg:gap-8 lg:py-24">
        <div>
          <h1
            id="hero-heading"
            className="max-w-[540px] text-[clamp(2.5rem,4.2vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-cream"
          >
            Discover your nest in
            <br />
            the nova of luxury
            <br />
            living.
          </h1>
          <p className="mt-6 max-w-[520px] text-[13px] leading-[1.6] text-sage-dim">
            Our exquisite properties blend timeless elegance with modern
            comfort, offering an oasis of serenity amidst the bustling world
            outside. Come, embark on a journey of discovery, and let NovaNest
            Estates be the canvas upon which you paint the masterpiece of your
            life.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#categories" variant="primary">
              Explore Properties
            </Button>
            <Button href="#" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[540px] items-center justify-center lg:min-h-[480px]">
          <DecorativeCircle
            variant="ring"
            size={380}
            ringWidth={64}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 sm:block"
          />
          <DecorativeCircle
            variant="outline"
            size={280}
            className="absolute bottom-0 left-[4%]"
          />
          <DecorativeCircle
            variant="gold"
            size={64}
            className="absolute right-[14%] top-0 z-20"
          />
          <Image
            src="/assets/images/section-01-hero-house.png"
            alt="Modern dark luxury two-storey house with warm interior lighting, landscaped gardens and stone steps"
            width={680}
            height={620}
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="relative z-10 h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
