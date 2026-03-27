import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "About Us | Electricians in Centurion & Laudium",
  description:
    "Learn more about our electrical company serving Centurion and Laudium with professional residential, commercial and industrial electrical services.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#020617] text-white">
        {/* HERO */}
       <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#041120] to-[#0f172a] text-white px-4">
      <div className="absolute w-[520px] h-[520px] bg-blue-600/20 blur-[140px] rounded-full top-[-140px] left-[-140px]" />
      <div className="absolute w-[420px] h-[420px] bg-orange-500/20 blur-[130px] rounded-full bottom-[-120px] right-[-120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%)]" />

          <div className="relative z-10 max-w-5xl">
            <p className="text-blue-400 tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
              About Our Company
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Trusted Electricians in</span>
              <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Centurion & Laudium
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We provide professional electrical services for homes, businesses
              and industrial environments, with a strong focus on quality,
              safety, reliability and clean workmanship.
            </p>
          </div>
        </section>

        {/* COMPANY INTRO */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Professional Electrical Solutions Backed by Experience
              </h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-5">
                Our company is built on professionalism, dependable service and
                a commitment to delivering high-quality electrical work across
                Centurion and Laudium. We work on residential, commercial and
                industrial projects, helping clients with installations,
                upgrades, repairs, maintenance and power-related solutions.
              </p>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                Whether the project is a modern home lighting installation, a
                retail electrical fit-out, a factory wiring job or a compliance
                requirement, we approach every project with attention to detail,
                technical care and a standard of workmanship that reflects the
                level of our brand.
              </p>
            </div>

            <div className="relative h-[280px] sm:h-[360px] md:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/slideshow 1.jpg"
                alt="Professional electricians in Centurion and Laudium"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
            </div>
          </div>
        </section>

        {/* VALUES / DIFFERENCE */}
        <section className="max-w-6xl mx-auto px-4 pb-20 md:pb-28">
          <div className="text-center mb-14">
            <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-3">
              Our Standard
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Sets Our Electrical Company Apart
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We combine clean execution, technical reliability and client-first
              service to deliver electrical work that is built for performance
              and long-term confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Quality Workmanship</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Every installation and repair is completed with care, precision
                and attention to a clean, professional finish.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Safety Focused</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                We prioritize safe electrical practices and compliant work
                across residential, commercial and industrial environments.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Reliable Service</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Clients rely on us for consistent service, honest workmanship
                and dependable electrical support when it matters most.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Wide Project Scope</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                From homes and retail spaces to factories and backup power
                systems, we handle projects of different sizes and complexities.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS / SEO BLOCK */}
        <section className="max-w-6xl mx-auto px-4 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="relative h-[280px] sm:h-[360px] md:h-[440px] w-full rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-1">
              <Image
                src="/slideshow 2.jpg"
                alt="Electrical company serving Centurion and Laudium"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
            </div>

            <div className="order-2 lg:order-2">
              <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-3">
                Service Areas
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Serving Clients Across Centurion & Laudium
              </h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-5">
                We proudly provide electrical services in Centurion and Laudium,
                helping homeowners, businesses and industrial clients with
                professional installations, repairs, maintenance and upgrades.
                Our local service focus allows us to respond with a better
                understanding of client needs and project expectations in the
                area.
              </p>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                For clients searching online for electricians in Centurion,
                electricians in Laudium, electrical contractors near Centurion,
                or reliable electrical services in Laudium, our goal is to be
                the company known for premium workmanship, trustworthy service
                and long-term value.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20 md:py-28 px-4 border-t border-white/10 bg-gradient-to-br from-[#020617] via-[#06111f] to-[#0f172a]">
          <div className="absolute w-[380px] h-[380px] bg-blue-600/15 blur-[120px] rounded-full top-[-120px] right-[-80px]" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              Looking for a Reliable Electrician?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
              Contact us today for professional electrical services in
              Centurion and Laudium for residential, commercial and industrial
              projects.
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