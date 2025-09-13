import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Network, 
  Cpu, 
  Shield, 
  Zap,
  GitBranch,
  Database,
  Cloud,
  Lock,
  Activity,
  Box,
  ChevronRight,
  ExternalLink,
  Github,
  BookOpen,
  Layers,
  Brain,
  Radio
} from 'lucide-react';
import FrameworkDetail from './components/FrameworkDetail';
import ComparisonMatrix from './components/ComparisonMatrix';
import LearningPaths from './components/LearningPaths';
import CodePlayground from './components/CodePlayground';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedFramework, setSelectedFramework] = useState(null);

  const frameworks = {
    core: [
      {
        id: 'ans',
        name: 'ANS',
        fullName: 'Agent Name Service',
        icon: <Shield className="w-5 h-5" />,
        description: 'Secure AI agent discovery with PKI-based identity verification',
        category: 'Security & Identity',
        language: 'TypeScript',
        stars: 52,
        performance: 'Sub-ms verification',
        production: true,
        highlights: ['PKI Verification', 'X.509 Certificates', 'OWASP Security'],
        useCases: ['Multi-agent authentication', 'Zero-trust networks', 'Service discovery'],
        repo: 'https://github.com/ruvnet/Agent-Name-Service'
      },
      {
        id: 'a2',
        name: 'A2',
        fullName: 'Agile Agents',
        icon: <Cloud className="w-5 h-5" />,
        description: 'Serverless intelligent agent deployment across AWS, Azure, GCP',
        category: 'Cloud Infrastructure',
        language: 'Python',
        version: '0.1',
        performance: 'Auto-scaling',
        production: true,
        highlights: ['Multi-cloud', 'Serverless', 'Cost optimization'],
        useCases: ['Scalable microservices', 'Event-driven workflows', 'Global deployment'],
        repo: 'https://github.com/ruvnet/agileagents'
      },
      {
        id: 'dspy-ts',
        name: 'DSPy.ts',
        fullName: 'Declarative Self-improving Python TypeScript',
        icon: <Brain className="w-5 h-5" />,
        description: 'Browser-based declarative AI with self-improvement capabilities',
        category: 'AI Optimization',
        language: 'TypeScript',
        performance: '30-250ms inference',
        production: true,
        highlights: ['Self-improving', 'Browser inference', 'Type-safe'],
        useCases: ['Prompt optimization', 'Browser AI apps', 'Offline inference'],
        repo: 'https://github.com/ruvnet/dspy.ts'
      },
      {
        id: 'ax',
        name: 'Ax',
        fullName: 'Production DSPy Alternative',
        icon: <Zap className="w-5 h-5" />,
        description: 'Production-ready DSPy with 15+ LLM providers',
        category: 'Multi-Provider',
        language: 'TypeScript',
        stars: 2000,
        releases: 249,
        performance: 'Zero dependencies',
        production: true,
        highlights: ['15+ Providers', 'Fallback support', 'Production-ready'],
        useCases: ['Enterprise apps', 'Multi-model systems', 'High availability'],
        repo: 'https://github.com/ax-llm/ax'
      },
      {
        id: 'safla',
        name: 'SAFLA',
        fullName: 'Self-Aware Feedback Loop Algorithm',
        icon: <Activity className="w-5 h-5" />,
        description: 'Meta-cognitive AI with persistent memory and self-learning',
        category: 'Cognitive Systems',
        language: 'Python',
        performance: '172,000+ ops/sec',
        memoryCompression: '60%',
        production: true,
        highlights: ['Meta-cognition', 'Persistent memory', 'Self-learning'],
        useCases: ['Autonomous agents', 'Long-term memory', 'Self-improvement'],
        repo: 'https://github.com/ruvnet/SAFLA'
      }
    ],
    specialized: [
      {
        id: 'federated-mcp',
        name: 'Federated MCP',
        fullName: 'Federated Model Context Protocol',
        icon: <Network className="w-5 h-5" />,
        description: 'Distributed runtime for federated AI services with edge computing',
        category: 'Distributed Systems',
        language: 'TypeScript/Deno',
        stars: 52,
        production: false,
        highlights: ['Edge computing', 'Federated learning', 'Privacy-preserving'],
        useCases: ['Edge AI', 'Distributed training', 'Privacy-sensitive apps'],
        repo: 'https://github.com/ruvnet/federated-mcp'
      },
      {
        id: 'wifi-densepose',
        name: 'WiFi-DensePose',
        fullName: 'WiFi-based Human Pose Estimation',
        icon: <Radio className="w-5 h-5" />,
        description: 'Camera-free pose detection using WiFi CSI signals',
        category: 'Novel Sensing',
        language: 'Python',
        performance: '30 FPS, <50ms latency',
        production: true,
        highlights: ['Privacy-preserving', 'Through-wall detection', 'Multi-person'],
        useCases: ['Healthcare monitoring', 'Smart homes', 'Security'],
        repo: 'https://github.com/ruvnet/wifi-densepose'
      },
      {
        id: 'ultrasonic',
        name: 'Ultrasonic',
        fullName: 'Ultrasonic Agentic Commands',
        icon: <Activity className="w-5 h-5" />,
        description: 'Steganographic AI command embedding in audio (18-20 kHz)',
        category: 'Covert Channels',
        language: 'Python',
        encryption: 'AES-256',
        production: true,
        highlights: ['Inaudible embedding', 'AES encryption', 'Real-time processing'],
        useCases: ['Secure communication', 'Audio watermarking', 'IoT control'],
        repo: 'https://github.com/ruvnet/ultrasonic'
      }
    ]
  };

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: <Layers /> },
    { id: 'frameworks', label: 'Frameworks', icon: <Box /> },
    { id: 'comparison', label: 'Compare', icon: <GitBranch /> },
    { id: 'learning', label: 'Learn', icon: <BookOpen /> },
    { id: 'playground', label: 'Playground', icon: <Terminal /> }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-[#2a2a2a] bg-[#111111]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Code2 className="w-8 h-8 text-[#00ff88]" />
              <div>
                <h1 className="text-xl font-semibold">Learning Agentic Engineering</h1>
                <p className="text-xs text-[#666666]">Master AI Frameworks with SPARC</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-[#00ff88]' 
                      : 'text-[#a0a0a0] hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/bjpl/learning_agentic_engineering" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'overview' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="py-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-4">
                    Production-Ready AI Frameworks
                  </h2>
                  <p className="text-[#a0a0a0] text-lg mb-6">
                    Comprehensive guide to cutting-edge AI frameworks. Learn from real implementations, 
                    understand architectural patterns, and build scalable AI systems.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#00ff88] rounded-full"></div>
                      <span className="text-sm">13+ Frameworks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#0088ff] rounded-full"></div>
                      <span className="text-sm">Production Code</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#ff8800] rounded-full"></div>
                      <span className="text-sm">Real Examples</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => setActiveSection('frameworks')}
                      className="px-6 py-3 bg-[#00ff88] text-black font-semibold rounded hover:bg-[#00dd77] transition-colors"
                    >
                      Explore Frameworks
                    </button>
                    <button 
                      onClick={() => setActiveSection('learning')}
                      className="px-6 py-3 border border-[#2a2a2a] text-white font-semibold rounded hover:bg-[#1a1a1a] transition-colors"
                    >
                      Start Learning
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* Stats Cards */}
                  <div className="bg-[#111111] border border-[#2a2a2a] p-6 rounded-lg">
                    <div className="text-3xl font-bold text-[#00ff88]">172K+</div>
                    <div className="text-sm text-[#666666]">Ops/sec (SAFLA)</div>
                  </div>
                  <div className="bg-[#111111] border border-[#2a2a2a] p-6 rounded-lg">
                    <div className="text-3xl font-bold text-[#0088ff]">15+</div>
                    <div className="text-sm text-[#666666]">LLM Providers (Ax)</div>
                  </div>
                  <div className="bg-[#111111] border border-[#2a2a2a] p-6 rounded-lg">
                    <div className="text-3xl font-bold text-[#ff8800]">30ms</div>
                    <div className="text-sm text-[#666666]">Inference (DSPy.ts)</div>
                  </div>
                  <div className="bg-[#111111] border border-[#2a2a2a] p-6 rounded-lg">
                    <div className="text-3xl font-bold text-[#ff0088]">30 FPS</div>
                    <div className="text-sm text-[#666666]">WiFi Tracking</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Framework Categories */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Framework Categories</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#111111] border border-[#2a2a2a] p-6 rounded-lg hover:border-[#00ff88] transition-colors">
                  <Cpu className="w-8 h-8 text-[#00ff88] mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Core AI Frameworks</h4>
                  <p className="text-[#a0a0a0] text-sm mb-4">
                    Foundational frameworks for building production AI systems
                  </p>
                  <ul className="space-y-2">
                    {frameworks.core.map(f => (
                      <li key={f.id} className="flex items-center space-x-2 text-sm">
                        <ChevronRight className="w-3 h-3 text-[#00ff88]" />
                        <span>{f.name}: {f.fullName}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#111111] border border-[#2a2a2a] p-6 rounded-lg hover:border-[#0088ff] transition-colors">
                  <Zap className="w-8 h-8 text-[#0088ff] mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Specialized Tools</h4>
                  <p className="text-[#a0a0a0] text-sm mb-4">
                    Purpose-built tools for specific AI use cases
                  </p>
                  <ul className="space-y-2">
                    {frameworks.specialized.map(f => (
                      <li key={f.id} className="flex items-center space-x-2 text-sm">
                        <ChevronRight className="w-3 h-3 text-[#0088ff]" />
                        <span>{f.name}: {f.fullName}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#111111] border border-[#2a2a2a] p-6 rounded-lg hover:border-[#ff8800] transition-colors">
                  <Database className="w-8 h-8 text-[#ff8800] mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Learning Resources</h4>
                  <p className="text-[#a0a0a0] text-sm mb-4">
                    Structured paths for mastering AI engineering
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-3 h-3 text-[#ff8800]" />
                      <span>Beginner Path: 4 weeks</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-3 h-3 text-[#ff8800]" />
                      <span>Intermediate Path: 6 weeks</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-3 h-3 text-[#ff8800]" />
                      <span>Advanced Path: 8 weeks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'frameworks' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">AI Frameworks</h2>
              <div className="flex space-x-4">
                <select className="bg-[#111111] border border-[#2a2a2a] px-4 py-2 rounded text-sm">
                  <option>All Categories</option>
                  <option>Core AI</option>
                  <option>Specialized</option>
                  <option>Runtime</option>
                </select>
                <select className="bg-[#111111] border border-[#2a2a2a] px-4 py-2 rounded text-sm">
                  <option>Sort by Stars</option>
                  <option>Sort by Performance</option>
                  <option>Sort by Name</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[...frameworks.core, ...frameworks.specialized].map(framework => (
                <div 
                  key={framework.id}
                  className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#00ff88] transition-all cursor-pointer"
                  onClick={() => setSelectedFramework(framework)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {framework.icon}
                      <div>
                        <h3 className="text-xl font-semibold">{framework.name}</h3>
                        <p className="text-sm text-[#666666]">{framework.fullName}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-xs rounded-full text-[#00ff88]">
                      {framework.category}
                    </span>
                  </div>
                  
                  <p className="text-[#a0a0a0] mb-4">{framework.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {framework.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-2 py-1 bg-[#1a1a1a] text-xs rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="text-[#666666]">{framework.language}</span>
                      {framework.stars && (
                        <span className="text-[#666666]">⭐ {framework.stars}</span>
                      )}
                      {framework.performance && (
                        <span className="text-[#00ff88]">{framework.performance}</span>
                      )}
                    </div>
                    <a 
                      href={framework.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-[#0088ff] hover:text-[#00aaff]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>View Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'comparison' && <ComparisonMatrix frameworks={[...frameworks.core, ...frameworks.specialized]} />}
        {activeSection === 'learning' && <LearningPaths />}
        {activeSection === 'playground' && <CodePlayground />}
        {activeSection === 'frameworks' && selectedFramework && (
          <FrameworkDetail 
            frameworks={[...frameworks.core, ...frameworks.specialized]}
          />
        )}
      </main>
    </div>
  );
}

export default App;