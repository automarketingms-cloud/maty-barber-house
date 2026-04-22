import Image from "next/image";
import ScrollLink from "@/components/ScrollLink";

export default function Navbar() {
  return (
    <nav className="w-full border-b text-(--gold) p-4 flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="flex items-center">
        <Image
          src="/gallery/logo.jpeg"
          alt="Logo Barber Studio"
          width={140}
          height={60}
          className="h-18 w-auto border border-(--gold) p-1"
          priority
        />
      </div>

      <div className="flex gap-6">
        <ScrollLink href="/#home">Inicio</ScrollLink>
        <ScrollLink href="/#services">Servicios</ScrollLink>
        <ScrollLink href="/#gallery">Galería</ScrollLink>
        <ScrollLink href="/#course">Curso Barberia</ScrollLink>
        <ScrollLink href="/#contact">Contacto</ScrollLink>
      </div>
    </nav>
  );
}
