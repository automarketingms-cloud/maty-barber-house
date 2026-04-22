import Map from "@/components/shared/Map";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Marca */}
        <div>
          <h3 className="text-2xl font-bold text-(--gold) mb-4">
            MATY BARBER HOUSE
          </h3>
          <p className="text-gray-400">
            Estilo, precisión y experiencia en cada corte.
          </p>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="font-semibold mb-4">Horarios</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Lunes a Viernes: 08:00 – 19:00</li>
            <li>Sábado: 08:00 – 18:00</li>
            <li>Domingo: Cerrado</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <ul className="text-gray-400 space-y-2 mb-6">
            <li>WhatsApp: +56 9 5780 9086</li>
            <li>Tarapacá 1352, Tierras Blancas, Coquimbo, Chile</li>
            <li>Instagram: @maty_barber_house</li>
          </ul>

          <Map />
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} Mati Barber House. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
