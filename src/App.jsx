import React from 'react';

function App() {
  const frameworks = [
    { name: 'ANS', category: 'Core AI', description: 'Secure AI agent discovery with PKI' },
    { name: 'A2', category: 'Core AI', description: 'Serverless multi-cloud deployment' },
    { name: 'DSPy.ts', category: 'Core AI', description: 'Declarative self-improving AI' },
    { name: 'Ax', category: 'Core AI', description: 'Production DSPy with 15+ providers' },
    { name: 'SAFLA', category: 'Core AI', description: 'Self-aware AI with meta-cognition' },
    { name: 'Federated MCP', category: 'Specialized', description: 'Distributed federated runtime' },
    { name: 'ONNX-Agent', category: 'Specialized', description: 'ML model lifecycle management' },
    { name: 'WiFi-DensePose', category: 'Specialized', description: 'Privacy-preserving pose detection' },
    { name: 'Ultrasonic', category: 'Specialized', description: 'Steganographic command embedding' },
    { name: 'Mastra', category: 'JS/TS', description: 'TypeScript agent framework' },
    { name: 'OpenAI SDK', category: 'JS/TS', description: 'Multi-agent coordination' },
    { name: 'LangChain.js', category: 'JS/TS', description: 'Comprehensive LLM framework' },
    { name: 'ONNX Runtime', category: 'Runtime', description: 'Cross-platform ML inference' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Learning Agentic Engineering
          </h1>
          <p className="text-xl text-gray-300">
            Master AI Frameworks Through SPARC Methodology
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">🚀 AI Frameworks Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{framework.name}</h3>
                  <span className="text-xs bg-blue-500/50 px-2 py-1 rounded">
                    {framework.category}
                  </span>
                </div>
                <p className="text-gray-300">{framework.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">📚 Learning Paths</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-500/20 p-6 rounded-lg border border-green-500/50">
              <h3 className="text-xl font-semibold mb-2">Beginner</h3>
              <p>4 weeks • Fundamentals</p>
            </div>
            <div className="bg-yellow-500/20 p-6 rounded-lg border border-yellow-500/50">
              <h3 className="text-xl font-semibold mb-2">Intermediate</h3>
              <p>6 weeks • Scalable Systems</p>
            </div>
            <div className="bg-red-500/20 p-6 rounded-lg border border-red-500/50">
              <h3 className="text-xl font-semibold mb-2">Advanced</h3>
              <p>8 weeks • Cutting-edge Tech</p>
            </div>
          </div>
        </section>

        <footer className="text-center py-8 mt-12 border-t border-white/20">
          <p className="text-gray-400">
            Built with Flow Nexus • Powered by SPARC Methodology
          </p>
          <a href="https://github.com/bjpl/learning_agentic_engineering" 
             className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
            View on GitHub →
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;