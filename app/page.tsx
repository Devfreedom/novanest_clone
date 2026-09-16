import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import ExploreCategories from "../components/sections/ExploreCategories";
import ExclusiveOffers from "../components/sections/ExclusiveOffers";
import PopularAds from "../components/sections/PopularAds";
import MobileApplication from "../components/sections/MobileApplication";
import Testimonials from "../components/sections/Testimonials";
import Cta from "../components/sections/Cta";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-pine text-cream">
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <ExploreCategories />
        <ExclusiveOffers />
        <PopularAds />
        <MobileApplication />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
