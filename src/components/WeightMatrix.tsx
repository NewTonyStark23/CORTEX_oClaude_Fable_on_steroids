import { useState } from 'react'

interface WeightEntry {
  domain: string
  icon: string
  attention: number
  ffN: number
  embedding: number
  total: number
  priority: 'critical' | 'high' | 'medium'
}

const weightData: WeightEntry[] = [
  { domain: 'Subtle Bug Hunting', icon: '🔍', attention: 0.22, ffN: 0.18, embedding: 0.15, total: 0.55, priority: 'critical' },
  { domain: 'Ambiguous Requirements', icon: '🌀', attention: 0.20, ffN: 0.22, embedding: 0.12, total: 0.54, priority: 'critical' },
  { domain: 'Cross-domain Synthesis', icon: '🧬', attention: 0.18, ffN: 0.20, embedding: 0.18, total: 0.56, priority: 'critical' },
  { domain: 'Creative Leaps', icon: '⚡', attention: 0.25, ffN: 0.15, embedding: 0.10, total: 0.50, priority: 'high' },
  { domain: 'Theory of Mind', icon: '🧠', attention: 0.22, ffN: 0.19, embedding: 0.14, total: 0.55, priority: 'critical' },
  { domain: 'Structured Architecture', icon: '🏗️', attention: 0.16, ffN: 0.24, embedding: 0.13, total: 0.53, priority: 'high' },
  { domain: 'Novel Algorithms', icon: '🧮', attention: 0.21, ffN: 0.21, embedding: 0.11, total: 0.53, priority: 'high' },
  { domain: 'Multi-file Refactor', icon: '🔄', attention: 0.17, ffN: 0.23, embedding: 0.16, total: 0.56, priority: 'medium' },
]

export default function WeightMatrix() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section id="weights" className="relative py-32 px-6">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-fuchsia-400 uppercase">Weight Distribution</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Optimized <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Weight Matrix</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each cognitive domain receives proportionally allocated weight budget based on 
            task complexity and hardware constraints.
          </p>
        </div>

        {/* Weight table */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden backdrop-blur-sm">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <div className="col-span-4">Domain</div>
            <div className="col-span-2 text-center">Attention</div>
            <div className="col-span-2 text-center">FFN</div>
            <div className="col-span-2 text-center">Embedding</div>
            <div className="col-span-2 text-center">Total</div>
          </div>

          {/* Rows */}
          {weightData.map((entry, i) => (
            <div
              key={entry.domain}
              className={`grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 items-center transition-colors ${
                hoveredRow === i ? 'bg-white/[0.03]' : ''
              }`}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <div className="col-span-4 flex items-center gap-3">
                <span className="text-xl">{entry.icon}</span>
                <div>
                  <div className="text-sm font-medium">{entry.domain}</div>
                  <div className={`text-[10px] uppercase tracking-wider ${
                    entry.priority === 'critical' ? 'text-red-400' :
                    entry.priority === 'high' ? 'text-amber-400' : 'text-gray-500'
                  }`}>
                    {entry.priority}
                  </div>
                </div>
              </div>
              
              <div className="col-span-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-16 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full bg-violet-500" style={{ width: `${(entry.attention / 0.25) * 100}%` }} />
                  </div>
                  <span className="text-xs text-gray-400 w-8">{(entry.attention * 100).toFixed(0)}%</span>
                </div>
              </div>

              <div className="col-span-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-16 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full bg-cyan-500" style={{ width: `${(entry.ffN / 0.25) * 100}%` }} />
                  </div>
                  <span className="text-xs text-gray-400 w-8">{(entry.ffN * 100).toFixed(0)}%</span>
                </div>
              </div>

              <div className="col-span-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-16 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full bg-fuchsia-500" style={{ width: `${(entry.embedding / 0.20) * 100}%` }} />
                  </div>
                  <span className="text-xs text-gray-400 w-8">{(entry.embedding * 100).toFixed(0)}%</span>
                </div>
              </div>

              <div className="col-span-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-16 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" style={{ width: `${(entry.total / 0.60) * 100}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-white w-8">{(entry.total * 100).toFixed(0)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Budget summary */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Model Size', value: '~3.2GB', sub: 'INT4 quantized' },
            { label: 'Active Weights/Task', value: '~800MB', sub: 'Sparse routing' },
            { label: 'KV-Cache Budget', value: '~600MB', sub: '4K context window' },
            { label: 'SSD Weight Store', value: '~3.5GB', sub: 'Memory-mapped' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/5 bg-white/[0.01] p-4 text-center">
              <div className="text-xl font-bold text-white">{item.value}</div>
              <div className="text-xs text-gray-400 mt-1">{item.label}</div>
              <div className="text-[10px] text-gray-600 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
