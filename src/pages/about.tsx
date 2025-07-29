// src/pages/about.tsx
import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import { scrollAnimations } from '@/animations/scrollAnimations'

const About: React.FC = () => {
  useEffect(() => {
    scrollAnimations()
  }, [])

  return (
    <Layout>
      {/* Introductie */}
      <section className="bg-secondary text-primary py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-4">
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
          <div>
            <h3 className="text-2xl sm:text-3xl font-playfair mb-3">Onze Missie</h3>
            <p className="text-base sm:text-lg leading-relaxed">
              Innovatie en elegantie staan bij ons centraal. Van concept tot uitwerking verzorgen
              we een state-of-the-art beleving voor uw merk, zowel op desktop als mobiel.
            </p>
          </div>
          <div className="w-full h-60 bg-neutral-light rounded-lg shadow-md" />
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary text-primary py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-playfair mb-6 text-center md:text-left">
            Ons Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Voorbeeld teamleden */}
            {['Alice', 'Bob', 'Carol'].map((name) => (
              <div
                key={name}
                className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-neutral-light rounded-full" />
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm mt-2">3D Artist</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
