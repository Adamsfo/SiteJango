import { MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Venha nos visitar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Estamos esperando você e sua família para um dia inesquecível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="text-center p-6">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 font-display">Telefone</h3>
            <p className="text-muted-foreground font-body">Lilian (65) 9.9307-4619<br />Jeniffer (65) 9.8479-1202</p>
          </div>


          <div className="text-center p-6">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 font-display">Localização</h3>
            <a href="https://maps.app.goo.gl/HicDX1jJwVsUZKnT8" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-body">Ver no Google Maps</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
