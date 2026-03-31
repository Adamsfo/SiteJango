import { Sun, AlertCircle, UtensilsCrossed } from "lucide-react";
import jangoIngressosLogo from "@/assets/jango-ingressos-logo.png";

const DayUse = () => {
  return (
    <section id="dayuse" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Sun className="w-12 h-12 text-warm mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Day Use
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto mb-10">
            Um dia inteiro de lazer, natureza e diversão no Pesque Pague Jango
          </p>

          <div className="bg-card rounded-xl border border-border p-8 md:p-10 mb-8">
            <div className="mb-6">
              <span className="text-sm text-muted-foreground font-body">a partir de</span>
              <div>
                <span className="text-5xl font-bold text-primary font-display">R$ 35</span>
                <span className="text-muted-foreground font-body ml-2">/pessoa</span>
              </div>
              <p className="text-sm text-muted-foreground font-body mt-1">Valores e opções disponíveis no site</p>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground font-body max-w-md mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <UtensilsCrossed className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Almoço <strong className="text-foreground">não incluso</strong> — disponível separadamente no restaurante</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <AlertCircle className="w-5 h-5 text-warm flex-shrink-0" />
                <span>Fechado às <strong className="text-foreground">quartas-feiras</strong> (exceto feriados)</span>
              </div>
            </div>

            <a
              href="https://www.jangoingressos.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity mt-8"
            >
              <img src={jangoIngressosLogo} alt="Jango Ingressos" className="h-8" />
              Comprar Day Use
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayUse;
