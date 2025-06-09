'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full fixed top-0  z-50 flex h-[72px] px-[10rem] justify-between items-center bg-white/5 backdrop-blur-md">
      {/* Logo */}
      <Link href="/" className="text-white font-bold text-xl">
        Testimonia
      </Link>

      {/* Navigation links */}
      <nav className="hidden md:flex gap-10 text-white text-sm font-medium">
        <a href="#features" className="hover:text-purple-400">Features</a>
        <a href="#how-it-works" className="hover:text-purple-400">How It Works</a>
        <a href="#why-choose-us" className="hover:text-purple-400">Why Choose Us</a>
      </nav>

      {/* Auth Button */}
      <Link
        href="/login"
        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-semibold"
      >
        Sign In / Register
      </Link>
    </header>
  );
}
