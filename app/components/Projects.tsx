"use client";

import Image from "next/image";

const projects = [
  {
    title: "Retail Shopfitting Electrical",
    image: "/slideshow 2.jpg",
  },
  {
    title: "Solar Power Installation",
    image: "/slideshow 3.jpg",
  },
  {
    title: "Residential Electrical Installation",
    image: "/image1.jpg",
  },
  {
    title: "Industrial Electrical Systems",
    image: "/factory-wiring.jpg",
  },
  {
    title: "Home Wiring & Distribution",
    image: "/slideshow 1.jpg",
  },
  {
    title: "Custom Bedroom Lighting Design",
    image: "/image 4.jpg",
  },
  {
    title: "Luxury Ambient LED Lighting",
    image: "/image 5.jpg",
  },
  {
    title: "Architectural Feature Lighting",
    image: "/image 6.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 md:mb-18 max-w-4xl mx-auto">
          <p className="text-blue-400 tracking-[0.3em] uppercase text-[11px] md:text-sm mb-4">
            Our Portfolio
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Electrical Projects in Centurion & Laudium
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Explore a selection of residential, commercial and industrial
            electrical projects completed with clean workmanship, modern
            finishes and reliable execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
            >
              <div className="relative h-[280px] md:h-[320px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold leading-snug">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}