import { useState, useRef } from "react";

// 🔥 carrega automaticamente todas imagens da pasta
const images = Object.values(
  import.meta.glob<{ default: string }>(
    "/public/galeria/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      import: "default",
    },
  ),
) as unknown as string[];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  const startX = useRef(0); // 👈 NOVO

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // 👇 NOVO: swipe start
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  // 👇 NOVO: swipe end
  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      next(); // esquerda → próxima
    } else if (diff < -50) {
      prev(); // direita → anterior
    }
  };

  // segurança caso não tenha imagens
  if (!images.length) {
    return (
      <section className="py-20 text-center">
        <p className="text-muted-foreground">
          Nenhuma imagem encontrada na pasta /public/galeria
        </p>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-16 bg-background text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 font-display">
          Galeria
        </h2>

        <div className="max-w-4xl mx-auto">
          <img
            src={images[index] as string}
            alt={`Imagem ${index + 1}`}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg cursor-pointer"
            onClick={() => setZoom(true)}
          />

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="px-5 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
            >
              ← Anterior
            </button>

            <button
              onClick={next}
              className="px-5 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
            >
              Próxima →
            </button>
          </div>

          {/* 🔢 indicador */}
          <p className="mt-4 text-sm text-muted-foreground">
            {index + 1} / {images.length}
          </p>
        </div>
      </div>

      {/* 🔥 MODAL ZOOM COM SWIPE */}
      {zoom && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setZoom(false)}
        >
          {/* BOTÃO ANTERIOR */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 md:left-10 text-white text-3xl bg-black/50 px-4 py-2 rounded-full hover:bg-black/70"
          >
            ←
          </button>

          {/* IMAGEM */}
          <img
            src={images[index]}
            className="max-w-full max-h-full object-contain"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => setZoom(false)}
          />

          {/* BOTÃO PRÓXIMO */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 md:right-10 text-white text-3xl bg-black/50 px-4 py-2 rounded-full hover:bg-black/70"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
