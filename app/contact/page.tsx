import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Electricians in Centurion & Laudium",
  description:
    "Contact our professional electricians in Centurion and Laudium for residential, commercial and industrial electrical services, installations, repairs, maintenance and backup power solutions.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#020617] text-white">
        {/* HERO */}
       <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#041120] to-[#0f172a] text-white px-4">
      <div className="absolute w-[520px] h-[520px] bg-blue-600/20 blur-[140px] rounded-full top-[-140px] left-[-140px]" />
      <div className="absolute w-[420px] h-[420px] bg-orange-500/20 blur-[130px] rounded-full bottom-[-120px] right-[-120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%)]" />


          <div className="relative z-10 max-w-5xl pt-24 md:pt-28">
        <p className="text-blue-400 tracking-[0.35em] uppercase text-[11px] md:text-sm mb-5">
              Contact Our Team
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Contact</span>
              <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
               Shezelec Electrical
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch for professional electrical services, installations,
              repairs, maintenance, lighting solutions and backup power support
              for residential, commercial and industrial projects.
            </p>
          </div>
        </section>

        {/* CONTACT GRID */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
            {/* LEFT */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 md:p-8">
              <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-3">
                Get In Touch
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Fast, Professional Electrical Support
              </h2>

              <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-8">
                If you need a reliable electrician in Centurion or Laudium,
                contact us today. Whether it is a residential installation,
                commercial electrical project, industrial requirement, repair,
                maintenance issue or backup power solution, we are ready to
                assist.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-400">+27 79 865 8290</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-400">shehzaad.ebrahim@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Service Area</h3>
                    <p className="text-gray-400">
                      Centurion & Laudium, South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-400">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Availability</h3>
                    <p className="text-gray-400">
                      Contact us for project enquiries, quotations and electrical support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative rounded-3xl overflow-hidden min-h-[320px] md:min-h-[100%] shadow-2xl">
              <Image
                src="/slideshow 3.jpg"
                alt="Contact electricians in Centurion and Laudium"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/50 to-transparent" />

              <div className="absolute inset-0 flex items-end">
                <div className="p-6 md:p-8 w-full">
                  <div className="rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md p-6">
                    <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-3">
                      Quick Action
                    </p>

                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                      Speak to Our Team Today
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      For fast response times, call or WhatsApp us directly and
                      let us know what electrical service you need.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="tel:+27798658290"
                        className="bg-blue-600 px-6 py-3 rounded-2xl hover:bg-blue-500 transition shadow-lg font-medium text-center"
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXTRA SEO / TRUST SECTION */}
        <section className="max-w-6xl mx-auto px-4 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-3">
                Why Contact Us
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Reliable Electrical Services for Every Type of Project
              </h2>

              <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-5">
                Clients searching for electricians in Centurion or electricians
                in Laudium need a company that is professional, responsive and
                trusted to deliver quality workmanship. We assist with
                residential electrical services, commercial electrical
                installations, industrial electrical projects, repairs,
                maintenance and power-related upgrades.
              </p>

              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                Whether you are planning a new installation, upgrading an
                existing setup or need urgent professional assistance, we are
                ready to help with reliable electrical solutions tailored to
                your needs.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-5">
                What You Can Contact Us For
              </h3>

              <div className="space-y-4 text-gray-300">
                <div className="border-b border-white/10 pb-4">
                  Residential electrical installations and upgrades
                </div>
                <div className="border-b border-white/10 pb-4">
                  Commercial electrical work for shops, offices and business premises
                </div>
                <div className="border-b border-white/10 pb-4">
                  Industrial electrical systems and factory wiring
                </div>
                <div className="border-b border-white/10 pb-4">
                  Electrical repairs, fault finding and maintenance
                </div>
                <div className="border-b border-white/10 pb-4">
                  Compliance-related electrical work
                </div>
                <div>Backup power and solar-related electrical solutions</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}