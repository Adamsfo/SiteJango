import { Check } from "lucide-react";

const plans = [
  {
    name: "Pesca Simples",
    price: "R$ 30",
    unit: "/pessoa",
    description: "Ideal para pescadores casuais",
    features: [
      "Acesso ao tanque principal",
      "Vara de pesca inclusa",
      "Isca inclusa",
      "Estacionamento gratuito",
    ],
    highlight: false,
  },
  {
    name: "Day Use Completo",
    price: "R$ 60",
    unit: "/pessoa",
    description: "O pacote mais popular",
    features: [
      "Acesso a todos os tanques",
      "Vara de pesca e isca",
      "Uso do quiosque",
      "Churrasqueira inclusa",
      "Área de lazer",
      "Estacionamento gratuito",
    ],
    highlight: true,
  },
  {
    name: "Evento Privado",
    price: "Consulte",
    unit: "",
    description: "Para grupos e confraternizações",
    features: [
      "Espaço exclusivo",
      "Personalização do evento",
      "Equipe de apoio",
      "Buffet opcional",
      "Até 100 convidados",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Nossos Pacotes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Opções para todos os gostos e bolsos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 border transition-shadow ${
                plan.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-xl scale-105"
                  : "bg-card text-foreground border-border hover:shadow-lg"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2 font-display">{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold font-display">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.unit}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-body">
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-warm" : "text-primary"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className={`block text-center py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 ${
                  plan.highlight
                    ? "bg-warm text-warm-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Reservar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
