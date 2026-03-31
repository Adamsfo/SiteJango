import { Fish, Camera, Scale, Ban } from "lucide-react";

const Fishing = () => {
  return (
    <section id="pesca" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Fish className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-display">
              Pesque e Solte
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Pesca esportiva para quem ama a natureza e a emoção de fisgar um grande peixe!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <Scale className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                Pesque, Pese e Meça
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Pesque seu peixe, pese, meça e tire fotos incríveis para registrar o momento!
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <Camera className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                Fotos & Recordações
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Registre cada conquista! Tire fotos com seus troféus antes de devolver ao lago.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
              <Ban className="w-10 h-10 text-warm mx-auto mb-4" />
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                Não Vendemos Peixes
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Praticamos exclusivamente a pesca esportiva. Todos os peixes são devolvidos ao lago com segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fishing;
