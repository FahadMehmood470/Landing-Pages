import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}
