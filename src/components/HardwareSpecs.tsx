import { useState } from 'react'

interface Spec {
  component: string
  icon: string
  value: string
  constraint: string
  optimizations: string[]
  status: 'tight' | 'adequate' | 'optimized'
}

const specs: Spec[] = [
  {
    component: 'CPU',
    icon: '⚙️',
    value: 'Intel i5',
    constraint: '4-6 cores, 3.0-4.2 GHz',
    optimizations: [
      'CPU offloading for non-critical layers',
      'Integer arithmetic optimization for quantized ops',
      'AVX2 instruction set utilization',
      'Thread pool sized to physical cores'
    ],
    status: 'adequate'
  },
  {
    component: 'GPU VRAM',
    icon: '🎮',
    value: '4GB',
    constraint: 'Tight — primary bottleneck',
    optimizations: [
      'INT4 quantization (GPTQ/AWQ)',
      'Layer-wise offloading to system RAM',
      'Dynamic batch sizing based on available VRAM',
      'Flash attention for memory-efficient inference',
      'KV-cache quantization to FP8'
    ],
    status: 'tight'
  },
  {
    component: 'System RAM',
    icon: '🧩',
    value: '10GB',
    constraint: 'Shared with OS + app overhead',
    optimizations: [
      'Memory-mapped weight files (mmap)',
      'Lazy layer loading on first access',
      'LRU eviction for inactive weight pages',
      'Zero-copy tensor sharing between CPU/GPU',
      'Available for model: ~7GB after OS'
    ],
    status: 'tight'
  },
  {
    component: 'Storage',
    icon: '💿',
    value: '10GB SSD',
    constraint: 'Must fit model + runtime',
    optimizations: [
      'Compressed weight archives (gzip/lz4)',
      'On-demand weight decompression',
      'Shared vocabulary across domains',
      'Delta encoding for similar weight blocks',
      'Model: ~3.5GB | Runtime: ~500MB | Cache: ~2GB'
    ],
    status: 'optimized'
  }
]

export default function HardwareSpecs() {
  const [activeSpec, setActiveSpec] = useState(0)

  return (
    <section id="hardware" className="relative py-32 px-6">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Hardware Constraints</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Built for <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Consumer Hardware</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            No cloud required. No H100 needed. Every optimization targets real-world consumer specs.
          </p>
        </div>

        {/* Hardware visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Spec selector */}
          <div className="space-y-3">
            {specs.map((spec, i) => (
              <button
                key={spec.component}
                className={`w-full text-left rounded-xl border p-5 transition-all ${
                  activeSpec === i
                    ? 'border-emerald-500/30 bg-emerald-500/5'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                }`}
                onClick={() => setActiveSpec(i)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{spec.icon}</span>
                    <div>
                      <div className="font-semibold">{spec.component}</div>
                      <div className="text-sm text-gray-400">{spec.value}</div>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                    spec.status === 'tight' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                    spec.status === 'adequate' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                    'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  }`}>
                    {spec.status}
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500">{spec.constraint}</div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{specs[activeSpec].icon}</span>
              <div>
                <h3 className="text-2xl font-bold">{specs[activeSpec].component}</h3>
                <p className="text-gray-400">{specs[activeSpec].value} — {specs[activeSpec].constraint}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Optimization Strategies</h4>
              <ul className="space-y-3">
                {specs[activeSpec].optimizations.map((opt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-400 text-[10px]">✓</span>
                    </span>
                    {opt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Memory visualization */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Memory Map</h4>
              <div className="h-8 rounded-lg overflow-hidden flex">
                {activeSpec === 1 && (
                  <>
                    <div className="bg-violet-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '60%'}}>Model Weights (2.4GB)</div>
                    <div className="bg-cyan-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '15%'}}>KV-Cache</div>
                    <div className="bg-emerald-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '15%'}}>Activations</div>
                    <div className="bg-gray-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '10%'}}>Free</div>
                  </>
                )}
                {activeSpec === 2 && (
                  <>
                    <div className="bg-gray-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '30%'}}>OS + Apps (3GB)</div>
                    <div className="bg-violet-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '25%'}}>Model (mmap)</div>
                    <div className="bg-cyan-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '20%'}}>Runtime</div>
                    <div className="bg-fuchsia-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '15%'}}>Context</div>
                    <div className="bg-gray-600/40 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '10%'}}>Free</div>
                  </>
                )}
                {activeSpec === 3 && (
                  <>
                    <div className="bg-violet-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '35%'}}>Model Weights (3.5GB)</div>
                    <div className="bg-cyan-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '15%'}}>Runtime (500MB)</div>
                    <div className="bg-emerald-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '20%'}}>Cache (2GB)</div>
                    <div className="bg-amber-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '10%'}}>Logs</div>
                    <div className="bg-gray-600/40 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '20%'}}>Free</div>
                  </>
                )}
                {activeSpec === 0 && (
                  <>
                    <div className="bg-violet-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '40%'}}>Inference (CPU)</div>
                    <div className="bg-cyan-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '25%'}}>Preprocessing</div>
                    <div className="bg-emerald-600/60 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '20%'}}>I/O Handling</div>
                    <div className="bg-gray-600/40 h-full flex items-center justify-center text-[10px] font-semibold" style={{width: '15%'}}>Headroom</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Performance target */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Performance Target</h3>
              <p className="text-gray-400 text-sm">Estimated inference speed on target hardware</p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">~15</div>
                <div className="text-xs text-gray-500">tokens/sec</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">~200ms</div>
                <div className="text-xs text-gray-500">TTFT</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4K</div>
                <div className="text-xs text-gray-500">context</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
