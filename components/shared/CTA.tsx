export default function CTA() {
  return (
    <section className="py-28 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-(--gold)">
          ¿Listo para tu próximo corte?
        </h2>

        <p className="text-lg mb-12 text-gray-300">
          Reserva tu hora ahora y vive la experiencia de una barbería premium.
        </p>

        <a
          href="https://tuu.cl/maty-barber-house"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-(--gold) text-black px-14 py-5 rounded-xl text-lg font-semibold shadow-2xl hover:scale-105 transition"
        >
          Reservar hora
        </a>
      </div>
    </section>
  );
}
