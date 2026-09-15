import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import ExploreCategories from "../components/sections/ExploreCategories";
import PopularAds from "../components/sections/PopularAds";

export default function Home() {
  return (
    <div className="min-h-screen bg-pine text-cream">
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <ExploreCategories />
        <PopularAds />
      </main>
    </div>
  );
}
