"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#041120] to-[#0f172a] text-white px-4">
      <div className="absolute w-[520px] h-[520px] bg-blue-600/20 blur-[140px] rounded-full top-[-140px] left-[-140px]" />
      <div className="absolute w-[420px] h-[420px] bg-orange-500/20 blur-[130px] rounded-full bottom-[-120px] right-[-120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%)]" />

      <div className="relative z-10 max-w-5xl pt-24 md:pt-28">
        <p className="text-blue-400 tracking-[0.35em] uppercase text-[11px] md:text-sm mb-5">
          Shezelec Electrical
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
          <span className="block">Electricians in Centurion & Laudium</span>
          <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-orange-400 bg-clip-text text-transparent mt-2">
            Premium Electrical Solutions for Homes, Shops & Industry
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
          Trusted electricians in Centurion and Laudium delivering professional
          electrical installations, repairs, maintenance, lighting, compliance
          work and backup power solutions for residential, commercial and
          industrial projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+27798658290"
            className="w-full sm:w-auto bg-[#3281bd] text-white text-base md:text-lg px-8 py-4 rounded-2xl hover:bg-[#3a91d4] transition duration-300 shadow-[0_10px_30px_rgba(50,129,189,0.35)] font-semibold"
          >
            Call Us Now
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto border border-white/20 text-base md:text-lg px-8 py-4 rounded-2xl hover:bg-white/10 transition duration-300 font-semibold"
          >
            View Our Projects
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          <span>Residential Electrical</span>
          <span className="hidden sm:inline">•</span>
          <span>Commercial Installations</span>
          <span className="hidden sm:inline">•</span>
          <span>Industrial Solutions</span>
        </div>
      </div>
    </section>
  );
}