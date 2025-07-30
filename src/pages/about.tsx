// src/pages/about.tsx
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Layout from '@/components/Layout'

gsap.registerPlugin(ScrollTrigger)

const AboutContent: React.FC = () => {
  useEffect(() => {
    const elems = gsap.utils.toArray<HTMLElement>('.fade-up')
    gsap.from(elems, {
      scrollTrigger: {
        trigger: elems,
        start: 'top bottom-=100px',
        toggleActions: 'play none none none',
        once: true,
      },
      y: 40,
      autoAlpha: 0,
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.3,
    })
  }, [])

  return (
    <Layout>
      {/* Introductie */}
      <section className="bg-secondary text-primary py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
            Over Ons
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Wij zijn gespecialiseerd in het creëren van unieke, luxe webervaringen waarbij
            3D-scènes naadloos samenvloeien met interactiviteit en animatie.
          </p>
        </div>
      </section>

      {/* Missie */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-up">
            <h3 className="text-2xl sm:text-3xl font-heading mb-3">
              Onze Missie
            </h3>
            <p className="text-base sm:text-lg leading-relaxed">
              Innovatie en elegantie staan bij ons centraal. Van concept tot uitwerking verzorgen
              we een state-of-the-art beleving voor uw merk, zowel op desktop als mobiel.
            </p>
          </div>
          <div className="fade-up">
            <img
              src="/images/a4e57a98-1d38-409d-937f-b035bff6fdb3.jpeg"
              alt="Onze Missie Visual"
              className="w-full h-60 sm:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Ons Team */}
      <section className="py-16 sm:py-20 bg-white text-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-8 text-center text-primary fade-up">
            Ons Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Alice', img: '/images/a4e57a98-1d38-409d-937f-b035bff6fdb3.jpeg' },
              { name: 'Bob', img: '/images/a4e57a98-1d38-409d-937f-b035bff6fdb3.jpeg' },
              { name: 'Carol', img: '/images/a4e57a98-1d38-409d-937f-b035bff6fdb3.jpeg' },
            ].map(({ name, img }) => (
              <div
                key={name}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center fade-up"
              >
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-accent">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading text-xl mb-1 text-primary">{name}</h4>
                <p className="text-sm text-gray-600 text-center">
                  3D-Art & Webmagic Specialist
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

// client-side only to avoid hydration issues
export default dynamic(() => Promise.resolve(AboutContent), {
  ssr: false,
})