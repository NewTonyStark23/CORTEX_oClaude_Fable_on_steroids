export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
              <span className="text-sm font-black">C</span>
            </div>
            <div>
              <span className="font-bold">CORTEX</span>
              <span className="text-xs text-gray-500 ml-2">Concept Draft v0.1</span>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            AI Blueprint — "Claude Opus on steroids" — operational spec for the reasoning engine
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <span className="text-xs">i5 • 4GB GPU • 10GB RAM • 10GB SSD</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-gray-600">
            This is an AI-operational blueprint. Weight specs, routing logic, and runtime protocols 
            are designed for machine consumption. All parameters are targets subject to empirical calibration.
          </p>
        </div>
      </div>
    </footer>
  )
}
