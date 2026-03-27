import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Electricians in Centurion & Laudium | Electrical Services",
  description:
    "Professional electricians in Centurion and Laudium offering residential, commercial and industrial electrical services, including installations, repairs, maintenance, lighting, compliance certificates and solar solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#020617] text-white">
        {/* HERO */}
        <section className="relative min-h-[72vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] px-4 pt-28 pb-20">
          <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
          <div className="absolute w-[420px] h-[420px] bg-orange-500/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

          <div className="relative z-10 max-w-5xl">
            <p className="text-blue-400 tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
              Professional Electrical Services
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Electrical Services in</span>
              <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
               Centurion & Laudium You Can Rely On
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We specialise in residential, commercial and industrial electrical services, offering professional installations, fault finding, maintenance, compliance certificates and energy solutions you can depend on.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="tel:+27798658290"
                className="bg-blue-600 px-7 py-3 rounded-2xl hover:bg-blue-500 transition shadow-lg font-medium"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/27798658290"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-7 py-4 rounded-2xl hover:bg-white/10 transition duration-300 font-semibold text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Electrical Services Designed for Safety, Performance & Reliability
              </h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-5">
                When people search for electricians in Centurion or electricians in
                Laudium, they want a company they can trust to deliver clean,
                compliant, high-quality work. Our team handles everything from
                residential lighting and rewiring to commercial electrical
                installations, industrial electrical systems, repairs, maintenance,
                and solar-ready backup solutions.
              </p>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                Every project is approached with attention to detail, professional
                workmanship, and a strong focus on long-term reliability. Whether
                you need a trusted electrician for your home, office, shop, factory
                or development, we provide tailored electrical services that are
                efficient, safe and built to last.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-5">
                Why Clients Choose Our Electrical Team
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="border-b border-white/10 pb-4">
                  Residential, commercial and industrial experience
                </div>
                <div className="border-b border-white/10 pb-4">
                  Clean installations with a premium finish
                </div>
                <div className="border-b border-white/10 pb-4">
                  Fast fault finding and dependable maintenance
                </div>
                <div className="border-b border-white/10 pb-4">
                  Compliance-focused electrical work
                </div>
                <div>Service coverage across Centurion & Laudium</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-6xl mx-auto px-4 pb-20 md:pb-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Electrical Services in Centurion & Laudium
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From modern home lighting to large-scale industrial electrical work,
              we provide professional solutions tailored to each environment.
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {/* 1 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1 md:order-1">
                <div className="relative h-[260px] sm:h-[320px] md:h-[360px] w-full rounded-3xl overflow-hidden group shadow-2xl">
                  <Image
                    src="/image1.jpg"
                    alt="Residential electrical services in Centurion"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
              </div>

              <div className="order-2 md:order-2">
                <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-3">
                  Residential
                </p>
                <h3 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight">
                  Residential Electrical Services
                </h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  We provide professional residential electrical services in
                  Centurion and Laudium, including lighting installations,
                  rewiring, fault finding, plug and switch upgrades, distribution
                  board work, and modern electrical improvements for homes. Our
                  goal is to deliver safe, clean and efficient electrical solutions
                  that improve comfort, functionality and peace of mind.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-white/10" />

            {/* 2 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-3">
                  Commercial
                </p>
                <h3 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight">
                  Commercial Electrical Installations
                </h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  Our commercial electrical services are ideal for offices, retail
                  stores, shopping spaces, restaurants and business premises that
                  need reliable power, lighting and compliant electrical systems.
                  We focus on durable workmanship, professional finishes and
                  electrical layouts that support the day-to-day demands of modern
                  commercial environments.
                </p>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative h-[260px] sm:h-[320px] md:h-[360px] w-full rounded-3xl overflow-hidden group shadow-2xl">
                  <Image
                    src="/slideshow 2.jpg"
                    alt="Commercial electrical installations in Laudium and Centurion"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-white/10" />

            {/* 3 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1 md:order-1">
                <div className="relative h-[260px] sm:h-[320px] md:h-[360px] w-full rounded-3xl overflow-hidden group shadow-2xl">
                  <Image
                    src="/factory-wiring.jpg"
                    alt="Industrial electrical solutions in Centurion"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
              </div>

              <div className="order-2 md:order-2">
                <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-3">
                  Industrial
                </p>
                <h3 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight">
                  Industrial Electrical Solutions
                </h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  We handle industrial electrical work for factories, workshops and
                  demanding operational spaces that require robust, efficient and
                  dependable systems. From heavy-duty wiring to equipment-related
                  electrical setups and maintenance support, we provide industrial
                  electrical solutions with a strong focus on safety, continuity and
                  performance.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-white/10" />

            {/* 4 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-3">
                  Repairs
                </p>
                <h3 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight">
                  Electrical Repairs & Maintenance
                </h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  Fast, accurate fault finding and dependable electrical repairs are
                  essential for homes and businesses. We provide maintenance and
                  repair services that help prevent downtime, improve safety and
                  keep electrical systems operating properly. Whether it is a minor
                  issue or an ongoing maintenance requirement, we respond with
                  professionalism and care.
                </p>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative h-[260px] sm:h-[320px] md:h-[360px] w-full rounded-3xl overflow-hidden group shadow-2xl">
                  <Image
                    src="/image 4.jpg"
                    alt="Electrical repairs and maintenance in Centurion and Laudium"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-white/10" />

            {/* 5 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1 md:order-1">
                <div className="relative h-[260px] sm:h-[320px] md:h-[360px] w-full rounded-3xl overflow-hidden group shadow-2xl">
                  <Image
                    src="/image 6.jpg"
                    alt="Electrical compliance certificates in Laudium"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
              </div>

              <div className="order-2 md:order-2">
                <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-3">
                  Compliance
                </p>
                <h3 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight">
                  Compliance Certificates (COC)
                </h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  We assist with electrical compliance requirements for residential
                  and commercial properties, ensuring that installations meet the
                  relevant standards and safety expectations. A properly handled
                  compliance process adds peace of mind and helps property owners
                  move forward with confidence when selling, upgrading or managing
                  their premises.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-white/10" />

            {/* 6 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-3">
                  Backup Power
                </p>
                <h3 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight">
                  Solar & Backup Power Systems
                </h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  We provide solar-ready and backup power electrical solutions for
                  homes and businesses that need greater energy reliability. From
                  inverter-related electrical setups to backup system integration,
                  our work is designed to help clients maintain functionality during
                  outages while preparing for smarter long-term energy use.
                </p>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative h-[260px] sm:h-[320px] md:h-[360px] w-full rounded-3xl overflow-hidden group shadow-2xl">
                  <Image
                    src="/slideshow 3.jpg"
                    alt="Solar and backup power systems in Centurion"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20 md:py-28 px-4 border-t border-white/10 bg-gradient-to-br from-[#020617] via-[#06111f] to-[#0f172a]">
          <div className="absolute w-[380px] h-[380px] bg-blue-600/15 blur-[120px] rounded-full top-[-120px] right-[-80px]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              Need a Trusted Electrician in Centurion or Laudium?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
              Contact us today for professional electrical services, reliable
              workmanship and fast response times for residential, commercial and
              industrial projects.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="tel:+27798658290"
                className="bg-blue-600 px-7 py-3 rounded-2xl hover:bg-blue-500 transition shadow-lg font-medium"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/27798658290"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-7 py-4 rounded-2xl hover:bg-white/10 transition duration-300 font-semibold text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}