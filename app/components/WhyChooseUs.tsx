import { ShieldCheck, Zap, Clock, Award } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck size={30} />,
      title: "Certified & Compliant",
      desc: "All work is completed with careful attention to safety standards, quality requirements and professional electrical compliance.",
    },
    {
      icon: <Zap size={30} />,
      title: "High-Quality Workmanship",
      desc: "We deliver clean installations, durable finishes and reliable electrical performance across residential, commercial and industrial work.",
    },
    {
      icon: <Clock size={30} />,
      title: "Reliable & Responsive",
      desc: "Clients choose us for dependable service, clear communication and a strong commitment to getting the job done properly.",
    },
    {
      icon: <Award size={30} />,
      title: "Trusted Local Expertise",
      desc: "We proudly serve Centurion and Laudium with electrical services tailored to homes, businesses and demanding project environments.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 md:mb-18 max-w-4xl mx-auto">
          <p className="text-blue-400 tracking-[0.3em] uppercase text-[11px] md:text-sm mb-4">
            Why Clients Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Trusted Electricians in Centurion & Laudium
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            We combine technical reliability, premium workmanship and
            professional service to deliver electrical solutions clients can
            trust for residential, commercial and industrial projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 md:p-8 hover:bg-white/[0.07] transition duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-blue-400 group-hover:text-orange-400 transition duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}