import { BedDouble, Clock, Users, Coffee } from "lucide-react";

const prices = [
  { label: "Suíte Solteiro", value: "R$ 300" },
  { label: "Suíte Casal ", value: "a partir de R$ 400" },
  { label: "Adulto extra", value: "R$ 150" },
  { label: "Criança 0–5 anos", value: "Grátis (cama opcional R$ 60)" },
  { label: "Criança 6–10 anos", value: "R$ 120" },
];

const Pousada = () => {
  return (
    <section id="pousada" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <BedDouble className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-display">
              Pousada
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Suítes confortáveis com ar-condicionado e TV, para até 6 pessoas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <BedDouble className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-display mb-1">
                    Suítes Equipadas
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Todas as suítes possuem ar-condicionado e TV, roupa de cama
                    e banho para o seu total conforto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-display mb-1">
                    Capacidade
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Acomoda até 6 pessoas por suíte, ideal para famílias e
                    grupos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-display mb-1">
                    Café da Manhã Incluso
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    A diária inclui café da manhã e day use para aproveitar a
                    sua estadia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-display mb-1">
                    Horários
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Check-in a partir das <strong>16:00</strong> · Check-out até
                    as <strong>13:00</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Price table */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <h3 className="text-lg font-semibold text-primary-foreground font-display">
                  Valores
                </h3>
              </div>
              <div className="divide-y divide-border">
                {prices.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center px-6 py-4"
                  >
                    <span className="text-sm text-foreground font-body">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-primary font-display whitespace-nowrap ml-4">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pousada;
