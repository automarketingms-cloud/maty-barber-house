import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Fondo */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/hero.jpeg"
          alt="Barbería"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Estilo que habla por ti
          </h1>

          <p className="text-xl text-neutral-200 mb-10">
            Cortes modernos, clásicos y la mejor experiencia de barbería.
          </p>

          <a
            href="https://tuu.cl/maty-barber-house"
            target="_blank"
            className="inline-block bg-(--gold) text-black px-10 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition"
          >
            Reservar hora
          </a>
        </div>
      </div>
    </section>
  );
}
