'use client'

import Image from 'next/image'
import React from 'react'

const features = [
  {
    title: 'Collect Testimonials In Minutes',
    description: 'Get up and running fast with our user-friendly testimonial collection tools.',
    icon: '/icons/collect.png',
  },
  {
    code: `export const mintToken = async () => {
    const token = await DigitalToken.create({ name: "TrustToken" });
    await token.mint(user.address);
  }`,
  },
  {
    title: 'Visualize Engagement',
    description: 'Get insights at a glance with stunning data visuals that help you track feedback and trends.',
    icon: '/icons/chart.png',
    image: '/hero.png', // ⬅️ previously 4th card
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Features that <span className="text-purple-400">work for your future.</span>
        </h2>
        <p className="text-gray-300 mt-2">
          Check out our amazing features and experience the power of Vaultflow for yourself.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-[20px] p-6 bg-gradient-to-b from-white/5 to-white/0 shadow-[0px_-2px_10px_rgba(233,223,255,0.3),_0px_-2px_40px_rgba(187,155,255,0.15),_0px_0.5px_0px_rgba(255,255,255,0.5)_inset] border border-white/10 min-h-[220px] relative overflow-hidden"
          >
            {feature.code ? (
              <div className="mb-4 font-mono text-sm text-gray-200">
                <div className="mb-2 text-gray-400 font-semibold">DigitalToken.js</div>
                <pre className="whitespace-pre-wrap">{feature.code}</pre>
              </div>
            ) : (
              <>
                <div className="flex items-start gap-4 mb-4">
                  {feature.icon && (
                    <div className="relative w-10 h-10">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
                {feature.image && (
                  <div className="relative w-full h-48 mt-4 rounded-[16px] overflow-hidden">
                    <Image
                      src={feature.image}
                      alt="Feature visual"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
