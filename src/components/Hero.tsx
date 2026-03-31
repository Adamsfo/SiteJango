import heroImage from "@/assets/hero-fishing.jpg";
import jangoIngressosLogo from "@/assets/jango-ingressos-logo.png";
import logoJango from "@/assets/logo-jango.png";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Lago de pesca ao pôr do sol no Pesque Pague Jango"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
          <img src={logoJango} alt="Pesque Pague Jango" className="h-24 md:h-32" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground text-shadow-hero mb-4 animate-fade-in-up font-display">
          Pesque Pague Jango
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary font-light mb-10 animate-fade-in-up font-body" style={{ animationDelay: "0.2s" }}>
          Diversão, natureza, piscinas e muitos peixes
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://www.jangoingressos.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <img src={jangoIngressosLogo} alt="Jango Ingressos" className="h-10" />
            Comprar Day Use
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 bg-warm text-warm-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <MapPin className="w-5 h-5" />
            Como chegar
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-secondary flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
