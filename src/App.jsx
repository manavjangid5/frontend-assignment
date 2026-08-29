import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import PackagesSection from './components/sections/PackagesSection.jsx';
import TeamSection from './components/sections/TeamSection.jsx';
import NewsletterSection from './components/sections/NewsletterSection.jsx';
import EditModeToggle from './components/common/EditModeToggle.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: 'clip' }}>
        <Hero />
        <PackagesSection />
        <TeamSection />
        <NewsletterSection />
      </main>
      <Footer />
      <EditModeToggle />
    </>
  );
}
