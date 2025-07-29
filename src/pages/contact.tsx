import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { hoverEffects } from '@/animations/hoverEffects';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integratie met backend/email service
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-8 text-center">
          Contact
        </h2>

        {submitted ? (
          <p className="text-lg sm:text-xl text-green-600 text-center">
            Bedankt voor je bericht! We nemen snel contact op.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Naam & E-mail in twee kolommen op md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Naam</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent transition"
                  onMouseEnter={(e) => hoverEffects(e.currentTarget)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent transition"
                  onMouseEnter={(e) => hoverEffects(e.currentTarget)}
                />
              </div>
            </div>

            {/* Bericht */}
            <div>
              <label className="block text-sm font-medium mb-2">Bericht</label>
              <textarea
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-accent transition"
                onMouseEnter={(e) => hoverEffects(e.currentTarget)}
              />
            </div>

            {/* Verzenden */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-accent text-secondary font-semibold rounded-full shadow-lg hover:opacity-90 transition"
                onMouseEnter={(e) => hoverEffects(e.currentTarget)}
              >
                Verzend
              </button>
            </div>
          </form>
        )}
      </section>
    </Layout>
  );
};

export default Contact;
