import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Solutions from './components/Solutions';
import WhyConsultio from './components/WhyConsultio';
import Method from './components/Method';
import Results from './components/Results';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-black selection:bg-brand-yellow/30 selection:text-black">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Solutions />
        <WhyConsultio />
        <Method />
        <Results />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
