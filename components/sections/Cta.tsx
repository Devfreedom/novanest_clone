import Image from "next/image";
import Button from "../ui/Button";

export default function Cta() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 top-1/2 bg-pine-darkest"
      />
      <div className="nn-container relative py-20 lg:py-24">
        <div className="relative mx-auto w-full rounded-card bg-white shadow-card lg:w-[76%]">
          <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-4 lg:p-14">
            <div>
              <h2
                id="cta-heading"
                className="max-w-[420px] text-[26px] font-bold leading-[1.25] text-ink"
              >
                Begin your property listing or purchasing journey with
                NovaNest.
              </h2>
              <p className="mt-5 max-w-[380px] text-sm leading-[1.6] text-fog">
                Embark on your real estate journey by leveraging the
                expertise and resources of NovaNest. Whether you&apos;re
                listing your property for sale or searching for your dream
                home, our dedicated team is here to guide you every step of
                the way. With NovaNest, your real estate goals are within
                reach.
              </p>
              <div className="mt-8">
                <Button href="#" variant="primary">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/section-07-cta-aframe-house.png"
                alt="Modern dark A-frame house with warm glowing glass facade at dusk"
                width={880}
                height={760}
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="h-auto w-full lg:absolute lg:right-[-14%] lg:top-1/2 lg:w-[118%] lg:max-w-none lg:-translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
