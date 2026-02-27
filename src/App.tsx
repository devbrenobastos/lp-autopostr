import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { BentoGrid } from './sections/BentoGrid';
import { Features } from './sections/Features';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const LandingPage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <BentoGrid />
      <Features />
      <Pricing />
      <FAQ />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/termos" element={<Terms />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
