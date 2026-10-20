import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 150)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-violet-600/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-3xl animate-pulse" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-violet-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-gray-300 font-medium tracking-wide">AI BLUEPRINT — MACHINE-READABLE SPEC v0.1</span>
        </div>

        {/* Title */}
        <h1 className={`text-6xl md:text-8xl font-black tracking-tighter mb-6 ${glitch ? 'translate-x-[2px]' : ''} transition-transform`}>
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
            CORTEX
          </span>
        </h1>

        <p className={`text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-4 ${glitch ? 'opacity-80' : ''}`}>
          Claude <span className="text-white font-semibold">Opus</span> on <span className="text-fuchsia-400 font-semibold">steroids</span> — <span className="text-emerald-400">for AI, not humans</span>
        </p>
        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          An AI-operational blueprint defining cognitive domains, open weight specs, runtime protocols,
          and domain routing. This document is consumed by the reasoning engine itself.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { label: 'Cognitive Domains', value: '8' },
            { label: 'Reasoning Traces', value: '134K' },
            { label: 'Target VRAM', value: '4GB' },
            { label: 'System RAM', value: '10GB' },
            { label: 'Storage', value: '10GB' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#capabilities" className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25">
            Explore Capabilities
          </a>
          <a href="#architecture" className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold hover:bg-white/10 transition-colors">
            View Architecture
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
