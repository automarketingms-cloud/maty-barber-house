export default function Services() {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-(--gold) mb-16">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            {
              title: "Corte de cabello",
              desc: "Incluye cejas y líneas para un acabado limpio y definido.",
              price: "$14.000",
            },
            {
              title: "Corte de cabello + barba",
              desc: "Corte profesional acompañado de perfilado y cuidado de barba.",
              price: "$17.000",
            },
            {
              title: "Perfilado de barba",
              desc: "Diseño y definición de barba para un look ordenado y prolijo.",
              price: "$7.000",
            },
            {
              title: "Limpieza facial",
              desc: "Tratamiento facial que elimina impurezas y revitaliza la piel.",
              price: "$10.000",
            },
            {
              title: "Servicios premium",
              desc: "Corte de cabello, cejas, barba, limpieza facial y aplicación de productos profesionales para una experiencia completa.",
              price: "$25.000",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-neutral-800 h-80 p-6 shadow-xl border-t-4 border-(--gold)
              flex flex-col justify-between text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>

              <p className="text-gray-400 text-sm px-2">{s.desc}</p>

              <span className="text-2xl font-bold text-(--gold)">
                {s.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
