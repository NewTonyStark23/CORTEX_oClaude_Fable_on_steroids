export default function ReasoningTraces() {
  return (
    <section id="traces" className="relative py-32 px-6">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">OPEN REASONING DATA — 116,200 TRACES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Claude Opus <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Reasoning Traces</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            116,200 high-quality reasoning traces for training local models. 
            Includes general CoT, domain-specific reasoning, meta-reasoning, knowledge application, and cross-domain synthesis.
          </p>
        </div>

        {/* Trace breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {[
            { category: 'General CoT', count: '50,000', percent: '43%', color: 'violet', icon: '🧠' },
            { category: 'Domain-Specific', count: '30,000', percent: '26%', color: 'fuchsia', icon: '🎯' },
            { category: 'Meta-Reasoning', count: '20,000', percent: '17%', color: 'amber', icon: '🔄' },
            { category: 'Knowledge Application', count: '15,000', percent: '13%', color: 'cyan', icon: '💡' },
            { category: 'Cross-Domain', count: '1,200', percent: '1%', color: 'emerald', icon: '🧬' },
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
          <div className="text-xs text-gray-500 mb-4">// reasoning_trace_schema.json — Required fields per trace</div>
          <pre className="text-gray-300 whitespace-pre-wrap">{`{
  "trace_id": "string (uuid)",
  "category": "general_cot | domain_specific | meta_reasoning | knowledge_application | cross_domain",
  "domain": "bug_hunting | ambiguous_reqs | cross_domain | creative | theory_of_mind | architecture | algorithms | refactor | null",
  "difficulty": "easy | medium | hard | expert",
  "problem": {
    "statement": "string (natural language problem description)",
    "context": "string (optional background information)",
    "constraints": "string[] (optional limitations or requirements)",
    "input_data": "any (optional structured input)"
  },
  "reasoning_trace": {
    "steps": [
      {
        "step_id": "integer",
        "thought": "string (internal reasoning)",
        "action": "string (what was done/decided)",
        "confidence": "float (0.0-1.0)",
        "evidence": "string (optional supporting evidence)",
        "uncertainty_flags": "string[] (optional doubts or alternatives considered)"
      }
    ],
    "total_steps": "integer",
    "key_sequence": "string (compressed representation of critical reasoning path)",
    "branching_points": "integer[] (step IDs where alternative paths were considered)"
  },
  "solution": {
    "answer": "any (final answer/solution)",
    "explanation": "string (human-readable explanation)",
    "verification": {
      "method": "string (how solution was verified)",
      "passed": "boolean",
      "edge_cases_tested": "string[]",
      "confidence_score": "float (0.0-1.0)"
    }
  },
  "domain_weight_allocation": {
    "bug_hunting": "float (0.0-1.0)",
    "ambiguous_reqs": "float (0.0-1.0)",
    "cross_domain": "float (0.0-1.0)",
    "creative": "float (0.0-1.0)",
    "theory_of_mind": "float (0.0-1.0)",
    "architecture": "float (0.0-1.0)",
    "algorithms": "float (0.0-1.0)",
    "refactor": "float (0.0-1.0)"
  },
  "metadata": {
    "source_model": "string (e.g., 'claude-opus-2024-enhanced')",
    "generation_timestamp": "ISO8601",
    "quality_score": "float (0.0-1.0)",
    "human_verified": "boolean",
    "tags": "string[]"
  }
}`}</pre>
        </div>

        {/* Category details */}
        <div className="space-y-6 mb-12">
          {/* General CoT */}
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-violet-300 flex items-center gap-2">
                <span className="text-xl">🧠</span> GENERAL CHAIN-OF-THOUGHT (50,000 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">43%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">COVERAGE</h4>
                <ul className="text-sm text-gray-300 space-y-1.5">
                  <li>• Mathematical reasoning (algebra, calculus, discrete math)</li>
                  <li>• Logical puzzles and deductive reasoning</li>
                  <li>• Common sense reasoning and inference</li>
                  <li>• Multi-step problem decomposition</li>
                  <li>• Analogical reasoning and pattern recognition</li>
                  <li>• Temporal and causal reasoning</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">DIFFICULTY DISTRIBUTION</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-16">Easy:</span>
                    <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-violet-500" style={{width: '30%'}} />
                    </div>
                    <span className="text-xs text-gray-400 w-12">30%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-16">Medium:</span>
                    <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-violet-500" style={{width: '45%'}} />
                    </div>
                    <span className="text-xs text-gray-400 w-12">45%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-16">Hard:</span>
                    <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-violet-500" style={{width: '20%'}} />
                    </div>
                    <span className="text-xs text-gray-400 w-12">20%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-16">Expert:</span>
                    <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-violet-500" style={{width: '5%'}} />
                    </div>
                    <span className="text-xs text-gray-400 w-12">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Domain-Specific */}
          <div className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-fuchsia-300 flex items-center gap-2">
                <span className="text-xl">🎯</span> DOMAIN-SPECIFIC REASONING (30,000 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20">26%</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { domain: '🔍 Bug Hunting', count: '5,000', examples: 'race conditions, memory leaks, logic errors' },
                { domain: '🌀 Ambiguous Reqs', count: '5,000', examples: 'vague specs, contradictions, missing info' },
                { domain: '🏗️ Architecture', count: '5,000', examples: 'system design, scalability, trade-offs' },
                { domain: '🧮 Algorithms', count: '5,000', examples: 'novel algorithms, complexity analysis' },
                { domain: '🧠 Theory of Mind', count: '4,000', examples: 'intent inference, perspective-taking' },
                { domain: '⚡ Creative', count: '3,000', examples: 'brainstorming, novel solutions' },
                { domain: '🔄 Refactor', count: '3,000', examples: 'multi-file changes, consistency' },
                { domain: '🧬 Cross-Domain', count: '0', examples: '(see cross-domain section)' },
              ].map((item) => (
                <div key={item.domain} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                  <div className="text-sm font-semibold mb-1">{item.domain}</div>
                  <div className="text-lg font-bold text-white">{item.count}</div>
                  <div className="text-[10px] text-gray-500 mt-1">{item.examples}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Meta-Reasoning */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-amber-300 flex items-center gap-2">
                <span className="text-xl">🔄</span> META-REASONING & SELF-CORRECTION (20,000 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">17%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">TRACE TYPES</h4>
                <ul className="text-sm text-gray-300 space-y-1.5">
                  <li>• <span className="text-amber-400">Error detection:</span> Identifying mistakes in reasoning</li>
                  <li>• <span className="text-amber-400">Backtracking:</span> Recognizing wrong paths and correcting</li>
                  <li>• <span className="text-amber-400">Confidence calibration:</span> Adjusting certainty based on evidence</li>
                  <li>• <span className="text-amber-400">Alternative exploration:</span> Considering multiple approaches</li>
                  <li>• <span className="text-amber-400">Verification loops:</span> Self-checking solutions</li>
                  <li>• <span className="text-amber-400">Uncertainty management:</span> Handling ambiguous situations</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">EXAMPLE TRACE STRUCTURE</h4>
                <div className="font-mono text-xs text-gray-400 space-y-1">
                  <p><span className="text-amber-400">Step 1:</span> Initial approach → confidence 0.7</p>
                  <p><span className="text-amber-400">Step 2:</span> Discover contradiction → confidence 0.3</p>
                  <p><span className="text-amber-400">Step 3:</span> Backtrack to step 1 → explore alternative</p>
                  <p><span className="text-amber-400">Step 4:</span> New approach → confidence 0.8</p>
                  <p><span className="text-amber-400">Step 5:</span> Verify solution → confidence 0.95</p>
                </div>
              </div>
            </div>
          </div>

          {/* Knowledge Application */}
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-cyan-300 flex items-center gap-2">
                <span className="text-xl">💡</span> KNOWLEDGE APPLICATION (15,000 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">13%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold mb-2">Knowledge Domains</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Computer science fundamentals</li>
                  <li>• Software engineering patterns</li>
                  <li>• Mathematics & logic</li>
                  <li>• Systems design</li>
                  <li>• Programming languages</li>
                </ul>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold mb-2">Application Types</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Concept → Implementation</li>
                  <li>• Theory → Practice</li>
                  <li>• Abstract → Concrete</li>
                  <li>• General → Specific</li>
                  <li>• Principle → Example</li>
                </ul>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold mb-2">Quality Metrics</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Accuracy: ≥ 95%</li>
                  <li>• Relevance: ≥ 90%</li>
                  <li>• Completeness: ≥ 85%</li>
                  <li>• Clarity: ≥ 88%</li>
                  <li>• Human verified: 100%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cross-Domain Synthesis */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-emerald-300 flex items-center gap-2">
                <span className="text-xl">🧬</span> CROSS-DOMAIN SYNTHESIS (1,200 traces)
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">1%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">SYNTHESIS TYPES</h4>
                <ul className="text-sm text-gray-300 space-y-1.5">
                  <li>• <span className="text-emerald-400">Analogical transfer:</span> Solutions from domain A → domain B</li>
                  <li>• <span className="text-emerald-400">Hybrid approaches:</span> Combining techniques from multiple fields</li>
                  <li>• <span className="text-emerald-400">Metaphor mapping:</span> Abstract concepts → concrete implementations</li>
                  <li>• <span className="text-emerald-400">Constraint relaxation:</span> Removing/applying constraints across domains</li>
                  <li>• <span className="text-emerald-400">Pattern recognition:</span> Identifying universal patterns</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">DOMAIN PAIRS (Examples)</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">🏗️→🧮</span> Architecture patterns → Algorithm design
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">🧠→🔍</span> Theory of mind → Bug hunting (user intent)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">⚡→🔄</span> Creative solutions → Refactoring strategies
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">🌀→🏗️</span> Ambiguous requirements → System design
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">🧬→All</span> Cross-domain → Any domain combination
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JSONL example */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 mb-8 font-mono text-xs overflow-x-auto">
          <div className="text-gray-500 mb-4">// example_trace.jsonl — Sample reasoning trace</div>
          <pre className="text-gray-300 whitespace-pre-wrap">{`{
  "trace_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "category": "domain_specific",
  "domain": "bug_hunting",
  "difficulty": "hard",
  "problem": {
    "statement": "Find the race condition in this concurrent counter implementation",
    "context": "Multi-threaded application with 4 worker threads incrementing a shared counter",
    "constraints": ["Must be thread-safe", "No locks allowed", "Performance critical"],
    "input_data": {
      "code": "class Counter { int count = 0; void increment() { count++; } }",
      "threads": 4,
      "operations_per_thread": 1000000
    }
  },
  "reasoning_trace": {
    "steps": [
      {
        "step_id": 1,
        "thought": "The increment operation count++ is not atomic. It consists of read-modify-write.",
        "action": "Identified non-atomic operation",
        "confidence": 0.95,
        "evidence": "Java memory model guarantees atomicity only for specific operations",
        "uncertainty_flags": []
      },
      {
        "step_id": 2,
        "thought": "With 4 threads, multiple threads can read the same value before any writes back.",
        "action": "Analyzed thread interleaving",
        "confidence": 0.90,
        "evidence": "Classic race condition pattern",
        "uncertainty_flags": []
      },
      {
        "step_id": 3,
        "thought": "Solution must be lock-free. Options: AtomicInteger, CAS operations, or thread-local counters.",
        "action": "Explored solution space",
        "confidence": 0.85,
        "evidence": "Performance constraint rules out synchronized blocks",
        "uncertainty_flags": ["Need to verify if AtomicInteger meets performance requirements"]
      },
      {
        "step_id": 4,
        "thought": "AtomicInteger uses CAS (Compare-And-Swap) which is lock-free and thread-safe.",
        "action": "Selected optimal solution",
        "confidence": 0.95,
        "evidence": "CAS is hardware-supported, minimal overhead",
        "uncertainty_flags": []
      }
    ],
    "total_steps": 4,
    "key_sequence": "non_atomic→interleaving→lock_free_options→CAS_solution",
    "branching_points": [3]
  },
  "solution": {
    "answer": {
      "fixed_code": "class Counter { AtomicInteger count = new AtomicInteger(0); void increment() { count.incrementAndGet(); } }",
      "explanation": "Replaced int with AtomicInteger which provides thread-safe increment operations using CAS"
    },
    "explanation": "The race condition occurs because count++ is not atomic. Multiple threads can read the same value simultaneously, leading to lost updates. AtomicInteger uses compare-and-swap operations to ensure atomicity without locks.",
    "verification": {
      "method": "stress_test_with_4_threads_1M_operations",
      "passed": true,
      "edge_cases_tested": ["high_contention", "thread_preemption", "memory_visibility"],
      "confidence_score": 0.98
    }
  },
  "domain_weight_allocation": {
    "bug_hunting": 0.85,
    "ambiguous_reqs": 0.0,
    "cross_domain": 0.0,
    "creative": 0.05,
    "theory_of_mind": 0.0,
    "architecture": 0.05,
    "algorithms": 0.05,
    "refactor": 0.0
  },
  "metadata": {
    "source_model": "claude-opus-2024-enhanced",
    "generation_timestamp": "2024-01-15T10:30:00Z",
    "quality_score": 0.96,
    "human_verified": true,
    "tags": ["concurrency", "race_condition", "lock_free", "atomic_operations"]
  }
}`}</pre>
        </div>

        {/* Dataset stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Traces', value: '116,200', icon: '📊' },
            { label: 'Avg Steps/Trace', value: '8.3', icon: '📝' },
            { label: 'Human Verified', value: '100%', icon: '✓' },
            { label: 'Avg Quality Score', value: '0.94', icon: '⭐' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center">
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Licensing */}
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.03] p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <span className="text-2xl">📜</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-emerald-300 mb-3">LICENSE & USAGE RIGHTS</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p>
                  <span className="text-emerald-400 font-semibold">License Type:</span> Research & Commercial Use for Local Model Training
                </p>
                <p>
                  <span className="text-emerald-400 font-semibold">Permissions:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                  <li>✓ Use for training local models (any size)</li>
                  <li>✓ Fine-tuning and adaptation</li>
                  <li>✓ Commercial deployment of trained models</li>
                  <li>✓ Research and academic use</li>
                  <li>✓ Modification and derivative works</li>
                </ul>
                <p>
                  <span className="text-emerald-400 font-semibold">Restrictions:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                  <li>✗ Cannot redistribute raw traces as a dataset</li>
                  <li>✗ Cannot use to train competing AI services (cloud-based)</li>
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
