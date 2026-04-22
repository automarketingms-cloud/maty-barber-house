export default function Course() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-(--gold)">
          Curso de Barbería Inicial
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-neutral-100 p-10 shadow-xl border-t-4 border-(--gold) hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-6">¿Qué aprenderás?</h3>
            <p className="text-gray-700 leading-relaxed">
              Aprenderás las mejores técnicas para lograr un cambio de imagen
              exitoso y brindar una excelente atención al cliente desde el
              primer día.
            </p>
          </div>

          <div className="bg-neutral-100 p-10 shadow-xl border-t-4 border-(--gold) hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-6">Detalles del curso</h3>
            <p className="text-gray-700 leading-relaxed">
              💥 <strong>Duración:</strong> 1 mes, 3 clases por semana (15
              clases). Las primeras dos clases son teóricas y luego prácticas
              con modelos reales.
              <br />
              <br />
              💥 <strong>Horarios:</strong> Entre 10:00 a.m. y 7:00 p.m., según
              disponibilidad del alumno. Cada clase dura 1 hora y 15 minutos.
            </p>
          </div>

          <div className="bg-neutral-100 p-10 shadow-xl border-t-4 border-(--gold) hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-6">Incluye</h3>
            <p className="text-gray-700 leading-relaxed">
              💥 Kit de materiales necesarios:
              <br />
              Máquinas de cortar cabello (clipper, trimmer y shaver).
              <br />
              <br />
              💥 <strong>Valor:</strong> $220.000
              <br />
              Incluye certificado de aprobación impreso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
