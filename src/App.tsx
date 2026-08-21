import About from "./sections/About";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Offer from "./sections/Offer";
import Turnos from "./sections/Turnos";

function App() {
  return (
    <div className="min-h-dvh bg-[var(--color-canvas)] text-[var(--color-ink)]">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Turnos />
        <About />
        <Offer />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
