import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { scrollAnimations } from '@/animations/scrollAnimations';

const About: React.FC = () => {
  useEffect(() => {
    scrollAnimations();
  }, []);

  return (
    <Layout>
      <section className="section py-24 px-6 bg-secondary">
        <h2 className="text-4xl font-playfair mb-4">
          Over Ons
        </h2>
        <p className="text-lg max-w-3xl">
          Wij zijn gespecialiseerd in het creëren van unieke, luxe webervaringen
          waarbij 3D-scènes naadloos samenvloeien met interactiviteit en animatie.
        </p>
      </section>

      <section className="section py-24 px-6">
        <h3 className="text-3xl font-playfair mb-3">Onze Missie</h3>
        <p className="text-lg max-w-2xl">
          Innovatie en elegantie staan bij ons centraal. Van concept tot
          uitwerking verzorgen we een state-of-the-art beleving voor uw merk.
        </p>
      </section>

      <section className="section py-24 px-6 bg-secondary">
        <h3 className="text-3xl font-playfair mb-3">Ons Team</h3>
        <p className="text-lg max-w-2xl">
          Een team van 3D-artiesten, front-end ontwikkelaars en animatiespecialisten
          bundelen hun krachten om uw visie tot leven te brengen.
        </p>
      </section>
    </Layout>
  );
};

export default About;
