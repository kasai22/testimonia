'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-black text-white py-[10rem] px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1
          className="text-2xl md:text-4xl font-bold leading-tight mb-6"
          style={{
            background: 'linear-gradient(146deg, #ECECEC 20.35%, rgba(236, 236, 236, 0.00) 128.73%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          The Easiest Way to Collect and Manage<br />
          Testimonials with One Powerful Dashboard
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Build trust, boost credibility, and let your happy customers speak for you —
          with a clean, intuitive testimonial dashboard built for simplicity and scale.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full font-medium transition">
            Sign-up
          </button>
          <button className="border border-gray-500 hover:border-white text-white px-6 py-3 rounded-full font-medium transition">
            Talk to an expert
          </button>
        </div>

        {/* Dashboard Image */}
        <div className="mt-16 flex justify-center">
          <div
            className="rounded-[24px] overflow-hidden"
            style={{
              boxShadow: `
                inset 0px 0.5px 0px rgba(255, 255, 255, 0.5),
                0px -2px 10px rgba(233, 223, 255, 0.3),
                0px -2px 40px rgba(187, 155, 255, 0.15)
              `,
            }}
          >
            <Image
              src="/hero.png" // Replace with your path
              alt="Testimonial Dashboard"
              width={1200}
              height={700}
              className="w-[80rem] h-auto rounded-[24px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
