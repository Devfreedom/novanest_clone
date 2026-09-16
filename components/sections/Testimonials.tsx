import Image from "next/image";
import ArrowButton from "../ui/ArrowButton";
import DecorativeCircle from "../ui/DecorativeCircle";
import PropertySpecs from "../property/PropertySpecs";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-20 lg:py-24"
    >
      <div aria-hidden="true" className="absolute -left-40 top-0 hidden lg:block">
        <DecorativeCircle variant="ring" size={320} ringWidth={48} />
        <DecorativeCircle
          variant="outline"
          size={220}
          className="absolute -bottom-16 left-24"
        />
        <DecorativeCircle
          variant="gold"
          size={64}
          className="absolute left-56 top-24"
        />
      </div>

      <div className="nn-container">
        <div className="grid items-end gap-6 lg:grid-cols-[220px_1fr_auto] lg:gap-10">
          <h2 id="testimonials-heading" className="nn-h3 text-cream">
            What Our
            <br />
            Clients Say
          </h2>
          <p className="nn-small max-w-[520px] text-sage-dim">
            Discover what our satisfied clients have to say about their
            experience with NovaNest Estates. From finding their dream homes
            to experiencing exceptional service, our clients&apos;
            testimonials speak volumes about the quality and dedication we
            bring to every real estate transaction.
          </p>
          <div className="flex items-center gap-3">
            <ArrowButton direction="left" label="Previous testimonial" />
            <ArrowButton direction="right" label="Next testimonial" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[85fr_15fr]">
          <article className="grid overflow-hidden rounded-card bg-mint-cream shadow-card md:grid-cols-[5fr_7fr]">
            <div className="relative min-h-[280px] md:min-h-[420px]">
              <Image
                src="/assets/images/section-06-testimonial-serene-haven.png"
                alt="Serene Haven suburban home with manicured lawns in the Suburban Bliss Community"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative p-8 lg:p-10">
              <Image
                src="/assets/icons/quote.svg"
                alt=""
                aria-hidden="true"
                width={36}
                height={36}
                className="absolute right-8 top-8 h-9 w-9 lg:right-10 lg:top-10"
              />
              <h3 className="text-2xl font-semibold text-ink">Serene Haven</h3>
              <p className="mt-2 text-base text-feldgrau">
                Suburban Bliss Community
              </p>
              <PropertySpecs
                area="200m²"
                bedrooms="3 Bedrooms"
                bathrooms="2 Bathrooms"
              />
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src="/assets/images/section-06-testimonial-avatar-emily.png"
                  alt="Portrait of Emily Johnson"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <p className="text-base font-semibold text-ink">
                  Emily Johnson
                </p>
              </div>
              <p className="mt-4 text-sm leading-[1.6] text-fog">
                NovaNest Estates helped me find the perfect suburban retreat
                for my family. The process was smooth, and their team was
                incredibly helpful every step of the way. Thank you for
                making our dream home a reality!
              </p>
            </div>
          </article>

          <div className="relative hidden min-h-[420px] overflow-hidden rounded-card lg:block">
            <Image
              src="/assets/images/section-06-testimonial-next.png"
              alt="Preview of the next client testimonial property"
              fill
              sizes="15vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
