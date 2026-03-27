"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#020617]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Shezelec Electrical Logo"
            width={85}
            height={85}
            className="rounded-2xl object-cover border border-white/15 shadow-md"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
          <Link href="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition duration-300">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-400 transition duration-300">
            Services
          </Link>
          <Link href="#projects" className="hover:text-blue-400 transition duration-300">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition duration-300">
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-t border-white/10 shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5 text-white text-lg">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-white/10 hover:text-blue-400 transition duration-300 tracking-wide"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-white/10 hover:text-blue-400 transition duration-300 tracking-wide"
          >
            About
          </Link>

          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-white/10 hover:text-blue-400 transition duration-300 tracking-wide"
          >
            Services
          </Link>

          <Link
            href="#projects"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-white/10 hover:text-blue-400 transition duration-300 tracking-wide"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="py-3 hover:text-blue-400 transition duration-300 tracking-wide"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}