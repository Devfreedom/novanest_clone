import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-pine text-cream">
      <Header />
      <main className="overflow-x-clip">
        <Hero />
      </main>
    </div>
  );
}
