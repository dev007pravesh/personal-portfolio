
import { Box } from '@chakra-ui/react'
import Header from './components/organisms/Header'
import HeroSection from './components/organisms/HeroSection'
import AboutSection from './components/organisms/AboutSection'
import SkillsSection from './components/organisms/SkillsSection'
import ProjectsSection from './components/organisms/ProjectsSection'
import ExperienceSection from './components/organisms/ExperienceSection'
import ContactSection from './components/organisms/ContactSection'
import Footer from './components/organisms/Footer'

function App() {
  return (
    <Box w="100%" minH="100vh" className="portfolio-container">
      <Header />
      <main style={{ width: '100vw', overflowX: 'hidden' }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </Box>
  )
}

export default App
