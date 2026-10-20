export default function WeightComparison() {
  return (
    <section id="weight-comparison" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-violet-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 mb-4">
            <span className="text-[10px] font-bold tracking-widest text-violet-400 uppercase">FULL WEIGHT SPECIFICATIONS — SIDE BY SIDE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Opus vs Phi-3 Cortex
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Complete weight specifications for both models. See exactly what Opus on steroids looks like 
            at full scale vs the compressed Phi-3 version.
          </p>
        </div>

        {/* Scale visualization */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 mb-8">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="text-violet-400">📊</span> SCALE COMPARISON
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Opus */}
            <div className="rounded-xl border border-violet-500/30 bg-violet-500/[0.03] p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-violet-300">Claude Opus on Steroids</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30">FULL SCALE</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Total Parameters:</span>
                  <span className="text-2xl font-bold text-violet-400">~2T</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Weight Files:</span>
                  <span className="text-lg font-semibold text-white">~420GB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Layers:</span>
                  <span className="text-lg font-semibold text-white">126</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Hidden Size:</span>
                  <span className="text-lg font-semibold text-white">16,384</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Attention Heads:</span>
                  <span className="text-lg font-semibold text-white">128</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">VRAM Required:</span>
                  <span className="text-lg font-semibold text-red-400">400GB+</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="text-xs text-gray-500 mb-2">Storage Breakdown:</div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden flex">
                    <div className="bg-violet-600/60 h-full" style={{width: '70%'}} />
                    <div className="bg-fuchsia-600/60 h-full" style={{width: '20%'}} />
                    <div className="bg-cyan-600/60 h-full" style={{width: '10%'}} />
                  </div>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                  <span>Base: 294GB</span>
                  <span>Experts: 84GB</span>
                  <span>Embed: 42GB</span>
                </div>
              </div>
            </div>

            {/* Phi-3 Cortex */}
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.03] p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-emerald-300">Phi-3 Cortex</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">COMPRESSED</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Total Parameters:</span>
                  <span className="text-2xl font-bold text-emerald-400">3.8B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Weight Files:</span>
                  <span className="text-lg font-semibold text-white">2.1GB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Layers:</span>
                  <span className="text-lg font-semibold text-white">32</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Hidden Size:</span>
                  <span className="text-lg font-semibold text-white">3,072</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Attention Heads:</span>
                  <span className="text-lg font-semibold text-white">32</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">VRAM Required:</span>
                  <span className="text-lg font-semibold text-emerald-400">3.8GB</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="text-xs text-gray-500 mb-2">Storage Breakdown:</div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden flex">
                    <div className="bg-emerald-600/60 h-full" style={{width: '70%'}} />
                    <div className="bg-cyan-600/60 h-full" style={{width: '20%'}} />
                    <div className="bg-amber-600/60 h-full" style={{width: '10%'}} />
                  </div>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                  <span>Base: 1.47GB</span>
                  <span>iDea: 420MB</span>
                  <span>Embed: 210MB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compression ratio */}
          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-violet-500/5 to-emerald-500/5 border border-white/10">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200,000MB</div>
                <div className="text-xs text-gray-500">Opus Weights</div>
              </div>
              <div className="text-4xl text-gray-600">→</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2,100MB</div>
                <div className="text-xs text-gray-500">Phi-3 Cortex</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">95×</div>
                <div className="text-xs text-gray-500">Compression</div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Opus Weight Manifest */}
        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.02] p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-violet-300 flex items-center gap-2">
              <span className="text-xl">🗂️</span> OPUS ON STEROIDS — FULL WEIGHT MANIFEST
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">~420GB TOTAL</span>
          </div>
          <div className="rounded-lg bg-black/40 p-4 font-mono text-xs overflow-x-auto">
            <pre className="text-gray-300 whitespace-pre-wrap">{`opus_on_steroids_manifest.json
{
  "model_id": "claude-opus-on-steroids-v1",
  "total_parameters": 2_000_000_000_000,
  "format": "safetensors",
  "quantization": "FP16 (full precision)",
  
  "base_model": {
    "file": "opus-base.safetensors",
    "size_gb": 294,
    "layers": "0-125 (126 layers)",
    "parameters": 1_400_000_000_000,
    "config": {
      "hidden_size": 16384,
      "num_layers": 126,
      "num_attention_heads": 128,
      "num_kv_heads": 128,
      "intermediate_size": 49152,
      "max_position_embeddings": 200000
    }
  },
  
  "cognitive_experts": [
    {
      "file": "opus-bug-hunting.safetensors",
      "size_gb": 14.7,
      "domain": "subtle_bug_hunting",
      "expert_layers": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
      "parameters": 70_000_000_000
    },
    {
      "file": "opus-ambiguous-reqs.safetensors",
      "size_gb": 14.7,
      "domain": "ambiguous_requirements",
      "expert_layers": [8, 18, 28, 38, 48, 58, 68, 78, 88, 98, 108, 118],
      "parameters": 70_000_000_000
    },
    {
      "file": "opus-cross-domain.safetensors",
      "size_gb": 14.7,
      "domain": "cross_domain_synthesis",
      "expert_layers": [12, 22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122],
      "parameters": 70_000_000_000
    },
    {
      "file": "opus-creative.safetensors",
      "size_gb": 10.5,
      "domain": "creative_leaps",
      "expert_layers": [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115],
      "parameters": 50_000_000_000
    },
    {
      "file": "opus-theory-of-mind.safetensors",
      "size_gb": 14.7,
      "domain": "theory_of_mind",
      "expert_layers": [9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 109, 119],
      "parameters": 70_000_000_000
    },
    {
      "file": "opus-architecture.safetensors",
      "size_gb": 12.6,
      "domain": "structured_architecture",
      "expert_layers": [11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111],
      "parameters": 60_000_000_000
    },
    {
      "file": "opus-algorithms.safetensors",
      "size_gb": 12.6,
      "domain": "novel_algorithms",
      "expert_layers": [13, 23, 33, 43, 53, 63, 73, 83, 93, 103, 113],
      "parameters": 60_000_000_000
    },
    {
      "file": "opus-refactor.safetensors",
      "size_gb": 12.6,
      "domain": "multi_file_refactor",
      "expert_layers": [14, 24, 34, 44, 54, 64, 74, 84, 94, 104, 114],
      "parameters": 60_000_000_000
    }
  ],
  
  "reasoning_depth": {
    "file": "opus-reasoning-depth.safetensors",
    "size_gb": 21,
    "purpose": "50+ step reasoning chains",
    "parameters": 100_000_000_000
  },
  
  "research_capabilities": {
    "file": "opus-research.safetensors",
    "size_gb": 21,
    "purpose": "Scientific method, proofs, graph search",
    "parameters": 100_000_000_000
  },
  
  "embedding": {
    "file": "opus-embedding.safetensors",
    "size_gb": 42,
    "vocab_size": 200_000,
    "embedding_dim": 16384
  },
  
  "total_size_gb": 420,
  "total_parameters": 2_000_000_000_000
}`}</pre>
          </div>
        </div>

        {/* Full Phi-3 Cortex Weight Manifest */}
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-emerald-300 flex items-center gap-2">
              <span className="text-xl">🗂️</span> PHI-3 CORTEX — FULL WEIGHT MANIFEST
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">2.1GB TOTAL</span>
          </div>
          <div className="rounded-lg bg-black/40 p-4 font-mono text-xs overflow-x-auto">
            <pre className="text-gray-300 whitespace-pre-wrap">{`phi3_cortex_manifest.json
{
  "model_id": "phi3-cortex-idea-v1",
  "total_parameters": 3_800_000_000,
  "format": "safetensors",
  "quantization": "GPTQ INT4",
  
  "base_model": {
    "file": "phi3-cortex-base.safetensors",
    "size_mb": 1470,
    "layers": "0-31 (32 layers)",
    "parameters": 2_800_000_000,
    "config": {
      "hidden_size": 3072,
      "num_layers": 32,
      "num_attention_heads": 32,
      "num_kv_heads": 32,
      "intermediate_size": 8192,
      "max_position_embeddings": 4096
    },
    "distilled_from": "claude-opus-on-steroids",
    "compression_ratio": "525:1"
  },
  
  "idea_reasoning_graph": {
    "file": "phi3-idea-graph.safetensors",
    "size_mb": 420,
    "purpose": "Automated thought graph search",
    "parameters": 600_000_000,
    "capabilities": [
      "graph_construction",
      "node_expansion",
      "edge_prediction",
      "loop_detection",
      "search_strategy_selection"
    ]
  },
  
  "reasoning_patterns": {
    "file": "phi3-reasoning-patterns.safetensors",
    "size_mb": 210,
    "purpose": "Compressed reasoning patterns from 134K traces",
    "parameters": 400_000_000,
    "patterns_compressed": 500,
    "avg_compression": "10:1 (50 steps → 5 steps)"
  },
  
  "embedding": {
    "file": "phi3-embedding.safetensors",
    "size_mb": 210,
    "vocab_size": 32_000,
    "embedding_dim": 3072
  },
  
  "total_size_mb": 2100,
  "total_parameters": 3_800_000_000,
  "vram_required_mb": 3800
}`}</pre>
          </div>
        </div>

        {/* What gets preserved vs lost */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 mb-8">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="text-amber-400">⚖️</span> COMPRESSION TRADE-OFFS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.02] p-5">
              <h4 className="font-bold text-emerald-300 mb-3 flex items-center gap-2">
                <span>✓</span> PRESERVED (95%+ fidelity)
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>Reasoning patterns:</strong> Chain-of-thought structure, backtracking, self-correction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>Domain expertise:</strong> All 8 cognitive domains compressed into dense representations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>Meta-reasoning:</strong> Confidence calibration, loop detection, verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>Problem decomposition:</strong> Breaking complex problems into sub-problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>Cross-domain synthesis:</strong> Analogical reasoning, pattern transfer</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/[0.02] p-5">
              <h4 className="font-bold text-red-300 mb-3 flex items-center gap-2">
                <span>✗</span> COMPROMISED (reduced capability)
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Raw knowledge:</strong> Factual recall reduced (relies on iDea expansion)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Nuance detection:</strong> Subtle language understanding reduced</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Edge cases:</strong> Rare scenarios less reliable (needs more expansion passes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Speed:</strong> Slower due to graph expansion overhead (25 tok/s vs 80 tok/s)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span><strong>Context window:</strong> 4K vs 200K (mitigated by graph compression)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Layer-by-layer comparison */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="text-cyan-400">🔬</span> LAYER-BY-LAYER ARCHITECTURE COMPARISON
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-xs text-gray-500 uppercase tracking-wider">Component</th>
                  <th className="text-center py-3 px-4 text-xs text-violet-400 uppercase tracking-wider">Opus (Full)</th>
                  <th className="text-center py-3 px-4 text-xs text-emerald-400 uppercase tracking-wider">Phi-3 Cortex</th>
                  <th className="text-center py-3 px-4 text-xs text-gray-500 uppercase tracking-wider">Ratio</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Base Model Size</td>
                  <td className="text-center py-3 px-4 text-violet-400 font-mono">294 GB</td>
                  <td className="text-center py-3 px-4 text-emerald-400 font-mono">1.47 GB</td>
                  <td className="text-center py-3 px-4 text-gray-500 font-mono">200:1</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Layers</td>
                  <td className="text-center py-3 px-4 text-violet-400 font-mono">126</td>
                  <td className="text-center py-3 px-4 text-emerald-400 font-mono">32</td>
                  <td className="text-center py-3 px-4 text-gray-500 font-mono">3.9:1</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Hidden Dimension</td>
                  <td className="text-center py-3 px-4 text-violet-400 font-mono">16,384</td>
                  <td className="text-center py-3 px-4 text-emerald-400 font-mono">3,072</td>
                  <td className="text-center py-3 px-4 text-gray-500 font-mono">5.3:1</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Attention Heads</td>
                  <td className="text-center py-3 px-4 text-violet-400 font-mono">128</td>
                  <td className="text-center py-3 px-4 text-emerald-400 font-mono">32</td>
                  <td className="text-center py-3 px-4 text-gray-500 font-mono">4:1</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Expert Domains</td>
                  <td className="text-center py-3 px-4 text-violet-400 font-mono">8 × 70GB</td>
                  <td className="text-center py-3 px-4 text-emerald-400 font-mono">420MB (iDea)</td>
                  <td className="text-center py-3 px-4 text-gray-500 font-mono">1333:1</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Reasoning Depth Module</td>
                  <td className="text-center py-3 px-4 text-violet-400 font-mono">21 GB</td>
                  <td className="text-center py-3 px-4 text-emerald-400 font-mono">210 MB</td>
                  <td className="text-center py-3 px-4 text-gray-500 font-mono">100:1</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Vocabulary Size</td>
                  <td className="text-center py-3 px-4 text-violet-400 font-mono">200,000</td>
                  <td className="text-center py-3 px-4 text-emerald-400 font-mono">32,000</td>
                  <td className="text-center py-3 px-4 text-gray-500 font-mono">6.25:1</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Total Parameters</td>
                  <td className="text-center py-3 px-4 text-violet-400 font-mono text-lg">2.0T</td>
                  <td className="text-center py-3 px-4 text-emerald-400 font-mono text-lg">3.8B</td>
                  <td className="text-center py-3 px-4 text-gray-500 font-mono text-lg">526:1</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Total Storage</td>
                  <td className="text-center py-3 px-4 text-violet-400 font-mono text-lg">420 GB</td>
                  <td className="text-center py-3 px-4 text-emerald-400 font-mono text-lg">2.1 GB</td>
                  <td className="text-center py-3 px-4 text-emerald-400 font-mono text-lg font-bold">200:1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-violet-500/5 to-emerald-500/5 border border-white/10">
            <p className="text-sm text-gray-400">
              <span className="text-white font-semibold">Key Insight:</span> The compression isn't uniform. Reasoning patterns compress at <span className="text-emerald-400">10:1</span>, 
              expert domains at <span className="text-emerald-400">1333:1</span>, but the base model at <span className="text-emerald-400">200:1</span>. 
              This is because <span className="text-white">reasoning structure is highly compressible</span> while raw knowledge requires more parameters. 
              iDea's graph search compensates by <span className="text-white">dynamically expanding reasoning at inference time</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
