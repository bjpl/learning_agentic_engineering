import React, { useState } from 'react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [count, setCount] = useState(0);

  // Framework data
  const frameworks = [
    { 
      id: 'ans', 
      name: 'ANS', 
      description: 'Secure AI agent discovery with PKI-based identity verification',
      performance: 'Sub-ms verification',
      language: 'TypeScript'
    },
    { 
      id: 'a2', 
      name: 'A2', 
      description: 'Serverless intelligent agent deployment across cloud providers',
      performance: 'Auto-scaling',
      language: 'Python'
    },
    { 
      id: 'dspy-ts', 
      name: 'DSPy.ts', 
      description: 'Browser-based declarative AI with self-improvement',
      performance: '30-250ms inference',
      language: 'TypeScript'
    },
    { 
      id: 'ax', 
      name: 'Ax', 
      description: 'Production-ready DSPy with 15+ LLM providers',
      performance: 'Zero dependencies',
      language: 'TypeScript'
    },
    { 
      id: 'safla', 
      name: 'SAFLA', 
      description: 'Meta-cognitive AI with persistent memory and self-learning',
      performance: '172,000+ ops/sec',
      language: 'Rust'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Learning Agentic Engineering</h1>
          
          {/* Test Counter */}
          <div className="mb-4 p-4 bg-gray-700 rounded">
            <p className="mb-2">Interactive Test Counter:</p>
            <button 
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-400 mr-2"
            >
              Count: {count}
            </button>
            <button 
              onClick={() => setCount(0)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400"
            >
              Reset
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex gap-2">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded ${activeTab === 'overview' ? 'bg-green-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('frameworks')}
              className={`px-4 py-2 rounded ${activeTab === 'frameworks' ? 'bg-green-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              Frameworks
            </button>
            <button 
              onClick={() => setActiveTab('learn')}
              className={`px-4 py-2 rounded ${activeTab === 'learn' ? 'bg-green-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              Learn
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to AI Frameworks Learning</h2>
            <p className="mb-4 text-gray-300">
              Master cutting-edge AI frameworks using the SPARC methodology. 
              Learn from real implementations and build scalable AI systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2 text-green-400">13+ Frameworks</h3>
                <p className="text-gray-400">Comprehensive coverage of modern AI tools</p>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Production Code</h3>
                <p className="text-gray-400">Real-world examples and implementations</p>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2 text-orange-400">SPARC Method</h3>
                <p className="text-gray-400">Structured learning approach</p>
              </div>
            </div>
          </div>
        )}

        {/* Frameworks Section */}
        {activeTab === 'frameworks' && (
          <div>
            <h2 className="text-3xl font-bold mb-4">AI Frameworks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {frameworks.map(framework => (
                <div 
                  key={framework.id}
                  className="bg-gray-800 p-6 rounded hover:bg-gray-700 cursor-pointer transition-colors"
                  onClick={() => alert(`You clicked on ${framework.name}!`)}
                >
                  <h3 className="text-xl font-semibold mb-2 text-green-400">{framework.name}</h3>
                  <p className="text-gray-300 mb-3">{framework.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-400">{framework.language}</span>
                    <span className="text-yellow-400">{framework.performance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learn Section */}
        {activeTab === 'learn' && (
          <div>
            <h2 className="text-3xl font-bold mb-4">Learning Paths</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-6 rounded">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Beginner Path</h3>
                <p className="text-gray-300 mb-3">4 weeks • Introduction to Agentic AI</p>
                <button 
                  onClick={() => alert('Starting Beginner Path!')}
                  className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-400"
                >
                  Start Learning
                </button>
              </div>
              <div className="bg-gray-800 p-6 rounded">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Intermediate Path</h3>
                <p className="text-gray-300 mb-3">6 weeks • Advanced Patterns</p>
                <button 
                  onClick={() => alert('Starting Intermediate Path!')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
                >
                  Start Learning
                </button>
              </div>
              <div className="bg-gray-800 p-6 rounded">
                <h3 className="text-xl font-semibold mb-2 text-orange-400">Expert Path</h3>
                <p className="text-gray-300 mb-3">8 weeks • Production Mastery</p>
                <button 
                  onClick={() => alert('Starting Expert Path!')}
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-400"
                >
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;