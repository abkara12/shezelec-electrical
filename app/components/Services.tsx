"use client";

import { Zap, Home, Building2, Factory, Wrench, Sun } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home size={30} />,
      title: "Residential Electrical Services",
      desc: "Professional home electrical services in Centurion and Laudium including lighting installations, rewiring, upgrades, fault finding and safe modern electrical solutions.",
    },
    {
      icon: <Building2 size={30} />,
      title: "Commercial Electrical Installations",
      desc: "Reliable electrical installations for offices, retail stores, business premises and commercial environments with a strong focus on quality and compliance.",
    },
    {
      icon: <Factory size={30} />,
      title: "Industrial Electrical Solutions",
      desc: "Heavy-duty electrical systems, industrial wiring, maintenance and support for factories, workshops and demanding operational environments.",
    },
    {
      icon: <Wrench size={30} />,
      title: "Electrical Repairs & Maintenance",
      desc: "Fast, accurate fault finding, repairs and ongoing maintenance to keep your electrical systems safe, efficient and dependable.",
    },
    {
      icon: <Zap size={30} />,
      title: "Compliance Certificates (COC)",
      desc: "Certified electrical inspections and compliance support for residential and commercial properties in Centurion and Laudium.",
    },
    {
      icon: <Sun size={30} />,
      title: "Solar & Backup Power Systems",
      desc: "Professional backup power and solar-related electrical solutions designed to improve energy reliability for homes and businesses.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#020617] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 md:mb-18 max-w-4xl mx-auto">
          <p className="text-blue-400 tracking-[0.3em] uppercase text-[11px] md:text-sm mb-4">
            What We Do
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Electrical Services in Centurion & Laudium
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Our team provides residential, commercial and industrial electrical
            services in Centurion and Laudium, helping clients with
            installations, repairs, maintenance, compliance work, lighting
            solutions and backup power systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 md:p-8 hover:bg-white/[0.07] transition duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-blue-400 group-hover:text-orange-400 transition duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-snug">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}