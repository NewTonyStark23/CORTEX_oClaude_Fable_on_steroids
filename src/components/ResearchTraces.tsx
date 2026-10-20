export default function ResearchTraces() {
  return (
    <section id="research" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-fuchsia-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 mb-4">
            <span className="text-[10px] font-bold tracking-widest text-fuchsia-400 uppercase">OPEN RESEARCH DATA — 18,000 TRACES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Research <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Traces</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            18,000 research-grade reasoning traces covering the full scientific method: hypothesis formation, 
            experimental design, mathematical proofs, and interdisciplinary synthesis.
          </p>
        </div>

        {/* Trace breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { category: 'Research Process', count: '5,000', percent: '28%', color: 'violet', icon: '🔬' },
            { category: 'Thought Graph Search', count: '2,000', percent: '11%', color: 'fuchsia', icon: '🕸️' },
            { category: 'Math Proofs', count: '3,000', percent: '17%', color: 'cyan', icon: '∑' },
            { category: 'CS Theory Proofs', count: '2,000', percent: '11%', color: 'emerald', icon: '🧮' },
          ].map((item) => (
            <div key={item.category} className={`rounded-2xl border border-${item.color}-500/20 bg-${item.color}-500/[0.02] p-5`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{item.icon}</span>
                <span className={`text-xs font-bold text-${item.color}-400`}>{item.percent}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{item.count}</div>
              <div className="text-xs text-gray-400">{item.category}</div>
            </div>
          ))}
          {[
            { category: 'Systems Research', count: '2,000', percent: '11%', color: 'amber', icon: '⚙️' },
            { category: 'ML Theory', count: '2,000', percent: '11%', color: 'pink', icon: '🤖' },
            { category: 'Interdisciplinary', count: '1,000', percent: '6%', color: 'indigo', icon: '🧬' },
            { category: 'Meta-Reasoning', count: '2,000', percent: '11%', color: 'rose', icon: '🔄' },
          ].map((item) => (
            <div key={item.category} className={`rounded-2xl border border-${item.color}-500/20 bg-${item.color}-500/[0.02] p-5`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{item.icon}</span>
                <span className={`text-xs font-bold text-${item.color}-400`}>{item.percent}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{item.count}</div>
              <div className="text-xs text-gray-400">{item.category}</div>
            </div>
          ))}
        </div>

        {/* Trace structure specification */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 mb-8 font-mono text-sm overflow-x-auto">
          <div className="text-xs text-gray-500 mb-4">// research_trace_schema.json — Required fields per trace</div>
          <pre className="text-gray-300 whitespace-pre-wrap">{`{
  "trace_id": "string (uuid)",
  "category": "research_process | thought_graph | math_proof | cs_proof | systems_research | ml_theory | interdisciplinary | meta_reasoning",
  "domain": "string (specific research domain)",
  "difficulty": "undergraduate | graduate | research | frontier",
  "problem": {
    "statement": "string (research question or theorem to prove)",
    "context": "string (background, related work, motivation)",
    "hypothesis": "string (optional, for research_process)",
    "constraints": "string[] (assumptions, limitations)",
    "formal_specification": "string (optional, for proofs)"
  },
  "reasoning_trace": {
    "steps": [
      {
        "step_id": "integer",
        "thought": "string (research reasoning or proof step)",
        "action": "string (experiment design, lemma proof, etc.)",
        "confidence": "float (0.0-1.0)",
        "evidence": "string (data, citations, logical deductions)",
        "uncertainty_flags": "string[] (gaps, alternative hypotheses)"
      }
    ],
    "total_steps": "integer",
    "key_sequence": "string (compressed reasoning path)"
  },
  "graph_state_evolution": {
    "initial_state": {
      "nodes": [{"id": "string", "type": "hypothesis|evidence|conclusion|method", "content": "string"}],
      "edges": [{"from": "string", "to": "string", "relation": "supports|contradicts|extends|requires"}]
    },
    "evolution": [
      {
        "step_id": "integer",
        "added_nodes": [{"id": "string", "type": "string", "content": "string"}],
        "added_edges": [{"from": "string", "to": "string", "relation": "string"}],
        "removed_nodes": ["string"],
        "removed_edges": [{"from": "string", "to": "string"}],
        "rationale": "string (why graph changed)"
      }
    ],
    "final_state": {
      "nodes": [{"id": "string", "type": "string", "content": "string"}],
      "edges": [{"from": "string", "to": "string", "relation": "string"}]
    }
  },
  "loop_detections": [
    {
      "loop_id": "integer",
      "detected_at_step": "integer",
      "loop_type": "circular_reasoning | redundant_experiment | infinite_regression | tautology",
      "nodes_involved": ["string"],
      "resolution": "string (how loop was broken or avoided)",
      "prevention_strategy": "string"
    }
  ],
  "expansions": [
    {
      "expansion_id": "integer",
      "triggered_at_step": "integer",
      "expansion_type": "sub_proof | experiment | literature_review | counterexample_search",
      "reason": "string (why expansion was needed)",
      "sub_trace_id": "string (reference to sub-trace if applicable)",
      "integration_point": "integer (step where results were integrated)"
    }
  ],
  "solution": {
    "answer": "any (theorem proved, research conclusion, etc.)",
    "proof_or_conclusion": "string (formal proof or research findings)",
    "verification": {
      "method": "string (peer review, formal verification, experimental validation)",
      "passed": "boolean",
      "confidence_score": "float (0.0-1.0)",
      "limitations": "string[]"
    }
  },
  "metadata": {
    "source_model": "string (e.g., 'claude-opus-on-steroids')",
    "generation_timestamp": "ISO8601",
    "quality_score": "float (0.0-1.0)",
    "human_verified": "boolean",
    "tags": "string[]",
    "citations": "string[] (optional, for research traces)"
  }
}`}</pre>
        </div>

        {/* Category details */}
        <div className="space-y-6 mb-12">
          {/* Research Process */}
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-violet-300 flex items-center gap-2">
                <span className="text-xl">🔬</span> RESEARCH PROCESS (5,000 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">28%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">RESEARCH CYCLE</h4>
                <div className="font-mono text-xs text-gray-300 space-y-1">
                  <p><span className="text-violet-400">1. OBSERVATION:</span> Identify phenomenon or gap</p>
                  <p><span className="text-violet-400">2. HYPOTHESIS:</span> Formulate testable hypothesis</p>
                  <p><span className="text-violet-400">3. EXPERIMENT:</span> Design controlled experiment</p>
                  <p><span className="text-violet-400">4. DATA:</span> Collect and analyze data</p>
                  <p><span className="text-violet-400">5. INTERPRET:</span> Draw conclusions, assess validity</p>
                  <p><span className="text-violet-400">6. ITERATE:</span> Refine or reject hypothesis</p>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">DOMAINS COVERED</h4>
                <ul className="text-sm text-gray-300 space-y-1.5">
                  <li>• Computer science (algorithms, systems, AI)</li>
                  <li>• Mathematics (pure and applied)</li>
                  <li>• Physics (theoretical and experimental)</li>
                  <li>• Biology (computational, systems)</li>
                  <li>• Engineering (software, hardware)</li>
                  <li>• Interdisciplinary research methods</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Thought Graph Search */}
          <div className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-fuchsia-300 flex items-center gap-2">
                <span className="text-xl">🕸️</span> AUTOMATED THOUGHT GRAPH SEARCH (2,000 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20">11%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">GRAPH OPERATIONS</h4>
                <ul className="text-sm text-gray-300 space-y-1.5">
                  <li>• <span className="text-fuchsia-400">Node expansion:</span> Adding hypotheses, evidence, methods</li>
                  <li>• <span className="text-fuchsia-400">Edge creation:</span> Establishing relationships (supports, contradicts)</li>
                  <li>• <span className="text-fuchsia-400">Pruning:</span> Removing weak or contradictory nodes</li>
                  <li>• <span className="text-fuchsia-400">Traversal:</span> BFS/DFS for exploration strategies</li>
                  <li>• <span className="text-fuchsia-400">Merging:</span> Combining parallel research threads</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">SEARCH STRATEGIES</h4>
                <ul className="text-sm text-gray-300 space-y-1.5">
                  <li>• Beam search (top-k most promising paths)</li>
                  <li>• Monte Carlo Tree Search (MCTS) for exploration</li>
                  <li>• A* with heuristic guidance</li>
                  <li>• Backtracking on dead ends</li>
                  <li>• Parallel exploration of multiple hypotheses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Math Proofs */}
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-cyan-300 flex items-center gap-2">
                <span className="text-xl">∑</span> MATHEMATICAL PROOFS (3,000 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">17%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold mb-2">Proof Techniques</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Direct proof</li>
                  <li>• Proof by contradiction</li>
                  <li>• Mathematical induction</li>
                  <li>• Proof by contrapositive</li>
                  <li>• Constructive proof</li>
                  <li>• Probabilistic proof</li>
                </ul>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold mb-2">Math Domains</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Real analysis</li>
                  <li>• Abstract algebra</li>
                  <li>• Number theory</li>
                  <li>• Combinatorics</li>
                  <li>• Graph theory</li>
                  <li>• Topology</li>
                </ul>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold mb-2">Proof Structure</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Lemma → Theorem → Corollary</li>
                  <li>• Base case + inductive step</li>
                  <li>• Assumption → contradiction</li>
                  <li>• ∀x ∃y construction</li>
                  <li>• Q.E.D. verification</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CS Theory Proofs */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-emerald-300 flex items-center gap-2">
                <span className="text-xl">🧮</span> CS THEORY PROOFS (2,000 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">11%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">THEORY AREAS</h4>
                <ul className="text-sm text-gray-300 space-y-1.5">
                  <li>• <span className="text-emerald-400">Complexity theory:</span> P vs NP, reductions, completeness</li>
                  <li>• <span className="text-emerald-400">Automata theory:</span> DFA/NFA equivalence, pumping lemma</li>
                  <li>• <span className="text-emerald-400">Computability:</span> Turing machines, halting problem</li>
                  <li>• <span className="text-emerald-400">Algorithm correctness:</span> Loop invariants, termination</li>
                  <li>• <span className="text-emerald-400">Information theory:</span> Entropy, channel capacity</li>
                  <li>• <span className="text-emerald-400">Cryptography:</span> Security proofs, reductions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">PROOF PATTERNS</h4>
                <div className="font-mono text-xs text-gray-400 space-y-1">
                  <p>• Reduction: A ≤ₚ B (polynomial-time)</p>
                  <p>• Diagonalization: Construct counterexample</p>
                  <p>• Adversarial argument: Show no algorithm works</p>
                  <p>• Probabilistic method: Show existence</p>
                  <p>• Amortized analysis: Average case bounds</p>
                  <p>• Potential function: Prove termination</p>
                </div>
              </div>
            </div>
          </div>

          {/* Systems Research */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-amber-300 flex items-center gap-2">
                <span className="text-xl">⚙️</span> SYSTEMS RESEARCH (2,000 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">11%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">SYSTEMS DOMAINS</h4>
                <ul className="text-sm text-gray-300 space-y-1.5">
                  <li>• Operating systems (scheduling, memory management)</li>
                  <li>• Distributed systems (consensus, replication)</li>
                  <li>• Databases (query optimization, transactions)</li>
                  <li>• Networks (protocols, routing, congestion control)</li>
                  <li>• Compilers (optimization, code generation)</li>
                  <li>• Security (vulnerability analysis, formal methods)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">RESEARCH METHODS</h4>
                <ul className="text-sm text-gray-300 space-y-1.5">
                  <li>• Performance benchmarking & profiling</li>
                  <li>• Formal verification (model checking)</li>
                  <li>• Empirical evaluation (real-world workloads)</li>
                  <li>• Simulation & emulation</li>
                  <li>• Prototype implementation</li>
                  <li>• Comparative analysis (baseline vs novel)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ML Theory */}
          <div className="rounded-2xl border border-pink-500/20 bg-pink-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-pink-300 flex items-center gap-2">
                <span className="text-xl">🤖</span> ML THEORY (2,000 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">11%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold mb-2">Learning Theory</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• PAC learning bounds</li>
                  <li>• VC dimension analysis</li>
                  <li>• Rademacher complexity</li>
                  <li>• Generalization gaps</li>
                  <li>• Bias-variance tradeoff</li>
                </ul>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold mb-2">Optimization</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Convergence proofs</li>
                  <li>• Gradient descent analysis</li>
                  <li>• Convexity arguments</li>
                  <li>• saddle point avoidance</li>
                  <li>• Learning rate schedules</li>
                </ul>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold mb-2">Deep Learning</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Expressiveness proofs</li>
                  <li>• Universal approximation</li>
                  <li>• Neural tangent kernel</li>
                  <li>• Double descent phenomenon</li>
                  <li>• Lottery ticket hypothesis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interdisciplinary Synthesis */}
          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-indigo-300 flex items-center gap-2">
                <span className="text-xl">🧬</span> INTERDISCIPLINARY SYNTHESIS (1,000 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">6%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">SYNTHESIS EXAMPLES</h4>
                <ul className="text-sm text-gray-300 space-y-1.5">
                  <li>• <span className="text-indigo-400">Biology + CS:</span> Evolutionary algorithms, genetic programming</li>
                  <li>• <span className="text-indigo-400">Physics + ML:</span> Physics-informed neural networks</li>
                  <li>• <span className="text-indigo-400">Math + Systems:</span> Formal methods for distributed systems</li>
                  <li>• <span className="text-indigo-400">Neuroscience + AI:</span> Brain-inspired architectures</li>
                  <li>• <span className="text-indigo-400">Economics + Game Theory:</span> Mechanism design for multi-agent systems</li>
                  <li>• <span className="text-indigo-400">Linguistics + NLP:</span> Formal grammar theories for language models</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">METHODOLOGY</h4>
                <div className="font-mono text-xs text-gray-400 space-y-1">
                  <p>1. Identify analogous structures across domains</p>
                  <p>2. Extract transferable principles</p>
                  <p>3. Adapt methods to new context</p>
                  <p>4. Validate cross-domain applicability</p>
                  <p>5. Synthesize unified framework</p>
                  <p>6. Demonstrate novel insights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Meta-Reasoning / Loop Detection */}
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-rose-300 flex items-center gap-2">
                <span className="text-xl">🔄</span> META-REASONING & LOOP DETECTION (2,000 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">11%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">LOOP TYPES DETECTED</h4>
                <ul className="text-sm text-gray-300 space-y-1.5">
                  <li>• <span className="text-rose-400">Circular reasoning:</span> A→B→A without progress</li>
                  <li>• <span className="text-rose-400">Redundant experiments:</span> Repeating same test</li>
                  <li>• <span className="text-rose-400">Infinite regression:</span> Endless "why" chains</li>
                  <li>• <span className="text-rose-400">Tautology:</span> Proving X from X</li>
                  <li>• <span className="text-rose-400">Scope creep:</span> Expanding problem indefinitely</li>
                  <li>• <span className="text-rose-400">Analysis paralysis:</span> Over-thinking without action</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">BREAKING STRATEGIES</h4>
                <ul className="text-sm text-gray-300 space-y-1.5">
                  <li>• Detect cycles in reasoning graph</li>
                  <li>• Force progress with concrete experiments</li>
                  <li>• Introduce external information</li>
                  <li>• Simplify problem scope</li>
                  <li>• Switch to different approach</li>
                  <li>• Accept approximate solution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* JSONL example */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 mb-8 font-mono text-xs overflow-x-auto">
          <div className="text-gray-500 mb-4">// example_research_trace.jsonl — Sample research trace with graph evolution</div>
          <pre className="text-gray-300 whitespace-pre-wrap">{`{
  "trace_id": "r1s2e3a4-r5c6-h7t8-r9a0-c1e2s3e4a5r6",
  "category": "research_process",
  "domain": "distributed_systems",
  "difficulty": "research",
  "problem": {
    "statement": "Can we achieve consensus in an asynchronous network with up to f Byzantine faults using fewer than 3f+1 nodes?",
    "context": "FLP impossibility result shows consensus is impossible in asynchronous systems with even one fault. However, practical systems use partial synchrony or randomness.",
    "hypothesis": "By introducing a leader election protocol with cryptographic sortition, we can reduce the node requirement to 2f+1 while maintaining safety.",
    "constraints": ["Asynchronous network", "Byzantine faults", "Safety must be guaranteed", "Liveness with probability 1"]
  },
  "reasoning_trace": {
    "steps": [
      {
        "step_id": 1,
        "thought": "FLP impossibility applies to deterministic protocols. Can we use randomness to bypass this?",
        "action": "Survey randomized consensus protocols",
        "confidence": 0.85,
        "evidence": "Ben-Or 1983 showed randomized consensus is possible",
        "uncertainty_flags": ["Expected time may be exponential"]
      },
      {
        "step_id": 2,
        "thought": "If we use cryptographic sortition (VRF) for leader election, we can have a single leader per round.",
        "action": "Design leader election mechanism",
        "confidence": 0.90,
        "evidence": "Algorand uses VRF for committee selection",
        "uncertainty_flags": []
      },
      {
        "step_id": 3,
        "thought": "With 2f+1 nodes and a single leader, we need f+1 acknowledgments. But what if the leader is Byzantine?",
        "action": "Analyze safety under Byzantine leader",
        "confidence": 0.75,
        "evidence": "Leader can send conflicting messages",
        "uncertainty_flags": ["Need view-change protocol"]
      },
      {
        "step_id": 4,
        "thought": "Add view-change: if leader doesn't propose within timeout, nodes elect new leader. Requires 2f+1 agreement.",
        "action": "Integrate view-change mechanism",
        "confidence": 0.88,
        "evidence": "PBFT uses similar approach",
        "uncertainty_flags": []
      }
    ],
    "total_steps": 4,
    "key_sequence": "FLP_bypass→randomized_leader→safety_analysis→view_change"
  },
  "graph_state_evolution": {
    "initial_state": {
      "nodes": [
        {"id": "n1", "type": "hypothesis", "content": "2f+1 nodes sufficient with randomness"},
        {"id": "n2", "type": "evidence", "content": "FLP impossibility (deterministic)"}
      ],
      "edges": [
        {"from": "n2", "to": "n1", "relation": "motivates"}
      ]
    },
    "evolution": [
      {
        "step_id": 1,
        "added_nodes": [
          {"id": "n3", "type": "evidence", "content": "Ben-Or randomized consensus"},
          {"id": "n4", "type": "method", "content": "Use VRF for leader election"}
        ],
        "added_edges": [
          {"from": "n3", "to": "n1", "relation": "supports"},
          {"from": "n4", "to": "n1", "relation": "implements"}
        ],
        "removed_nodes": [],
        "removed_edges": [],
        "rationale": "Established theoretical foundation for randomized approach"
      },
      {
        "step_id": 2,
        "added_nodes": [
          {"id": "n5", "type": "evidence", "content": "Algorand VRF implementation"}
        ],
        "added_edges": [
          {"from": "n5", "to": "n4", "relation": "validates"}
        ],
        "removed_nodes": [],
        "removed_edges": [],
        "rationale": "Found practical precedent for VRF-based leader election"
      },
      {
        "step_id": 3,
        "added_nodes": [
          {"id": "n6", "type": "hypothesis", "content": "Byzantine leader can cause safety violation"},
          {"id": "n7", "type": "method", "content": "View-change protocol"}
        ],
        "added_edges": [
          {"from": "n6", "to": "n1", "relation": "threatens"},
          {"from": "n7", "to": "n6", "relation": "mitigates"}
        ],
        "removed_nodes": [],
        "removed_edges": [],
        "rationale": "Identified safety gap and proposed solution"
      }
    ],
    "final_state": {
      "nodes": [
        {"id": "n1", "type": "hypothesis", "content": "2f+1 nodes sufficient with randomness"},
        {"id": "n2", "type": "evidence", "content": "FLP impossibility (deterministic)"},
        {"id": "n3", "type": "evidence", "content": "Ben-Or randomized consensus"},
        {"id": "n4", "type": "method", "content": "Use VRF for leader election"},
        {"id": "n5", "type": "evidence", "content": "Algorand VRF implementation"},
        {"id": "n6", "type": "hypothesis", "content": "Byzantine leader can cause safety violation"},
        {"id": "n7", "type": "method", "content": "View-change protocol"}
      ],
      "edges": [
        {"from": "n2", "to": "n1", "relation": "motivates"},
        {"from": "n3", "to": "n1", "relation": "supports"},
        {"from": "n4", "to": "n1", "relation": "implements"},
        {"from": "n5", "to": "n4", "relation": "validates"},
        {"from": "n6", "to": "n1", "relation": "threatens"},
        {"from": "n7", "to": "n6", "relation": "mitigates"}
      ]
    }
  },
  "loop_detections": [],
  "expansions": [
    {
      "expansion_id": 1,
      "triggered_at_step": 3,
      "expansion_type": "sub_proof",
      "reason": "Need to prove view-change maintains safety",
      "sub_trace_id": "sub_proof_vc_safety_001",
      "integration_point": 4
    }
  ],
  "solution": {
    "answer": {
      "protocol": "Randomized Byzantine consensus with 2f+1 nodes using VRF leader election and view-change",
      "theorem": "Safety is guaranteed. Liveness holds with probability 1 in partially synchronous network."
    },
    "proof_or_conclusion": "By combining randomized leader election (via VRF) with a view-change mechanism, we achieve consensus with 2f+1 nodes. The VRF ensures unpredictable leader selection, preventing adaptive adversaries. View-change handles Byzantine leaders. Formal proof shows safety (no two honest nodes decide differently) and liveness (eventual decision with probability 1).",
    "verification": {
      "method": "formal_verification_with_TLA+",
      "passed": true,
      "confidence_score": 0.92,
      "limitations": ["Assumes partial synchrony after GST", "VRF must be secure", "Expected rounds O(f)"]
    }
  },
  "metadata": {
    "source_model": "claude-opus-on-steroids",
    "generation_timestamp": "2024-02-20T14:22:00Z",
    "quality_score": 0.95,
    "human_verified": true,
    "tags": ["distributed_systems", "consensus", "byzantine_fault_tolerance", "randomized_algorithms"],
    "citations": ["Ben-Or 1983", "Castro & Liskov 1999", "Gilad et al. 2017"]
  }
}`}</pre>
        </div>

        {/* Dataset stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Traces', value: '18,000', icon: '📊' },
            { label: 'Avg Graph Nodes', value: '12.7', icon: '🕸️' },
            { label: 'Human Verified', value: '100%', icon: '✓' },
            { label: 'Avg Quality Score', value: '0.96', icon: '⭐' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center">
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Licensing */}
        <div className="rounded-2xl border border-fuchsia-500/30 bg-fuchsia-500/[0.03] p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center shrink-0">
              <span className="text-2xl">📜</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-fuchsia-300 mb-3">LICENSE & USAGE RIGHTS</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p>
                  <span className="text-fuchsia-400 font-semibold">License Type:</span> Research + Commercial for Local Model Training
                </p>
                <p>
                  <span className="text-fuchsia-400 font-semibold">Permissions:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                  <li>✓ Use for training local models (any size)</li>
                  <li>✓ Fine-tuning for research and commercial applications</li>
                  <li>✓ Academic research and publication</li>
                  <li>✓ Commercial deployment of trained models</li>
                  <li>✓ Modification and derivative works</li>
                </ul>
                <p>
                  <span className="text-fuchsia-400 font-semibold">Restrictions:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                  <li>✗ Cannot redistribute raw traces as a dataset</li>
                  <li>✗ Cannot use to train competing cloud-based AI services</li>
                  <li>✗ Must attribute source in published research</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-white/5">
                  Full license text available in LICENSE.md. Contact: licensing@cortex-ai.dev for commercial inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
