import { useEffect } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Offer from "./sections/Offer";
import Footer from "./sections/Footer";

function App() {
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isAnimating = false;

    const getSections = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".snap-section"));

    const getCurrentIndex = (sections: HTMLElement[]) => {
      const scrollPosition = window.scrollY;

      return sections.reduce((closestIndex, section, index) => {
        const closestDistance = Math.abs(sections[closestIndex].offsetTop - scrollPosition);
        const sectionDistance = Math.abs(section.offsetTop - scrollPosition);

        return sectionDistance < closestDistance ? index : closestIndex;
      }, 0);
    };

    const moveToSection = (direction: number) => {
      if (!desktopQuery.matches || reducedMotionQuery.matches || isAnimating) {
        return;
      }

      const sections = getSections();
      if (sections.length === 0) {
        return;
      }

      const currentIndex = getCurrentIndex(sections);
      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        sections.length - 1,
      );

      if (nextIndex === currentIndex) {
        return;
      }

      isAnimating = true;
      sections[nextIndex].scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        isAnimating = false;
      }, 900);
    };

    const shouldIgnoreSnap = (target: EventTarget | null) => {
      if (document.body.dataset.modalOpen === "true") {
        return true;
      }

      return (
        target instanceof HTMLElement &&
        Boolean(target.closest("input, textarea, select, button, a, [data-snap-ignore='true']"))
      );
    };

    const handleWheel = (event: WheelEvent) => {
      if (!desktopQuery.matches || reducedMotionQuery.matches) {
        return;
      }

      if (shouldIgnoreSnap(event.target)) {
        return;
      }

      if (Math.abs(event.deltaY) < 8) {
        return;
      }

      event.preventDefault();
      moveToSection(event.deltaY > 0 ? 1 : -1);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!desktopQuery.matches || reducedMotionQuery.matches) {
        return;
      }

      if (shouldIgnoreSnap(event.target)) {
        return;
      }

      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        moveToSection(1);
      }

      if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        moveToSection(-1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <main>
        <Hero />
        <About />
        <Offer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
