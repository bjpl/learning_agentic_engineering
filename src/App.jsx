import React, { useState } from 'react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFramework, setSelectedFramework] = useState(null);
  const [showCode, setShowCode] = useState({});

  // Comprehensive framework data from research
  const frameworks = {
    core: [
      { 
        id: 'ans', 
        name: 'ANS', 
        fullName: 'Agent Name Service',
        description: 'PKI-based secure agent discovery and verification system using X.509 certificates',
        performance: 'Sub-ms verification',
        language: 'TypeScript',
        stars: 52,
        category: 'Security & Identity',
        repo: 'https://github.com/ruvnet/Agent-Name-Service',
        highlights: ['PKI Infrastructure', 'X.509 Certificates', 'OWASP Compliant', 'Zero-Trust Architecture'],
        useCases: [
          'Multi-agent authentication in production systems',
          'Secure service discovery in distributed networks',
          'Regulatory compliance for AI systems',
          'Blockchain agent verification'
        ],
        architecture: 'Decentralized PKI with certificate authority, trust chains, and cryptographic verification',
        example: `// ANS Agent Verification Example
import { ANS } from '@ans/core';

const agent = new ANS.Agent({
  certificate: await ANS.generateCertificate({
    commonName: 'production-agent-001',
    organization: 'TechCorp',
    validityDays: 365
  })
});

// Verify and register agent
await agent.register({
  network: 'production',
  capabilities: ['data-processing', 'analysis']
});

// All communications are cryptographically verified
const verified = await agent.execute({
  task: 'process-sensitive-data',
  requiredTrust: 'organization-verified'
});`
      },
      { 
        id: 'a2', 
        name: 'A2', 
        fullName: 'Agile Agents',
        description: 'Serverless intelligent agent deployment across AWS, Azure, and Google Cloud',
        performance: 'Auto-scales 0-10,000 agents',
        language: 'Python',
        version: '0.1',
        category: 'Cloud Infrastructure',
        repo: 'https://github.com/ruvnet/agileagents',
        highlights: ['Multi-cloud', 'Serverless-first', 'Cost-optimized', 'Event-driven'],
        useCases: [
          'Scalable microservices architecture',
          'Event-driven data processing pipelines',
          'Global deployment with regional failover',
          'Cost-effective burst workloads'
        ],
        architecture: 'Serverless functions with distributed state management via DynamoDB/Cosmos DB',
        example: `# A2 Serverless Agent Example
from a2_framework import create_agent

@create_agent({
    'name': 'data-processor',
    'memory': 512,
    'timeout': 30
})
async def handler(event, context):
    # Automatically scales based on load
    processed = await transform_data(event['data'])
    
    # Trigger downstream agents
    await emit_event('data-processed', {
        'id': event['id'],
        'result': processed
    })
    
    return {
        'statusCode': 200,
        'body': {'status': 'success', 'data': processed}
    }`
      },
      { 
        id: 'dspy-ts', 
        name: 'DSPy.ts', 
        fullName: 'Declarative Self-improving Python TypeScript',
        description: 'Browser-native AI framework with automatic prompt optimization and self-improvement',
        performance: '30ms latency, 250ms max',
        language: 'TypeScript',
        category: 'AI Optimization',
        repo: 'https://github.com/ruvnet/dspy.ts',
        highlights: ['Browser-native', 'Self-improving', 'Type-safe', 'Zero-config'],
        useCases: [
          'Browser-based AI applications',
          'Automatic prompt engineering',
          'Offline AI inference',
          'Progressive web apps with AI'
        ],
        architecture: 'Declarative pipeline system with automatic optimization and caching',
        example: `// DSPy.ts Self-Optimizing Pipeline
import { Pipeline, optimize } from 'dspy-ts';

const pipeline = new Pipeline()
  .step('extract', {
    prompt: 'Extract key facts from: {input}',
    model: 'gpt-4-turbo'
  })
  .step('analyze', {
    prompt: 'Analyze implications: {extract.output}',
    model: 'claude-3'
  })
  .step('synthesize', {
    prompt: 'Create actionable summary: {analyze.output}'
  });

// Automatically optimizes prompts based on examples
const optimized = await optimize(pipeline, {
  dataset: trainingData,
  metric: 'accuracy',
  iterations: 100
});

// Execute with 30ms average latency
const result = await optimized.run({ input: document });`
      },
      { 
        id: 'ax', 
        name: 'Ax', 
        fullName: 'Production DSPy Alternative',
        description: 'Zero-dependency production framework supporting 17+ LLM providers with automatic failover',
        performance: 'Zero dependencies, <100ms overhead',
        language: 'TypeScript',
        stars: 2000,
        releases: 249,
        category: 'Multi-Provider',
        repo: 'https://github.com/ax-llm/ax',
        highlights: ['17+ Providers', 'Automatic failover', 'Type-safe', 'Production-ready'],
        useCases: [
          'Enterprise AI applications',
          'Multi-model orchestration',
          'High-availability systems',
          'Cost-optimized provider routing'
        ],
        architecture: 'Provider abstraction layer with intelligent routing and response normalization',
        example: `// Ax Multi-Provider Example
import { Ax } from '@ax-llm/ax';

const ax = new Ax({
  providers: {
    openai: { apiKey: process.env.OPENAI_KEY },
    anthropic: { apiKey: process.env.ANTHROPIC_KEY },
    google: { apiKey: process.env.GOOGLE_KEY }
  }
});

// Automatically routes to best provider
const response = await ax.generate({
  prompt: "Analyze this data",
  requirements: {
    maxLatency: 1000,  // ms
    maxCost: 0.01,     // USD
    capabilities: ['code-generation', 'reasoning']
  }
});

// Unified response format across all providers
console.log(response.text, response.provider, response.latency);`
      },
      { 
        id: 'safla', 
        name: 'SAFLA', 
        fullName: 'Self-Aware Feedback Loop Algorithm',
        description: 'Hyper-optimized Rust framework achieving 172,000+ ops/sec with 60% memory compression',
        performance: '172,000+ ops/sec',
        language: 'Rust',
        memoryCompression: '60%',
        category: 'Performance',
        repo: 'https://github.com/ruvnet/safla',
        highlights: ['Self-learning', 'Memory compression', 'Real-time optimization', 'Zero-copy'],
        useCases: [
          'High-frequency trading systems',
          'Real-time ML inference',
          'Edge computing on IoT devices',
          'Gaming and simulation engines'
        ],
        architecture: 'Custom memory allocator with JIT compilation and continuous performance tuning',
        example: `// SAFLA High-Performance Agent
use safla::{Agent, LearningConfig, OptimizationTarget};

fn main() {
    let config = LearningConfig::new()
        .with_target(OptimizationTarget::Throughput)
        .with_memory_compression(0.6)
        .with_adaptive_learning_rate(true);
    
    let mut agent = Agent::spawn(config);
    
    // Agent learns and optimizes automatically
    agent.train_on_task(|input| {
        process_complex_data(input)
    });
    
    // After training: 172,000+ ops/sec
    let result = agent.execute(data);
    
    println!("Throughput: {} ops/sec", agent.metrics().throughput);
    println!("Memory usage: {}% of baseline", 
             agent.metrics().memory_usage * 100.0);
}`
      }
    ],
    specialized: [
      {
        id: 'federated-mcp',
        name: 'Federated MCP',
        fullName: 'Federated Model Context Protocol',
        description: 'Privacy-preserving distributed learning with differential privacy and secure aggregation',
        performance: 'Scales to 10,000+ nodes',
        language: 'Python/TypeScript',
        category: 'Privacy & Federation',
        repo: 'https://github.com/ruvnet/federated-mcp',
        highlights: ['Differential privacy', 'Homomorphic encryption', 'GDPR compliant', 'Edge training'],
        useCases: [
          'Healthcare AI without data sharing',
          'Financial model collaboration',
          'IoT device learning',
          'Cross-organization ML'
        ],
        architecture: 'Federated learning with secure aggregation and differential privacy',
        example: `// Federated Learning Example
const federation = new FederatedMCP({
  privacy: {
    differential: { epsilon: 1.0 },
    encryption: 'homomorphic'
  }
});

// Train on local data without sharing
const localModel = await federation.trainLocal({
  data: privateDataset,
  epochs: 10
});

// Share only encrypted gradients
await federation.shareGradients(localModel);

// Receive improved global model
const globalModel = await federation.receiveModel();`
      },
      {
        id: 'wifi-densepose',
        name: 'WiFi-DensePose',
        fullName: 'WiFi-based Human Pose Detection',
        description: 'Privacy-preserving human detection using WiFi signals, achieving 30 FPS without cameras',
        performance: '30 FPS real-time',
        language: 'Python/C++',
        accuracy: '94.3%',
        category: 'Novel Sensing',
        repo: 'https://github.com/ruvnet/wifi-densepose',
        highlights: ['Camera-free', 'Through-wall sensing', 'Privacy-preserving', 'Real-time'],
        useCases: [
          'Elderly fall detection',
          'Retail analytics without cameras',
          'Smart home automation',
          'Security monitoring'
        ],
        architecture: 'CSI extraction from WiFi with CNN-based pose reconstruction',
        example: `// WiFi Pose Detection
const detector = new WiFiPoseDetector({
  wifiAdapter: 'wlan0',
  privacyMode: true
});

detector.on('pose', (pose) => {
  if (pose.isFalling()) {
    alert('Fall detected!');
  }
  
  console.log(\`People: \${pose.count}\`);
  console.log(\`FPS: \${detector.fps}\`);
});

await detector.start();`
      },
      {
        id: 'ultrasonic',
        name: 'Ultrasonic.js',
        fullName: 'Ultrasonic Data Transmission',
        description: 'Covert data transmission using inaudible sound frequencies above 20kHz',
        performance: '1.2 Kbps throughput',
        language: 'JavaScript/C++',
        category: 'Steganography',
        repo: 'https://github.com/ruvnet/ultrasonic',
        highlights: ['Inaudible', 'No network required', 'Cross-device', 'Encrypted'],
        useCases: [
          'Proximity authentication',
          'Offline data transfer',
          'Indoor positioning',
          'Secure device pairing'
        ],
        architecture: 'OFDM modulation with Reed-Solomon error correction',
        example: `// Ultrasonic Communication
const transmitter = new UltrasonicTransmitter({
  frequency: 20000, // Hz
  modulation: 'OFDM'
});

await transmitter.send({
  data: 'Secret message',
  encryption: 'AES-256'
});

// Receiver
const receiver = new UltrasonicReceiver();
receiver.on('message', (msg) => {
  console.log('Received:', msg.data);
});`
      }
    ]
  };

  const allFrameworks = [...frameworks.core, ...frameworks.specialized];

  const toggleCode = (id) => {
    setShowCode(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-xl font-bold">Learning Agentic Engineering</h1>
              <p className="text-xs text-gray-400">Master AI Frameworks with SPARC Methodology</p>
            </div>
            <nav className="flex gap-2">
              {['overview', 'frameworks', 'compare', 'learn'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded capitalize transition-colors ${
                    activeTab === tab 
                      ? 'bg-green-500 text-black' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Production-Ready AI Frameworks</h2>
              <p className="text-gray-300 mb-6">
                Comprehensive guide to cutting-edge AI frameworks with real performance metrics, 
                practical examples, and production architectures.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-800 p-4 rounded border border-gray-700">
                <div className="text-2xl font-bold text-green-400">8+</div>
                <div className="text-sm text-gray-400">Frameworks</div>
              </div>
              <div className="bg-gray-800 p-4 rounded border border-gray-700">
                <div className="text-2xl font-bold text-blue-400">172K</div>
                <div className="text-sm text-gray-400">Ops/sec (SAFLA)</div>
              </div>
              <div className="bg-gray-800 p-4 rounded border border-gray-700">
                <div className="text-2xl font-bold text-orange-400">17+</div>
                <div className="text-sm text-gray-400">LLM Providers</div>
              </div>
              <div className="bg-gray-800 p-4 rounded border border-gray-700">
                <div className="text-2xl font-bold text-purple-400">30ms</div>
                <div className="text-sm text-gray-400">Min Latency</div>
              </div>
            </div>

            {/* Quick Start */}
            <div className="bg-gray-800 p-6 rounded border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Quick Start Guide</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">1.</span>
                  <div>
                    <strong>Choose Your Framework:</strong> Based on your use case - performance (SAFLA), 
                    security (ANS), multi-provider (Ax), or privacy (Federated MCP)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">2.</span>
                  <div>
                    <strong>Install & Configure:</strong> Each framework has npm/pip packages with 
                    minimal configuration required
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">3.</span>
                  <div>
                    <strong>Build & Deploy:</strong> Production-ready examples and deployment guides 
                    for AWS, Azure, GCP, and edge devices
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Frameworks Section */}
        {activeTab === 'frameworks' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">AI Frameworks Deep Dive</h2>
            
            {/* Core Frameworks */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Core Frameworks</h3>
              <div className="grid grid-cols-1 gap-4">
                {frameworks.core.map(framework => (
                  <div key={framework.id} className="bg-gray-800 rounded border border-gray-700 overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-green-400">{framework.name}</h4>
                          <p className="text-gray-400">{framework.fullName}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-yellow-400 font-semibold">{framework.performance}</div>
                          <div className="text-sm text-gray-500">{framework.language}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{framework.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {framework.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 rounded text-xs">
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="mb-4">
                        <strong className="text-blue-400">Use Cases:</strong>
                        <ul className="mt-2 space-y-1">
                          {framework.useCases.map((useCase, idx) => (
                            <li key={idx} className="text-sm text-gray-400 flex items-start">
                              <span className="text-green-400 mr-2">•</span>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <strong className="text-blue-400">Architecture:</strong>
                        <p className="text-sm text-gray-400 mt-1">{framework.architecture}</p>
                      </div>

                      <div className="flex gap-2">
                        <button 
                          onClick={() => toggleCode(framework.id)}
                          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition-colors"
                        >
                          {showCode[framework.id] ? 'Hide' : 'Show'} Code Example
                        </button>
                        <a 
                          href={framework.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
                        >
                          View Repository →
                        </a>
                      </div>

                      {showCode[framework.id] && (
                        <div className="mt-4 bg-gray-900 p-4 rounded">
                          <pre className="text-sm overflow-x-auto">
                            <code className="text-gray-300">{framework.example}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Frameworks */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Specialized Frameworks</h3>
              <div className="grid grid-cols-1 gap-4">
                {frameworks.specialized.map(framework => (
                  <div key={framework.id} className="bg-gray-800 rounded border border-gray-700 overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-blue-400">{framework.name}</h4>
                          <p className="text-gray-400">{framework.fullName}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-yellow-400 font-semibold">{framework.performance}</div>
                          <div className="text-sm text-gray-500">{framework.language}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{framework.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {framework.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 rounded text-xs">
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="mb-4">
                        <strong className="text-blue-400">Use Cases:</strong>
                        <ul className="mt-2 space-y-1">
                          {framework.useCases.map((useCase, idx) => (
                            <li key={idx} className="text-sm text-gray-400 flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <button 
                          onClick={() => toggleCode(framework.id)}
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
                        >
                          {showCode[framework.id] ? 'Hide' : 'Show'} Code Example
                        </button>
                        <a 
                          href={framework.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition-colors"
                        >
                          View Repository →
                        </a>
                      </div>

                      {showCode[framework.id] && (
                        <div className="mt-4 bg-gray-900 p-4 rounded">
                          <pre className="text-sm overflow-x-auto">
                            <code className="text-gray-300">{framework.example}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Compare Section */}
        {activeTab === 'compare' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Framework Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800 rounded">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-4 py-3 text-left">Framework</th>
                    <th className="px-4 py-3 text-left">Language</th>
                    <th className="px-4 py-3 text-left">Performance</th>
                    <th className="px-4 py-3 text-left">Best For</th>
                    <th className="px-4 py-3 text-left">Key Feature</th>
                  </tr>
                </thead>
                <tbody>
                  {allFrameworks.map((f, idx) => (
                    <tr key={f.id} className={`border-b border-gray-700 ${idx % 2 === 0 ? 'bg-gray-800' : 'bg-gray-850'}`}>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-green-400">{f.name}</div>
                        <div className="text-xs text-gray-500">{f.fullName}</div>
                      </td>
                      <td className="px-4 py-3 text-gray-300">{f.language}</td>
                      <td className="px-4 py-3 text-yellow-400">{f.performance}</td>
                      <td className="px-4 py-3 text-gray-300">{f.useCases[0]}</td>
                      <td className="px-4 py-3 text-blue-400">{f.highlights[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Decision Matrix */}
            <div className="bg-gray-800 p-6 rounded border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Decision Guide</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-400">→</span>
                  <div>
                    <strong>Need Maximum Performance?</strong> Use <span className="text-yellow-400">SAFLA</span> for 
                    172K+ ops/sec with 60% memory compression
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400">→</span>
                  <div>
                    <strong>Building Enterprise Apps?</strong> Use <span className="text-yellow-400">Ax</span> for 
                    production-ready multi-provider support
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400">→</span>
                  <div>
                    <strong>Need Security & Compliance?</strong> Use <span className="text-yellow-400">ANS</span> for 
                    PKI-based verification and OWASP compliance
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400">→</span>
                  <div>
                    <strong>Serverless Architecture?</strong> Use <span className="text-yellow-400">A2</span> for 
                    auto-scaling across AWS, Azure, and GCP
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400">→</span>
                  <div>
                    <strong>Privacy-Critical?</strong> Use <span className="text-yellow-400">Federated MCP</span> or 
                    <span className="text-yellow-400"> WiFi-DensePose</span> for privacy-preserving AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Learn Section */}
        {activeTab === 'learn' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Learning Paths & Resources</h2>
            
            {/* SPARC Methodology */}
            <div className="bg-gray-800 p-6 rounded border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">SPARC Methodology</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { step: 'S', name: 'Specification', desc: 'Define requirements and objectives' },
                  { step: 'P', name: 'Pseudocode', desc: 'Design solution logic' },
                  { step: 'A', name: 'Architecture', desc: 'Structure system components' },
                  { step: 'R', name: 'Refinement', desc: 'Optimize and improve' },
                  { step: 'C', name: 'Code', desc: 'Implement and deploy' }
                ].map((phase, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                      {phase.step}
                    </div>
                    <div className="font-semibold">{phase.name}</div>
                    <div className="text-xs text-gray-400">{phase.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tutorial Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-6 rounded border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Quick Start Tutorial</h3>
                <div className="space-y-2 text-sm">
                  <div>1. Install your chosen framework</div>
                  <div className="bg-gray-900 p-2 rounded font-mono text-xs">
                    npm install @ax-llm/ax  # or pip install a2-framework
                  </div>
                  <div>2. Import and configure</div>
                  <div className="bg-gray-900 p-2 rounded font-mono text-xs">
                    import {'{ Ax }'} from '@ax-llm/ax';
                  </div>
                  <div>3. Create your first agent</div>
                  <div className="bg-gray-900 p-2 rounded font-mono text-xs">
                    const agent = new Ax({'{ providers: {...} }'});
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Best Practices</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Use environment variables for API keys</li>
                  <li>• Implement proper error handling and retries</li>
                  <li>• Monitor performance metrics in production</li>
                  <li>• Use type safety where available</li>
                  <li>• Follow security best practices (PKI, encryption)</li>
                  <li>• Test with multiple providers for resilience</li>
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-gray-800 p-6 rounded border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Documentation</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• API References</li>
                    <li>• Integration Guides</li>
                    <li>• Migration Paths</li>
                    <li>• Troubleshooting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Examples</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Production Deployments</li>
                    <li>• Performance Benchmarks</li>
                    <li>• Security Patterns</li>
                    <li>• Cost Optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Community</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• GitHub Discussions</li>
                    <li>• Discord Channels</li>
                    <li>• Stack Overflow</li>
                    <li>• Contributing Guide</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;