export default function DomainRouter() {
  return (
    <section id="router" className="relative py-32 px-6">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-fuchsia-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 mb-4">
            <span className="text-[10px] font-bold tracking-widest text-fuchsia-400 uppercase">CLASSIFICATION & ROUTING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Domain <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Router</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            How the AI classifies inputs and routes to the correct cognitive domain.
            Includes signal detection, scoring algorithm, and multi-domain handling.
          </p>
        </div>

        {/* Domain classification signals */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 mb-8">
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <span className="text-fuchsia-400">🎯</span> CLASSIFICATION SIGNALS PER DOMAIN
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left py-3 px-4 text-xs text-gray-500 uppercase tracking-wider">Domain</th>
                  <th className="text-left py-3 px-4 text-xs text-gray-500 uppercase tracking-wider">Primary Signals</th>
                  <th className="text-left py-3 px-4 text-xs text-gray-500 uppercase tracking-wider">Confidence Boosters</th>
                  <th className="text-left py-3 px-4 text-xs text-gray-500 uppercase tracking-wider">Threshold</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  {
                    domain: '🔍 Bug Hunting',
                    signals: 'code snippets, error reports, "why does this fail", stack traces',
                    boosters: 'mentions of "intermittent", "race condition", "edge case"',
                    threshold: '≥ 2 code-related tokens in first 256'
                  },
                  {
                    domain: '🌀 Ambiguous Reqs',
                    signals: '"I need something that...", vague descriptions, missing specs',
                    boosters: 'contradictory statements, undefined terms, scope uncertainty',
                    threshold: '≥ 3 undefined references OR explicit ambiguity markers'
                  },
                  {
                    domain: '🧬 Cross-Domain',
                    signals: '"how is X like Y", analogy requests, multi-field questions',
                    boosters: 'references to 2+ distinct knowledge domains',
                    threshold: '≥ 2 domain markers from different fields'
                  },
                  {
                    domain: '⚡ Creative Leaps',
                    signals: '"think outside the box", "novel approach", brainstorm requests',
                    boosters: 'explicit creativity requests, "what if" scenarios, constraint challenges',
                    threshold: 'creativity keywords ≥ 2 OR explicit "creative/novel" request'
                  },
                  {
                    domain: '🧠 Theory of Mind',
                    signals: '"what does the user mean", perspective questions, empathy cues',
                    boosters: 'mentions of "they think", "user intent", "stakeholder view"',
                    threshold: '≥ 1 perspective-taking marker OR emotional context detected'
                  },
                  {
                    domain: '🏗️ Architecture',
                    signals: '"design a system", "how should I structure", scalability concerns',
                    boosters: 'mentions of modules, APIs, layers, patterns, trade-offs',
                    threshold: '≥ 2 structural terms OR explicit architecture request'
                  },
                  {
                    domain: '🧮 Novel Algos',
                    signals: '"invent an algorithm", "no existing solution", complexity questions',
                    boosters: 'mentions of Big-O, NP-hard, approximation, custom data structures',
                    threshold: 'explicit "no solution exists" OR complexity analysis request'
                  },
                  {
                    domain: '🔄 Multi-Refactor',
                    signals: '"rename across files", "update imports", "migrate codebase"',
                    boosters: 'mentions of multiple files, consistency, atomic changes',
                    threshold: '≥ 2 file references OR explicit "across files" language'
                  },
                ].map((row) => (
                  <tr key={row.domain} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-semibold whitespace-nowrap">{row.domain}</td>
                    <td className="py-3 px-4 text-xs text-gray-400 max-w-[200px]">{row.signals}</td>
                    <td className="py-3 px-4 text-xs text-gray-400 max-w-[200px]">{row.boosters}</td>
                    <td className="py-3 px-4 text-xs font-mono text-fuchsia-400">{row.threshold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scoring algorithm */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.02] p-6">
            <h3 className="font-bold text-violet-300 mb-4 flex items-center gap-2">
              <span>📊</span> SCORING ALGORITHM
            </h3>
            <div className="font-mono text-xs space-y-2 text-gray-300">
              <p className="text-gray-500">// For each domain d ∈ &#123;1..8&#125;:</p>
              <p><span className="text-violet-400">score[d]</span> = signal_count[d] × signal_weight</p>
              <p><span className="text-violet-400">         </span> + booster_count[d] × booster_weight</p>
              <p><span className="text-violet-400">         </span> + context_similarity[d] × 0.3</p>
              <p><span className="text-violet-400">         </span> + user_history_bias[d] × 0.1</p>
              <p className="text-gray-500 mt-3">// Normalize to probability distribution:</p>
              <p><span className="text-violet-400">prob[d]</span> = softmax(score)[d]</p>
              <p className="text-gray-500 mt-3">// Selection logic:</p>
              <p><span className="text-violet-400">primary</span> = argmax(prob)</p>
              <p><span className="text-violet-400">secondary</span> = prob[second_highest] {'>'} 0.3 ? second_highest : null</p>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.02] p-6">
            <h3 className="font-bold text-amber-300 mb-4 flex items-center gap-2">
              <span>⚡</span> MULTI-DOMAIN HANDLING
            </h3>
            <div className="font-mono text-xs space-y-3 text-gray-300">
              <div>
                <p className="text-amber-400 font-bold mb-1">CASE: Single domain (prob[primary] {'>'} 0.7)</p>
                <p className="text-gray-400">→ Load only primary domain weights. Standard inference.</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <p className="text-amber-400 font-bold mb-1">CASE: Dual domain (secondary {'>'} 0.3)</p>
                <p className="text-gray-400">→ Load primary + secondary. Alternate attention layers.</p>
                <p className="text-gray-400">→ Primary gets 70% compute, secondary 30%.</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <p className="text-amber-400 font-bold mb-1">CASE: No clear domain (max prob {'<'} 0.5)</p>
                <p className="text-gray-400">→ Activate cross-domain synthesis as meta-domain.</p>
                <p className="text-gray-400">→ Increase temperature to 0.8 for broader exploration.</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <p className="text-amber-400 font-bold mb-1">CASE: All domains low confidence</p>
                <p className="text-gray-400">→ Request clarification from user (if interactive).</p>
                <p className="text-gray-400">→ OR output with low confidence flag + reasoning trace.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Domain interaction matrix */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <span className="text-cyan-400">🔗</span> DOMAIN INTERACTION MATRIX (Synergy Scores)
          </h3>
          <p className="text-xs text-gray-500 mb-4">When two domains are co-activated, these scores determine synergy strength:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-2 px-2 text-left text-gray-500"></th>
                  <th className="py-2 px-2 text-center text-gray-500">🔍</th>
                  <th className="py-2 px-2 text-center text-gray-500">🌀</th>
                  <th className="py-2 px-2 text-center text-gray-500">🧬</th>
                  <th className="py-2 px-2 text-center text-gray-500">⚡</th>
                  <th className="py-2 px-2 text-center text-gray-500">🧠</th>
                  <th className="py-2 px-2 text-center text-gray-500">🏗️</th>
                  <th className="py-2 px-2 text-center text-gray-500">🧮</th>
                  <th className="py-2 px-2 text-center text-gray-500">🔄</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                {[
                  { label: '🔍 Bug',    row: ['—',   '0.3', '0.5', '0.4', '0.2', '0.6', '0.3', '0.2'] },
                  { label: '🌀 Ambig',  row: ['0.3', '—',   '0.7', '0.6', '0.8', '0.4', '0.3', '0.3'] },
                  { label: '🧬 Cross',  row: ['0.5', '0.7', '—',   '0.8', '0.6', '0.5', '0.7', '0.4'] },
                  { label: '⚡ Creat',  row: ['0.4', '0.6', '0.8', '—',   '0.5', '0.4', '0.7', '0.3'] },
                  { label: '🧠 ToM',    row: ['0.2', '0.8', '0.6', '0.5', '—',   '0.5', '0.3', '0.4'] },
                  { label: '🏗️ Arch',   row: ['0.6', '0.4', '0.5', '0.4', '0.5', '—',   '0.7', '0.8'] },
                  { label: '🧮 Algo',   row: ['0.3', '0.3', '0.7', '0.7', '0.3', '0.7', '—',   '0.5'] },
                  { label: '🔄 Refac',  row: ['0.2', '0.3', '0.4', '0.3', '0.4', '0.8', '0.5', '—'] },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-white/5">
                    <td className="py-2 px-2 font-semibold text-gray-300">{row.label}</td>
                    {row.row.map((val, i) => (
                      <td key={i} className={`py-2 px-2 text-center ${
                        val === '—' ? 'text-gray-600' :
                        parseFloat(val) >= 0.7 ? 'text-emerald-400' :
                        parseFloat(val) >= 0.5 ? 'text-amber-400' :
                        'text-gray-500'
                      }`}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center gap-4 text-[10px] text-gray-500">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400" /> High synergy (≥0.7)</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /> Medium (0.5-0.6)</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-500" /> Low (&lt;0.5)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
