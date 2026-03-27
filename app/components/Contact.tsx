"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-[#020617] text-white overflow-hidden"
    >
      <div className="absolute w-[420px] h-[420px] bg-blue-600/10 blur-[120px] rounded-full top-[-120px] right-[-120px]" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-14 md:mb-18 max-w-4xl mx-auto">
          <p className="text-blue-400 tracking-[0.3em] uppercase text-[11px] md:text-sm mb-4">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Contact Electricians in Centurion & Laudium
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Need a reliable electrician in Centurion or Laudium? Contact us
            today for fast, professional electrical services, installations,
            repairs, maintenance and project support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Speak to Our Team
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-blue-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-lg">Call Us</p>
                  <p className="text-gray-400">+27 79 865 8290</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-gray-400">shehzaad.ebrahim@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-lg">Service Area</p>
                  <p className="text-gray-400">
                    Centurion & Laudium, South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] backdrop-blur-xl p-7 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col justify-center text-center md:text-left">
            <p className="text-blue-400 tracking-[0.25em] uppercase text-[11px] md:text-sm mb-4">
              Fast Response
            </p>

            <h3 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight">
              Need Electrical Help Today?
            </h3>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
              Call or WhatsApp us now for quick assistance with residential,
              commercial and industrial electrical work in Centurion and
              Laudium.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="tel:+27798658290"
                className="bg-[#3281bd] px-7 py-4 rounded-2xl hover:bg-[#3a91d4] transition duration-300 font-semibold shadow-[0_10px_30px_rgba(50,129,189,0.35)] text-center"
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
    </section>
  );
}