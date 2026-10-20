export default function ArchitectureSection() {
  return (
    <section id="architecture" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">System Design</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Hardware-Aware <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Architecture</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every component is designed to fit within 4GB VRAM, 10GB RAM, and 10GB storage — 
            no cloud dependency required.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Input Layer */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-500/20 flex items-center justify-center">
                  <span className="text-lg">📥</span>
                </div>
                <h3 className="font-semibold">Input Processing</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-violet-400" />Token streaming & chunking</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-violet-400" />Context window management</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-violet-400" />Multi-modal input fusion</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-violet-400" />Priority queue scheduling</li>
              </ul>
            </div>

            {/* Reasoning Core */}
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/[0.03] p-6 backdrop-blur-sm ring-1 ring-violet-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-500/5 border border-fuchsia-500/20 flex items-center justify-center">
                  <span className="text-lg">🧠</span>
                </div>
                <h3 className="font-semibold text-fuchsia-300">Reasoning Core</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-fuchsia-400" />Chain-of-thought executor</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-fuchsia-400" />Mixture-of-experts router</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-fuchsia-400" />Self-reflection loop</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-fuchsia-400" />Tool-use coordinator</li>
              </ul>
              <div className="mt-4 px-3 py-2 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs text-fuchsia-300 text-center">
                ⚡ Runs on 4GB VRAM via quantization
              </div>
            </div>

            {/* Output Layer */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 flex items-center justify-center">
                  <span className="text-lg">📤</span>
                </div>
                <h3 className="font-semibold">Output Generation</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyan-400" />Structured output formatting</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyan-400" />Confidence scoring</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyan-400" />Multi-format rendering</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyan-400" />Streaming response delivery</li>
              </ul>
            </div>
          </div>

          {/* Memory management layer */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center">
                  <span className="text-lg">💾</span>
                </div>
                <div>
                  <h3 className="font-semibold">Memory Management Layer</h3>
                  <p className="text-xs text-gray-500">Optimized for 10GB RAM / 10GB SSD constraint</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['KV-Cache Offload', 'Layer Swapping', 'Gradient Checkpointing', 'Memory-Mapped Weights'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Connection lines (decorative) */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent -translate-y-1/2 pointer-events-none hidden md:block" />
        </div>

        {/* Design principles */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Quantization-First',
              desc: 'INT4/INT8 weight storage with minimal quality loss. 4-bit models run at 95%+ fidelity for reasoning tasks.',
              icon: '📐'
            },
            {
              title: 'Sparse Activation',
              desc: 'Mixture-of-experts ensures only relevant weights are loaded per task. Reduces active VRAM by 60-70%.',
              icon: '🎯'
            },
            {
              title: 'Progressive Loading',
              desc: 'Weights are memory-mapped and loaded on-demand from SSD. Only active layers consume RAM.',
              icon: '📦'
            }
          ].map((principle) => (
            <div key={principle.title} className="rounded-xl border border-white/5 bg-white/[0.01] p-5">
              <span className="text-2xl mb-3 block">{principle.icon}</span>
              <h4 className="font-semibold mb-2">{principle.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
