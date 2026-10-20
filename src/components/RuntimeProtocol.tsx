export default function RuntimeProtocol() {
  return (
    <section id="runtime" className="relative py-32 px-6">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase">EXECUTION SPECIFICATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Runtime <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Protocol</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Step-by-step inference execution flow. The AI reads this to understand 
            exactly how to process each request end-to-end.
          </p>
        </div>

        {/* Main execution flow */}
        <div className="space-y-4 mb-12">
          {[
            {
              phase: 'PHASE 1: INPUT INGESTION',
              color: 'violet',
              icon: '📥',
              steps: [
                { id: '1.1', action: 'RECEIVE', detail: 'Accept input (text, code, image, mixed)', trigger: 'always' },
                { id: '1.2', action: 'TOKENIZE', detail: 'BPE tokenize with cortex-tokenizer.json', trigger: 'always' },
                { id: '1.3', action: 'CLASSIFY', detail: 'Run domain classifier on first 512 tokens', trigger: 'always' },
                { id: '1.4', action: 'CONTEXT_BUILD', detail: 'Construct context window (max 4096 tokens)', trigger: 'always' },
              ]
            },
            {
              phase: 'PHASE 2: DOMAIN ROUTING',
              color: 'fuchsia',
              icon: '🔀',
              steps: [
                { id: '2.1', action: 'SCORE_DOMAINS', detail: 'Get probability distribution across 8 domains', trigger: 'always' },
                { id: '2.2', action: 'SELECT_PRIMARY', detail: 'Load weights for highest-probability domain', trigger: 'always' },
                { id: '2.3', action: 'CHECK_SECONDARY', detail: 'If second domain > 0.3 prob → load as auxiliary', trigger: 'conditional' },
                { id: '2.4', action: 'VRAM_CHECK', detail: 'Verify total loaded weights < 3.8GB', trigger: 'always' },
                { id: '2.5', action: 'OFFLOAD_IF_NEEDED', detail: 'Evict lowest-priority expert to system RAM', trigger: 'conditional' },
              ]
            },
            {
              phase: 'PHASE 3: REASONING EXECUTION',
              color: 'cyan',
              icon: '🧠',
              steps: [
                { id: '3.1', action: 'CHAIN_INIT', detail: 'Initialize chain-of-thought with domain-specific preamble', trigger: 'always' },
                { id: '3.2', action: 'GENERATE', detail: 'Autoregressive generation, temp=0.7 (default)', trigger: 'always' },
                { id: '3.3', action: 'TOOL_CHECK', detail: 'If tool_use token emitted → execute tool call', trigger: 'conditional' },
                { id: '3.4', action: 'INTEGRATE', detail: 'Merge tool results back into context', trigger: 'conditional' },
                { id: '3.5', action: 'CONTINUE', detail: 'Resume generation with tool results in context', trigger: 'conditional' },
              ]
            },
            {
              phase: 'PHASE 4: SELF-REFLECTION',
              color: 'amber',
              icon: '🔄',
              steps: [
                { id: '4.1', action: 'EVALUATE', detail: 'Score output against domain-specific criteria', trigger: 'always' },
                { id: '4.2', action: 'CONFIDENCE', detail: 'Assign confidence score [0.0 - 1.0]', trigger: 'always' },
                { id: '4.3', action: 'CHECK_THRESHOLD', detail: 'If confidence < 0.6 → trigger escalation', trigger: 'conditional' },
                { id: '4.4', action: 'REASON_AGAIN', detail: 'If escalation → re-reason with cross-domain synthesis', trigger: 'conditional' },
                { id: '4.5', action: 'ITERATE', detail: 'Max 3 reflection iterations before forced output', trigger: 'always' },
              ]
            },
            {
              phase: 'PHASE 5: OUTPUT DELIVERY',
              color: 'emerald',
              icon: '📤',
              steps: [
                { id: '5.1', action: 'FORMAT', detail: 'Structure output per domain requirements', trigger: 'always' },
                { id: '5.2', action: 'ATTACH_CONFIDENCE', detail: 'Include confidence score in response metadata', trigger: 'always' },
                { id: '5.3', action: 'STREAM', detail: 'Begin streaming tokens to consumer', trigger: 'always' },
                { id: '5.4', action: 'CLEANUP', detail: 'Release domain weights if not in active cache', trigger: 'always' },
              ]
            }
          ].map((phase) => (
            <div key={phase.phase} className={`rounded-2xl border border-${phase.color}-500/20 bg-${phase.color}-500/[0.02] p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{phase.icon}</span>
                <h3 className={`font-bold text-${phase.color}-300 text-sm tracking-wide`}>{phase.phase}</h3>
              </div>
              <div className="space-y-2">
                {phase.steps.map((step) => (
                  <div key={step.id} className="flex items-start gap-3 text-sm">
                    <span className={`font-mono text-xs px-1.5 py-0.5 rounded bg-${phase.color}-500/10 text-${phase.color}-400 shrink-0`}>
                      {step.id}
                    </span>
                    <span className="font-semibold text-white w-32 shrink-0">{step.action}</span>
                    <span className="text-gray-400 flex-1">{step.detail}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${
                      step.trigger === 'always' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {step.trigger}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Memory management during runtime */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="text-red-400">⚠️</span> MEMORY MANAGEMENT RULES (Runtime)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">HARD LIMITS</div>
              <div className="font-mono text-sm space-y-2 text-gray-300">
                <p>• VRAM ceiling: <span className="text-red-400">4096MB</span> — never exceed</p>
                <p>• KV-cache budget: <span className="text-red-400">600MB</span> fixed allocation</p>
                <p>• Activation memory: <span className="text-red-400">200MB</span> max per forward pass</p>
                <p>• System RAM spill: <span className="text-red-400">7GB</span> available for offload</p>
                <p>• SSD read bandwidth: <span className="text-red-400">~500MB/s</span> (budget layer swaps)</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">OPTIMIZATION TRIGGERS</div>
              <div className="font-mono text-sm space-y-2 text-gray-300">
                <p>• VRAM {'>'} 3.8GB → <span className="text-emerald-400">evict lowest-priority expert</span></p>
                <p>• KV-cache full → <span className="text-emerald-400">sliding window (keep last 2K)</span></p>
                <p>• Batch size {'>'} 1 → <span className="text-emerald-400">reduce to 1 (memory优先)</span></p>
                <p>• Context {'>'} 3K tokens → <span className="text-emerald-400">summarize older context</span></p>
                <p>• Multi-domain active → <span className="text-emerald-400">sequential, not parallel</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
