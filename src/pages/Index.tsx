import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Fishing from "@/components/Fishing";
import Pousada from "@/components/Pousada";
import Restaurant from "@/components/Restaurant";
import DayUse from "@/components/DayUse";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <DayUse />
      <Fishing />
      <Pousada />
      <Restaurant />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
