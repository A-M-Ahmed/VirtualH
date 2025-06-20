import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import Testimonial from "./components/Testomonial";
import WorkFlowSection from "./components/WorkFlowSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-15">
        <HeroSection />
        <FeatureSection />
        <WorkFlowSection />
        <PricingSection />
        <Testimonial />
      </main>
    </>
  );
}

export default App;
