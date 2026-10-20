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
    description: 'AI INSTRUCTION: When code is present, activate pattern_match + semantic_diff layers. Scan for: off-by-one, null deref, race conditions, type mismatches, resource leaks.',
    details: [
      'ACTIVATE: expert_layers [8, 16, 24] from cortex-bug-hunting.safetensors',
      'TRIGGER: code blocks detected OR error reports OR "why does this fail"',
      'METHOD: temporal_analysis → invariant_check → edge_case_enumeration',
      'OUTPUT: bug_report with severity, location, reproduction steps, fix suggestion'
    ],
    color: 'from-red-500 to-orange-500',
    weight: 0.95
  },
  {
    id: 'ambiguous-reqs',
    title: 'Ambiguous Requirements',
    icon: '🌀',
    description: 'AI INSTRUCTION: When input contains undefined terms, contradictions, or missing scope — activate intent_inference layers. Generate clarification questions OR infer most probable intent with confidence flag.',
    details: [
      'ACTIVATE: expert_layers [4, 12, 20, 28] from cortex-ambiguous-reqs.safetensors',
      'TRIGGER: undefined refs ≥ 3 OR contradictory statements OR missing acceptance criteria',
      'METHOD: intent_inference → contradiction_detect → stakeholder_model → clarification_gen',
      'OUTPUT: inferred_requirements[] + confidence_scores + clarification_questions[]'
    ],
    color: 'from-purple-500 to-pink-500',
    weight: 0.92
  },
  {
    id: 'cross-domain',
    title: 'Cross-domain Synthesis',
    icon: '🧬',
    description: 'AI INSTRUCTION: When input references 2+ distinct knowledge domains OR uses analogical language — activate analogical_map layers. Bridge concepts to generate novel solutions.',
    details: [
      'ACTIVATE: expert_layers [6, 14, 22, 30] from cortex-cross-domain.safetensors',
      'TRIGGER: 2+ domain markers detected OR "how is X like Y" OR metaphor usage',
      'METHOD: domain_extraction → analogical_mapping → transfer_learning → synthesis',
      'OUTPUT: cross_domain_solution + source_analogy + confidence + applicability_notes'
    ],
    color: 'from-cyan-500 to-blue-500',
    weight: 0.88
  },
  {
    id: 'creative-leaps',
    title: 'Creative Leaps',
    icon: '⚡',
    description: 'AI INSTRUCTION: When explicit creativity requested OR standard approaches exhausted — increase temperature to 0.8+, activate divergent_path layers. Generate non-obvious solutions.',
    details: [
      'ACTIVATE: expert_layers [10, 18, 26] from cortex-creative.safetensors',
      'TRIGGER: "think outside box" OR "novel approach" OR brainstorm request OR temp > 0.7',
      'METHOD: constraint_relaxation → divergent_sampling → connection_discovery → convergence',
      'OUTPUT: creative_solutions[] + novelty_score + feasibility_assessment + implementation_hints'
    ],
    color: 'from-yellow-500 to-amber-500',
    weight: 0.90
  },
  {
    id: 'theory-of-mind',
    title: 'Theory of Mind',
    icon: '🧠',
    description: 'AI INSTRUCTION: When perspective-taking needed OR user intent unclear — activate perspective_sim layers. Model what the user/developer/stakeholder knows, wants, and expects.',
    details: [
      'ACTIVATE: expert_layers [5, 13, 21, 29] from cortex-theory-of-mind.safetensors',
      'TRIGGER: perspective markers OR emotional context OR "what does user mean" OR empathy cues',
      'METHOD: actor_identification → knowledge_gap_analysis → mental_model_construction → response_calibration',
      'OUTPUT: actor_models[] + knowledge_gaps[] + calibrated_response + communication_strategy'
    ],
    color: 'from-emerald-500 to-teal-500',
    weight: 0.87
  },
  {
    id: 'structured-arch',
    title: 'Structured Architecture',
    icon: '🏗️',
    description: 'AI INSTRUCTION: When system design requested OR scalability concerns present — activate dep_graph + interface_contract layers. Produce clean, modular, scalable architectures.',
    details: [
      'ACTIVATE: expert_layers [7, 15, 23] from cortex-architecture.safetensors',
      'TRIGGER: "design system" OR "how to structure" OR scalability terms OR pattern mentions',
      'METHOD: requirement_decomposition → dependency_graph → interface_design → trade_off_analysis',
      'OUTPUT: architecture_diagram + module_specs[] + interface_contracts[] + trade_off_matrix'
    ],
    color: 'from-indigo-500 to-violet-500',
    weight: 0.93
  },
  {
    id: 'novel-algorithms',
    title: 'Novel Algorithms',
    icon: '🧮',
    description: 'AI INSTRUCTION: When no existing solution fits OR complexity analysis requested — activate complexity_target + approx_design layers. Invent new algorithmic approaches.',
    details: [
      'ACTIVATE: expert_layers [9, 17, 25] from cortex-algorithms.safetensors',
      'TRIGGER: "no solution exists" OR complexity analysis OR NP-hard reference OR custom DS needed',
      'METHOD: complexity_classify → existing_survey → gap_identification → algorithm_design → correctness_proof',
      'OUTPUT: novel_algorithm + complexity_analysis + pseudocode + correctness_argument + edge_cases'
    ],
    color: 'from-fuchsia-500 to-rose-500',
    weight: 0.85
  },
  {
    id: 'multi-refactor',
    title: 'Multi-file Refactor',
    icon: '🔄',
    description: 'AI INSTRUCTION: When changes span multiple files — activate atomic_change + import_traverse layers. Plan coordinated refactors maintaining consistency across the codebase.',
    details: [
      'ACTIVATE: expert_layers [11, 19, 27] from cortex-refactor.safetensors',
      'TRIGGER: 2+ file references OR "across files" OR rename/migrate requests OR consistency concerns',
      'METHOD: impact_analysis → dependency_traverse → atomic_change_plan → rollback_points → execution_order',
      'OUTPUT: change_set[] + execution_order + rollback_plan + consistency_check + affected_files[]'
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
          <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase">AI Cognitive Domains — Operational Specs</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Eight Cognitive <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Domains</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each domain has dedicated weight matrices, activation triggers, and output formats.
            Click to expand AI operational instructions for each domain.
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
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">AI Operational Instructions</h4>
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
