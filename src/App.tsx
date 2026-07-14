import About from "./sections/About";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Offer from "./sections/Offer";

function App() {
  return (
    <div className="min-h-dvh bg-[var(--color-canvas)] text-[var(--color-ink)]">
      <main>
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
