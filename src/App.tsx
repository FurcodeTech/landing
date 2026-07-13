import { useEffect } from "react";
import About from "./sections/About";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Offer from "./sections/Offer";

function App() {
  useEffect(() => {
    let frame = 0;

    const updateScrollVars = () => {
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
      const viewportHeight = window.innerHeight || 1;
      const progress = Math.min(window.scrollY / (viewportHeight * 3), 1);
      document.documentElement.style.setProperty("--scroll-progress", progress.toString());
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateScrollVars();
      });
    };

    updateScrollVars();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollVars);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollVars);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="relative min-h-dvh bg-transparent text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="parallax-orb parallax-orb-amber" />
        <div className="parallax-orb parallax-orb-emerald" />
        <div className="parallax-orb parallax-orb-stone" />
      </div>

      <main className="relative">
        <Hero />
        <About />
        <Offer />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
