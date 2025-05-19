import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WorkFlowSection from "./components/WorkFlowSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pt-15">
        <HeroSection />
        <FeatureSection />
        <WorkFlowSection />
      </div>
    </>
  );
}

export default App;
