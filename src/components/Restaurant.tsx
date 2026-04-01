import {
  UtensilsCrossed,
  Clock,
  Cake,
  Soup,
  Drumstick,
  Utensils,
  Fish,
  GlassWater,
  Wine,
  Beer,
} from "lucide-react";

const Restaurant = () => {
  return (
    <section id="restaurante" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <UtensilsCrossed className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-display">
              Restaurante
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Sabores caseiros com muita variedade para toda a família.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <UtensilsCrossed className="w-10 h-10 text-warm mx-auto mb-4" />
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                Buffet Self-Service
              </h3>
              <p className="text-sm text-muted-foreground font-body mb-3">
                Aos finais de semana e feriados, sirva-se no nosso buffet
                completo com sobremesas por quilo. Não é permitido entrada com
                comida.
              </p>
              <p className="text-sm text-muted-foreground font-body mb-3">
                Horário do Buffet:{" "}
                <strong className="text-foreground">12:00</strong> às{" "}
                <strong className="text-foreground">14:30</strong>
              </p>
              <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full font-display">
                R$ 99,90/kg
              </span>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <Utensils className="w-10 h-10 text-warm mx-auto mb-4" />
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                À la Carte
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Durante a semana, opções à la carte. Variedade de pratos e
                porções deliciosos. Essa opção é servida aos finais de semana e
                feriados a partir das 14:00, após o encerramento do buffet.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <Fish className="w-10 h-10 text-warm mx-auto mb-4" />
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                Porções
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Servimos porções variadas, perfeitas para compartilhar. Ideal
                para petiscar com os amigos ou para um lanche rápido, das 08:00
                às 17:00.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <Beer className="w-10 h-10 text-warm mx-auto mb-4" />
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                Bebidas
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Não é permitido levar bebidas e nem caixa térmica, nós temos uma
                seleção de cervejas, drinks, sucos e refrigerantes para
                acompanhar sua refeição e aproveitar o seu dia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
