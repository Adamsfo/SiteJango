import {
  Fish,
  TreePine,
  Utensils,
  Users,
  Umbrella,
  Waves,
  Bed,
} from "lucide-react";
import Gallery from "./Gallery";
import FacebookTimeline from "./FacebookTimeLine";

const features = [
  {
    icon: Fish,
    title: "Pesca Esportiva",
    description:
      "Tanques repletos de várias espécies de peixes enormes para uma pescaria inesquecível.",
  },
  {
    icon: Waves,
    title: "Piscinas e Ambiente Familiar",
    description:
      "Segurança e diversão para crianças e adultos em um ambiente acolhedor e tranquilo.",
  },
  {
    icon: Utensils,
    title: "Restaurante climatizado",
    description:
      "No nosso restaurante você aproveita peixes fresquinhos, fritos na hora, bem temperados e com aquele gostinho irresistível. Tem também pratos da culinária regional, feitos com carinho e perfeitos pra toda a família.",
  },
  {
    icon: Bed,
    title: "Pousada",
    description:
      "Hospedagem confortável e acolhedora para aproveitar ao máximo sua estadia.",
  },
  {
    icon: TreePine,
    title: "Área Verde",
    description:
      "Amplo espaço arborizado com sombra natural, perfeito para relaxar em meio à natureza.",
  },
  {
    icon: Users,
    title: "Eventos & Confraternizações",
    description:
      "Espaço ideal para aniversários, casamentos, encontros de família e confraternizações de empresas.",
  },
  // {
  //   icon: Umbrella,
  //   title: "Quiosques Cobertos",
  //   description: "Quiosques na beira do lago para seu conforto.",
  // },
];

const Features = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-display">
            O que oferecemos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Uma experiência completa de lazer ao ar livre com tudo que você
            precisa para um dia perfeito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-display">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
