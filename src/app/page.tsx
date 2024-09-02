import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import InfiniteLogo from "@/sections/InfiniteLogo";
import Pricing from "@/sections/Pricing";
import ProductShowcase from "@/sections/ProductShowcase";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InfiniteLogo />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
