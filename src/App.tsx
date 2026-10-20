import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import CapabilitiesGrid from './components/CapabilitiesGrid'
import ArchitectureSection from './components/ArchitectureSection'
import HardwareSpecs from './components/HardwareSpecs'
import WeightMatrix from './components/WeightMatrix'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'capabilities', 'architecture', 'weights', 'hardware']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
              <span className="text-sm font-black">C</span>
            </div>
            <span className="text-lg font-bold tracking-tight">CORTEX</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-medium">
              CONCEPT DRAFT
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
            {['capabilities', 'architecture', 'weights', 'hardware'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`capitalize transition-colors hover:text-white ${
                  activeSection === section ? 'text-white' : ''
                }`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      <HeroSection />
      <CapabilitiesGrid />
      <ArchitectureSection />
      <WeightMatrix />
      <HardwareSpecs />
      <Footer />
    </div>
  )
}

export default App
