import { useState } from 'react'

interface Capability {
  id: string
  title: string
  icon: string
  description: string
  details: string[]
  color: string
  weight: number
}

const capabilities: Capability[] = [
  {
    id: 'bug-hunting',
    title: 'Subtle Bug Hunting',
    icon: '🔍',
    description: 'Detects edge-case failures, race conditions, and logical inconsistencies that static analysis misses.',
    details: [
      'Pattern matching across code evolution history',
      'Semantic diff analysis for regression vectors',
      'Cross-reference type system invariants',
      'Temporal reasoning in async/concurrent code'
    ],
    color: 'from-red-500 to-orange-500',
    weight: 0.95
  },
  {
    id: 'ambiguous-reqs',
    title: 'Ambiguous Requirements',
    icon: '🌀',
    description: 'Parses vague, contradictory, or incomplete specifications into actionable implementation plans.',
    details: [
      'Intent inference from contextual signals',
      'Contradiction detection & resolution proposals',
      'Stakeholder mental model reconstruction',
      'Progressive clarification dialogue generation'
    ],
    color: 'from-purple-500 to-pink-500',
    weight: 0.92
  },
  {
    id: 'cross-domain',
    title: 'Cross-domain Synthesis',
    icon: '🧬',
    description: 'Bridges knowledge between unrelated domains to generate novel solutions and insights.',
    details: [
      'Analogical mapping between problem spaces',
      'Transfer learning across domain boundaries',
      'Metaphor-to-mechanism translation',
      'Constraint relaxation & re-application'
    ],
    color: 'from-cyan-500 to-blue-500',
    weight: 0.88
  },
  {
    id: 'creative-leaps',
    title: 'Creative Leaps',
    icon: '⚡',
    description: 'Generates non-obvious solutions by exploring high-entropy regions of the solution space.',
    details: [
      'Controlled temperature sampling strategies',
      'Divergent thought pathway generation',
      'Serendipitous connection discovery',
      'Innovation pressure via constraint injection'
    ],
    color: 'from-yellow-500 to-amber-500',
    weight: 0.90
  },
  {
    id: 'theory-of-mind',
    title: 'Theory of Mind',
    icon: '🧠',
    description: 'Models user intent, developer mental models, and stakeholder expectations simultaneously.',
    details: [
      'Multi-agent perspective simulation',
      'Knowledge gap identification per actor',
      'Communication optimization per audience',
      'Empathetic error message generation'
    ],
    color: 'from-emerald-500 to-teal-500',
    weight: 0.87
  },
  {
    id: 'structured-arch',
    title: 'Structured Architecture',
    icon: '🏗️',
    description: 'Designs and maintains clean, scalable system architectures with clear boundaries.',
    details: [
      'Dependency graph optimization',
      'Interface contract generation & validation',
      'Migration path planning for legacy systems',
      'Performance-aware structural decisions'
    ],
    color: 'from-indigo-500 to-violet-500',
    weight: 0.93
  },
  {
    id: 'novel-algorithms',
    title: 'Novel Algorithms',
    icon: '🧮',
    description: 'Invents new algorithmic approaches when existing solutions are insufficient or unavailable.',
    details: [
      'Complexity class awareness & targeting',
      'Approximation algorithm design',
      'Hybrid approach composition',
      'Domain-specific optimization discovery'
    ],
    color: 'from-fuchsia-500 to-rose-500',
    weight: 0.85
  },
  {
    id: 'multi-refactor',
    title: 'Multi-file Refactor',
    icon: '🔄',
    description: 'Performs coordinated changes across multiple files while maintaining consistency and correctness.',
    details: [
      'Atomic change set planning',
      'Import/dependency graph traversal',
      'Semantic rename propagation',
      'Rollback point generation'
    ],
    color: 'from-sky-500 to-indigo-500',
    weight: 0.91
  }
]

export default function CapabilitiesGrid() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="capabilities" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase">Core Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Eight Cognitive <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Domains</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each capability is backed by specialized weight matrices, fine-tuned for maximum effectiveness
            within tight hardware constraints.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className={`relative group rounded-2xl border transition-all duration-300 cursor-pointer ${
                expanded === cap.id
                  ? 'border-violet-500/50 bg-violet-500/5 col-span-1 md:col-span-2 lg:col-span-2 row-span-2'
                  : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
              }`}
              onClick={() => setExpanded(expanded === cap.id ? null : cap.id)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{cap.icon}</span>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Weight</div>
                    <div className={`text-sm font-bold bg-gradient-to-r ${cap.color} bg-clip-text text-transparent`}>
                      {(cap.weight * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{cap.description}</p>

                {/* Weight bar */}
                <div className="mt-4 h-1 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${cap.color} transition-all duration-1000`}
                    style={{ width: `${cap.weight * 100}%` }}
                  />
                </div>

                {/* Expanded details */}
                {expanded === cap.id && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Implementation Strategy</h4>
                    <ul className="space-y-2">
                      {cap.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cap.color} mt-1.5 shrink-0`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
