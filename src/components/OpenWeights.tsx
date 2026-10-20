export default function OpenWeights() {
  return (
    <section id="open-weights" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
            <span className="text-[10px] font-bold tracking-widest text-violet-400 uppercase">OPEN WEIGHTS — MACHINE READABLE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Open <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Weight Specs</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Actual weight file specifications, parameter counts, and loading instructions.
            AI systems can parse these directly for inference configuration.
          </p>
        </div>

        {/* Weight file manifest */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 mb-8 font-mono text-sm overflow-x-auto">
          <div className="text-xs text-gray-500 mb-4">// cortex_weights_manifest.json</div>
          <pre className="text-gray-300 whitespace-pre-wrap">{`{
  "model_id": "cortex-v0.1-consumer",
  "format": "safetensors",
  "quantization": {
    "method": "GPTQ",
    "bits": 4,
    "group_size": 128,
    "desc_act": true,
    "sym": false
  },
  "total_parameters": 7_200_000_000,
  "active_parameters_per_task": 800_000_000,
  "weight_files": [
    {
      "file": "cortex-base.safetensors",
      "size_mb": 1800,
      "layers": "0-31",
      "type": "shared_backbone",
      "load_priority": "always"
    },
    {
      "file": "cortex-bug-hunting.safetensors",
      "size_mb": 280,
      "domain": "subtle_bug_hunting",
      "expert_layers": [8, 16, 24],
      "load_priority": "on_demand"
    },
    {
      "file": "cortex-ambiguous-reqs.safetensors",
      "size_mb": 260,
      "domain": "ambiguous_requirements",
      "expert_layers": [4, 12, 20, 28],
      "load_priority": "on_demand"
    },
    {
      "file": "cortex-cross-domain.safetensors",
      "size_mb": 320,
      "domain": "cross_domain_synthesis",
      "expert_layers": [6, 14, 22, 30],
      "load_priority": "on_demand"
    },
    {
      "file": "cortex-creative.safetensors",
      "size_mb": 240,
      "domain": "creative_leaps",
      "expert_layers": [10, 18, 26],
      "load_priority": "on_demand"
    },
    {
      "file": "cortex-theory-of-mind.safetensors",
      "size_mb": 270,
      "domain": "theory_of_mind",
      "expert_layers": [5, 13, 21, 29],
      "load_priority": "on_demand"
    },
    {
      "file": "cortex-architecture.safetensors",
      "size_mb": 250,
      "domain": "structured_architecture",
      "expert_layers": [7, 15, 23],
      "load_priority": "on_demand"
    },
    {
      "file": "cortex-algorithms.safetensors",
      "size_mb": 230,
      "domain": "novel_algorithms",
      "expert_layers": [9, 17, 25],
      "load_priority": "on_demand"
    },
    {
      "file": "cortex-refactor.safetensors",
      "size_mb": 260,
      "domain": "multi_file_refactor",
      "expert_layers": [11, 19, 27],
      "load_priority": "on_demand"
    }
  ],
  "tokenizer": {
    "file": "cortex-tokenizer.json",
    "vocab_size": 64_000,
    "type": "BPE"
  },
  "config": {
    "hidden_size": 4096,
    "num_layers": 32,
    "num_attention_heads": 32,
    "num_kv_heads": 8,
    "intermediate_size": 11008,
    "max_position_embeddings": 4096,
    "rms_norm_eps": 1e-5
  }
}`}</pre>
        </div>

        {/* Loading instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.02] p-6">
            <h3 className="font-bold text-cyan-300 mb-4 flex items-center gap-2">
              <span>📦</span> LOADING PROTOCOL
            </h3>
            <div className="font-mono text-xs space-y-2 text-gray-400">
              <p><span className="text-cyan-400">step_1:</span> mmap cortex-base.safetensors (always resident)</p>
              <p><span className="text-cyan-400">step_2:</span> Await domain classification result</p>
              <p><span className="text-cyan-400">step_3:</span> Load domain-specific expert file(s)</p>
              <p><span className="text-cyan-400">step_4:</span> Verify VRAM budget: base + experts {'<'} 3.8GB</p>
              <p><span className="text-cyan-400">step_5:</span> If over budget → offload oldest expert to RAM</p>
              <p><span className="text-cyan-400">step_6:</span> Initialize KV-cache (allocate 600MB)</p>
              <p><span className="text-cyan-400">step_7:</span> Begin inference with loaded weight set</p>
            </div>
          </div>

          <div className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/[0.02] p-6">
            <h3 className="font-bold text-fuchsia-300 mb-4 flex items-center gap-2">
              <span>🔧</span> QUANTIZATION DETAILS
            </h3>
            <div className="font-mono text-xs space-y-2 text-gray-400">
              <p><span className="text-fuchsia-400">base_model:</span> FP16 → GPTQ INT4 (w4a16)</p>
              <p><span className="text-fuchsia-400">group_size:</span> 128 (balance quality/memory)</p>
              <p><span className="text-fuchsia-400">calibration:</span> 128 samples, mixed-domain</p>
              <p><span className="text-fuchsia-400">perplexity_loss:</span> {'<'} 0.3 vs FP16 baseline</p>
              <p><span className="text-fuchsia-400">embedding_layer:</span> kept at FP16 (sensitive)</p>
              <p><span className="text-fuchsia-400">lm_head:</span> kept at FP16 (output quality)</p>
              <p><span className="text-fuchsia-400">attention_projections:</span> INT4 (robust to quant)</p>
            </div>
          </div>
        </div>

        {/* Per-domain weight allocation */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <span className="text-violet-400">🧮</span> PER-DOMAIN WEIGHT ALLOCATION (VRAM Budget)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { domain: 'Bug Hunting', vram: '280MB', layers: '3 expert layers', activation: 'pattern_match + semantic_diff' },
              { domain: 'Ambiguous Reqs', vram: '260MB', layers: '4 expert layers', activation: 'intent_inference + contradiction_detect' },
              { domain: 'Cross-Domain', vram: '320MB', layers: '4 expert layers', activation: 'analogical_map + transfer_learn' },
              { domain: 'Creative Leaps', vram: '240MB', layers: '3 expert layers', activation: 'high_temp_sample + divergent_path' },
              { domain: 'Theory of Mind', vram: '270MB', layers: '4 expert layers', activation: 'perspective_sim + knowledge_gap' },
              { domain: 'Architecture', vram: '250MB', layers: '3 expert layers', activation: 'dep_graph + interface_contract' },
              { domain: 'Novel Algos', vram: '230MB', layers: '3 expert layers', activation: 'complexity_target + approx_design' },
              { domain: 'Multi-Refactor', vram: '260MB', layers: '3 expert layers', activation: 'atomic_change + import_traverse' },
            ].map((item) => (
              <div key={item.domain} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="text-sm font-semibold mb-2">{item.domain}</div>
                <div className="space-y-1.5 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span className="text-gray-500">VRAM:</span>
                    <span className="text-cyan-400 font-mono">{item.vram}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Layers:</span>
                    <span className="font-mono">{item.layers}</span>
                  </div>
                  <div className="pt-1.5 border-t border-white/5">
                    <span className="text-gray-500">Activation:</span>
                    <div className="text-[10px] text-violet-400 mt-0.5 font-mono">{item.activation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
