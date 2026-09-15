import Image from "next/image";
import DownloadButton from "../ui/DownloadButton";
import DecorativeCircle from "../ui/DecorativeCircle";

export default function MobileApplication() {
  return (
    <section
      id="mobile-app"
      aria-labelledby="mobile-app-heading"
      className="relative overflow-hidden py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-40 hidden lg:block"
      >
        <DecorativeCircle variant="ring" size={320} ringWidth={48} />
        <DecorativeCircle
          variant="outline"
          size={220}
          className="absolute -bottom-16 left-24"
        />
      </div>

      <div className="nn-container grid items-center gap-12 lg:grid-cols-[40fr_60fr] lg:gap-8">
        <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center py-6">
          <Image
            src="/assets/images/section-05-mobile-phone-back.png"
            alt="NovaNest mobile app home screen on a smartphone"
            width={440}
            height={880}
            sizes="(max-width: 1024px) 60vw, 22vw"
            className="h-auto w-1/2 -rotate-[5deg]"
          />
          <Image
            src="/assets/images/section-05-mobile-phone-front.png"
            alt="NovaNest mobile app property details screen on a smartphone"
            width={440}
            height={880}
            sizes="(max-width: 1024px) 60vw, 22vw"
            className="relative z-10 -ml-10 h-auto w-1/2 rotate-[5deg]"
          />
        </div>

        <div>
          <h2
            id="mobile-app-heading"
            className="nn-h2 text-left text-cream"
          >
            Mobile Application
          </h2>
          <p className="nn-small mt-6 max-w-[580px] text-left text-sage-dim">
            Achieve seamless access to the world of real estate with the
            NovaNest Estates mobile app, available for download on both Google
            Play and the App Store. Whether you&apos;re searching for your
            dream home, exploring property listings, or staying updated with
            the latest market trends, our user-friendly app puts the power of
            real estate in the palm of your hand. Download now and experience
            the convenience of finding your perfect property anytime,
            anywhere.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <DownloadButton store="apple" />
            <DownloadButton store="play" />
          </div>
        </div>
      </div>
    </section>
  );
}
