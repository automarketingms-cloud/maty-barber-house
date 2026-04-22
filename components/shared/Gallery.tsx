import Image from "next/image";

export default function Gallery() {
  const images = [
    "/gallery/image1.jpeg",
    "/gallery/image2.jpeg",
    "/gallery/image3.jpeg",
    "/gallery/image4.jpeg",
    "/gallery/image5.jpeg",
    "/gallery/image6.jpeg",
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-(--gold)">
          Trabajos realizados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-80 overflow-hidden rounded-xl group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw,
                       (max-width: 768px) 50vw,
                       33vw"
                className="object-cover transition duration-500 group-hover:scale-110"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
