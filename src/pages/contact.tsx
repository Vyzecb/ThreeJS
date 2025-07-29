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
      <section className="py-24 px-6 max-w-xl mx-auto">
        <h2 className="text-4xl font-playfair mb-6">Contact</h2>
        {submitted ? (
          <p className="text-lg text-green-600">
            Bedankt voor je bericht! We nemen snel contact op.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Naam</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 p-2 rounded"
                onMouseEnter={(e) => hoverEffects(e.currentTarget)}
              />
            </div>
            <div>
              <label className="block mb-1">E-mail</label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 p-2 rounded"
                onMouseEnter={(e) => hoverEffects(e.currentTarget)}
              />
            </div>
            <div>
              <label className="block mb-1">Bericht</label>
              <textarea
                required
                className="w-full border border-gray-300 p-2 rounded h-32"
                onMouseEnter={(e) => hoverEffects(e.currentTarget)}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-secondary font-semibold rounded shadow hover:opacity-90 transition"
              onMouseEnter={(e) => hoverEffects(e.currentTarget)}
            >
              Verzend
            </button>
          </form>
        )}
      </section>
    </Layout>
  );
};

export default Contact;
