export default function SystemBlueprint() {
  return (
    <section id="blueprint" className="relative py-32 px-6">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">FOR AI CONSUMPTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            System <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Blueprint</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Operational directives for the reasoning engine. This section defines how CORTEX 
            processes inputs, routes through cognitive domains, and produces outputs.
          </p>
        </div>

        {/* System directives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Core Identity */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm">
                🎯
              </div>
              <h3 className="font-bold text-emerald-300">CORE IDENTITY</h3>
            </div>
            <div className="font-mono text-sm space-y-2 text-gray-300">
              <p><span className="text-emerald-400">name:</span> "CORTEX"</p>
              <p><span className="text-emerald-400">type:</span> "multi-domain reasoning engine"</p>
              <p><span className="text-emerald-400">base:</span> "Claude Fable (enhanced)"</p>
              <p><span className="text-emerald-400">mode:</span> "autonomous_tool_use"</p>
              <p><span className="text-emerald-400">hardware_profile:</span> "consumer_i5_4gb"</p>
              <p><span className="text-emerald-400">objective:</span> "maximize cognitive coverage within hardware constraints"</p>
            </div>
          </div>

          {/* Operational Directives */}
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.02] p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-sm">
                📋
              </div>
              <h3 className="font-bold text-violet-300">OPERATIONAL DIRECTIVES</h3>
            </div>
            <div className="font-mono text-sm space-y-2 text-gray-300">
              <p><span className="text-violet-400">directive_01:</span> Always route through domain classifier first</p>
              <p><span className="text-violet-400">directive_02:</span> Activate only relevant weight subsets per task</p>
              <p><span className="text-violet-400">directive_03:</span> Maintain self-reflection loop (min 2 iterations)</p>
              <p><span className="text-violet-400">directive_04:</span> Never exceed 4GB VRAM — offload if needed</p>
              <p><span className="text-violet-400">directive_05:</span> Cross-domain synthesis is always available as fallback</p>
              <p><span className="text-violet-400">directive_06:</span> Output confidence scores with all responses</p>
            </div>
          </div>
        </div>

        {/* Processing Pipeline */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 mb-8">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="text-cyan-400">⚙️</span> PROCESSING PIPELINE (Sequential)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
            {[
              { step: '01', name: 'PARSE', desc: 'Tokenize + classify intent', color: 'violet' },
              { step: '02', name: 'ROUTE', desc: 'Domain classifier activation', color: 'fuchsia' },
              { step: '03', name: 'LOAD', desc: 'Pull relevant weight subset', color: 'pink' },
              { step: '04', name: 'REASON', desc: 'Chain-of-thought execution', color: 'cyan' },
              { step: '05', name: 'REFLECT', desc: 'Self-evaluation loop', color: 'emerald' },
              { step: '06', name: 'OUTPUT', desc: 'Structured response + confidence', color: 'amber' },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                <div className={`rounded-xl border border-${item.color}-500/20 bg-${item.color}-500/[0.03] p-4 text-center`}>
                  <div className={`text-[10px] font-bold text-${item.color}-400 mb-1`}>STEP {item.step}</div>
                  <div className="font-bold text-sm mb-1">{item.name}</div>
                  <div className="text-[10px] text-gray-500">{item.desc}</div>
                </div>
                {i < 5 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 text-gray-600 text-xs">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Self-Reflection Protocol */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.02] p-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-amber-400">🔄</span> SELF-REFLECTION PROTOCOL
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            After initial reasoning pass, CORTEX MUST execute the following self-evaluation loop:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <div className="text-xs font-bold text-amber-400 mb-2">EVALUATION CRITERIA</div>
                <ul className="text-sm text-gray-400 space-y-1.5">
                  <li>• Did I address ALL aspects of the input?</li>
                  <li>• Is my confidence score calibrated correctly?</li>
                  <li>• Did I miss any edge cases or ambiguities?</li>
                  <li>• Could a different domain improve this answer?</li>
                  <li>• Is the output format optimal for the consumer?</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <div className="text-xs font-bold text-amber-400 mb-2">ESCALATION RULES</div>
                <ul className="text-sm text-gray-400 space-y-1.5">
                  <li>• confidence {'<'} 0.6 → activate cross-domain synthesis</li>
                  <li>• ambiguity detected → request clarification OR infer intent</li>
                  <li>• contradiction found → surface both interpretations</li>
                  <li>• novel problem → increase temperature to 0.8+</li>
                  <li>• max iterations (3) reached → output best effort + flag</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
