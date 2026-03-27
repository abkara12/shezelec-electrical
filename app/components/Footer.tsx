"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10 md:gap-12">
        <div>
          <div className="mb-5">
            <Image
              src="/logo.jpg"
              alt="Shezelec Electrical Logo"
              width={90}
              height={90}
              className="rounded-2xl object-cover border border-white/10 shadow-sm"
            />
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
            Professional electricians in Centurion and Laudium offering
            residential, commercial and industrial electrical services,
            including installations, repairs, maintenance and backup power
            solutions.
          </p>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5">Quick Links</h3>

          <div className="flex flex-col gap-3 text-gray-400 text-sm md:text-base">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/services" className="hover:text-white transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5">Contact</h3>

          <div className="space-y-4 text-gray-400 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <Phone size={17} className="text-blue-400" />
              <span>+27 79 865 8290</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={17} className="text-blue-400" />
              <span>shehzaad.ebrahim@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={17} className="text-blue-400 mt-1" />
              <span>Centurion & Laudium, South Africa</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-gray-500 text-sm py-5 px-4">
        © {new Date().getFullYear()} Shezelec Electrical. All rights reserved.
      </div>
    </footer>
  );
}