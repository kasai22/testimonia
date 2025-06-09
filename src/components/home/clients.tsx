'use client';

import Image from 'next/image';

export default function Clients() {
  return (
    <section className="bg-black py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg md:text-xl text-white font-medium mb-10">
          Trusted by teams at over 1,000 of the world’s leading organizations
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {[
            { src: '/logos/dell.png', alt: 'Dell' },
            { src: '/logos/zendesk.png', alt: 'Zendesk' },
            { src: '/logos/rakuten.png', alt: 'Rakuten' },
            { src: '/logos/pacific-funds.png', alt: 'Pacific Funds' },
            { src: '/logos/ncr.png', alt: 'NCR' },
            { src: '/logos/lattice.png', alt: 'Lattice' },
            { src: '/logos/ted.png', alt: 'TED' },
          ].map((logo, i) => (
            <div key={i} className="relative w-[100px] h-[40px] grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
