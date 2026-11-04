import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Workbench from "./components/Workbench.jsx";
import Plans from "./components/Plans.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="ambient" aria-hidden="true" />
      <Nav />
      <main className="main" id="top">
        <div className="container">
          <Hero />
          <Capabilities />
          <Workbench />
          <Plans />
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  );
}
