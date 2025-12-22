import './App.css'
import Hero from "./sections/Hero";
import About from "./sections/About";
import Offer from "./sections/Offer";
import Footer from "./sections/Footer";

function App() {

  return (
   <div className="min-h-dvh bg-white text-slate-900">
      <Hero />
      <About />
      <Offer />
      <Footer />
    </div>
  )
}

export default App
