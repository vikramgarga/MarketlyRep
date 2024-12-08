import React from 'react';
import { Navigation } from './components/Navigation';
import { CMOHeader } from './components/CMOHeader';
import { WhyMarketly } from './components/WhyMarketly';
import { StatsTicker } from './components/StatsTicker';
import { OfferDemo } from './components/OfferDemo';
import { CXOTestimonials } from './components/CXOTestimonials';
import { Benefits } from './components/Benefits';
import { PricingTiers } from './components/PricingTiers';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <CMOHeader />
        <StatsTicker />
        <WhyMarketly />
        <OfferDemo />
        <CXOTestimonials />
        <PricingTiers />
        <Footer />
      </main>
    </div>
  );
}

export default App;