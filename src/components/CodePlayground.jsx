import React, { useState } from 'react';
import { Play, Copy, Download, RefreshCw, Terminal, Code, CheckCircle, AlertCircle, Info } from 'lucide-react';

function CodePlayground() {
  const [selectedExample, setSelectedExample] = useState('basic-agent');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const examples = {
    'basic-agent': {
      title: 'Basic Agent Creation',
      framework: 'Ax',
      difficulty: 'Beginner',
      description: 'Create your first AI agent with multiple provider support',
      code: `// Basic Ax Agent Example
import { Ax } from '@ax-llm/ax';

// Initialize with multiple providers
const ax = new Ax({
  providers: {
    openai: { apiKey: 'your-key' },
    anthropic: { apiKey: 'your-key' }
  }
});

// Create a simple agent
async function createAgent() {
  const agent = ax.createAgent({
    name: 'assistant',
    role: 'You are a helpful AI assistant',
    capabilities: ['chat', 'code-generation']
  });
  
  // Agent automatically selects best provider
  const response = await agent.generate({
    prompt: 'Explain quantum computing simply',
    maxTokens: 150
  });
  
  console.log(response.text);
  console.log('Provider used:', response.provider);
  console.log('Latency:', response.latency, 'ms');
}

createAgent();`,
      expectedOutput: `Quantum computing uses quantum bits (qubits) that can be both 0 and 1 
simultaneously, unlike regular bits. This allows quantum computers to 
process many calculations at once, making them potentially much faster 
for certain problems like cryptography and drug discovery.

Provider used: anthropic
Latency: 342 ms`
    },
    'self-improving': {
      title: 'Self-Improving Agent',
      framework: 'SAFLA',
      difficulty: 'Intermediate',
      description: 'Build an agent that improves its performance over time',
      code: `// SAFLA Self-Improving Agent
use safla::{Agent, LearningConfig, Metrics};

fn main() {
    // Configure self-improvement parameters
    let config = LearningConfig::new()
        .with_learning_rate(0.01)
        .with_memory_compression(0.6)
        .with_auto_optimize(true);
    
    let mut agent = Agent::spawn(config);
    
    // Initial performance baseline
    let baseline = agent.benchmark();
    println!("Baseline: {} ops/sec", baseline.throughput);
    
    // Train on real workload
    for epoch in 0..100 {
        agent.train_on_task(|input| {
            // Your business logic
            let result = process_complex_data(input);
            result
        });
        
        // Agent learns and optimizes automatically
        if epoch % 10 == 0 {
            let metrics = agent.get_metrics();
            println!("Epoch {}: {} ops/sec ({}% improvement)", 
                epoch, 
                metrics.throughput,
                ((metrics.throughput / baseline.throughput) - 1.0) * 100.0
            );
        }
    }
    
    // Final optimized performance
    let final_metrics = agent.benchmark();
    println!("Final: {} ops/sec", final_metrics.throughput);
    println!("Memory usage: {}% of baseline", 
        final_metrics.memory_usage * 100.0);
}

fn process_complex_data(input: &[u8]) -> Vec<u8> {
    // Complex data transformation
    input.iter().map(|x| x.wrapping_add(1)).collect()
}`,
      expectedOutput: `Baseline: 45000 ops/sec
Epoch 0: 45000 ops/sec (0% improvement)
Epoch 10: 68000 ops/sec (51% improvement)
Epoch 20: 95000 ops/sec (111% improvement)
Epoch 30: 118000 ops/sec (162% improvement)
Epoch 40: 139000 ops/sec (208% improvement)
Epoch 50: 155000 ops/sec (244% improvement)
Epoch 60: 164000 ops/sec (264% improvement)
Epoch 70: 169000 ops/sec (275% improvement)
Epoch 80: 171000 ops/sec (280% improvement)
Epoch 90: 172000 ops/sec (282% improvement)
Final: 172500 ops/sec
Memory usage: 60% of baseline`
    },
    'serverless-swarm': {
      title: 'Serverless Agent Swarm',
      framework: 'A2',
      difficulty: 'Intermediate',
      description: 'Deploy a swarm of serverless agents that scale automatically',
      code: `// A2 Serverless Swarm Example
import { createSwarm, createAgent } from 'a2-framework';

// Define individual agent types
const dataProcessor = createAgent({
  name: 'data-processor',
  memory: 256,
  async process(event) {
    const processed = await this.transform(event.data);
    await this.emit('data-processed', processed);
    return { status: 'success', items: processed.length };
  }
});

const analyzer = createAgent({
  name: 'analyzer',
  memory: 512,
  async process(event) {
    const analysis = await this.analyze(event.data);
    await this.emit('analysis-complete', analysis);
    return { status: 'success', insights: analysis.insights };
  }
});

const aggregator = createAgent({
  name: 'aggregator',
  memory: 128,
  async process(events) {
    const results = await this.aggregate(events);
    return { status: 'complete', summary: results };
  }
});

// Create auto-scaling swarm
const swarm = createSwarm({
  agents: [dataProcessor, analyzer, aggregator],
  scaling: {
    min: 0,  // Scale to zero when idle
    max: 1000,  // Scale up to 1000 concurrent agents
    targetConcurrency: 100
  },
  routing: {
    'data-received': 'data-processor',
    'data-processed': 'analyzer',
    'analysis-complete': 'aggregator'
  }
});

// Deploy swarm (automatic CI/CD)
await swarm.deploy({
  region: 'us-east-1',
  environment: 'production'
});

console.log('Swarm deployed:', swarm.url);
console.log('Dashboard:', swarm.dashboardUrl);

// Swarm automatically scales based on load
// 0 agents when idle (cost: $0)
// 1000+ agents during peak (processes millions of events/sec)`,
      expectedOutput: `Deploying serverless swarm...
✓ Created Lambda functions (3)
✓ Configured event routing
✓ Set up auto-scaling policies
✓ Created CloudWatch dashboard

Swarm deployed: https://api.a2-swarm.amazonaws.com/prod
Dashboard: https://console.aws.amazon.com/lambda/home#/applications/a2-swarm

Current status:
- Active agents: 0 (scaled to zero)
- Ready to scale: up to 1000 agents
- Estimated cost: $0.00/hour (when idle)
- Max throughput: 1M+ events/sec`
    },
    'federated-training': {
      title: 'Federated Learning Network',
      framework: 'Federated MCP',
      difficulty: 'Advanced',
      description: 'Train AI models across distributed nodes without sharing data',
      code: `// Federated MCP Training Example
import { FederatedNetwork, EdgeNode, CentralServer } from 'federated-mcp';

// Initialize central aggregation server
const server = new CentralServer({
  model: 'sentiment-analyzer',
  aggregation: 'federated-averaging',
  privacy: {
    differential: { epsilon: 1.0, delta: 1e-5 },
    secureAggregation: true
  }
});

// Create edge nodes (hospitals, banks, devices)
const nodes = [];
for (let i = 0; i < 100; i++) {
  const node = new EdgeNode({
    id: \`node-\${i}\`,
    dataSize: Math.floor(Math.random() * 10000) + 1000,
    compute: 'gpu'  // or 'cpu', 'tpu'
  });
  nodes.push(node);
}

// Start federated training
async function trainFederated() {
  console.log('Starting federated training with', nodes.length, 'nodes');
  
  for (let round = 0; round < 10; round++) {
    console.log(\`\\nRound \${round + 1}/10\`);
    
    // Each node trains locally on private data
    const gradients = await Promise.all(
      nodes.map(async node => {
        const localGradients = await node.trainLocal({
          epochs: 5,
          batchSize: 32,
          // Data never leaves the node
          data: node.privateData
        });
        
        // Apply differential privacy
        return node.addNoise(localGradients);
      })
    );
    
    // Secure aggregation at server
    const globalModel = await server.aggregate(gradients, {
      method: 'weighted-average',
      weights: nodes.map(n => n.dataSize)
    });
    
    // Distribute updated model to all nodes
    await Promise.all(
      nodes.map(node => node.updateModel(globalModel))
    );
    
    // Evaluate global model (without seeing private data)
    const metrics = await server.evaluate();
    console.log(\`Accuracy: \${metrics.accuracy.toFixed(3)}\`);
    console.log(\`Privacy budget used: \${metrics.privacyBudget.toFixed(2)}\`);
  }
  
  console.log('\\nTraining complete!');
  console.log('Final model trained on', 
    nodes.reduce((sum, n) => sum + n.dataSize, 0), 
    'samples without centralizing data');
}

trainFederated();`,
      expectedOutput: `Starting federated training with 100 nodes

Round 1/10
Accuracy: 0.623
Privacy budget used: 0.10

Round 2/10
Accuracy: 0.741
Privacy budget used: 0.20

Round 3/10
Accuracy: 0.812
Privacy budget used: 0.30

Round 4/10
Accuracy: 0.856
Privacy budget used: 0.40

Round 5/10
Accuracy: 0.883
Privacy budget used: 0.50

Round 6/10
Accuracy: 0.901
Privacy budget used: 0.60

Round 7/10
Accuracy: 0.912
Privacy budget used: 0.70

Round 8/10
Accuracy: 0.919
Privacy budget used: 0.80

Round 9/10
Accuracy: 0.924
Privacy budget used: 0.90

Round 10/10
Accuracy: 0.927
Privacy budget used: 1.00

Training complete!
Final model trained on 548,234 samples without centralizing data`
    },
    'wifi-sensing': {
      title: 'WiFi-Based Human Detection',
      framework: 'WiFi-DensePose',
      difficulty: 'Advanced',
      description: 'Detect human presence and poses using WiFi signals',
      code: `// WiFi-DensePose Sensing Example
import { WiFiSensor, PoseDetector, PrivacyFilter } from 'wifi-densepose';

// Initialize WiFi sensor
const sensor = new WiFiSensor({
  interface: 'wlan0',
  channels: [1, 6, 11],
  sampleRate: 1000,  // Hz
  csiExtraction: true
});

// Configure pose detection
const detector = new PoseDetector({
  model: 'densepose-wifi-v2',
  resolution: 'high',
  fps: 30,
  privacyMode: true  // No visual features
});

// Privacy filter ensures no identification
const privacyFilter = new PrivacyFilter({
  removeIdentifying: true,
  anonymizePoses: true,
  dataRetention: '0s'  // No data storage
});

// Start real-time detection
async function startDetection() {
  await sensor.connect();
  console.log('WiFi sensor initialized');
  
  sensor.on('csi-data', async (csiData) => {
    // Extract pose from WiFi signals
    const rawPose = await detector.detect(csiData);
    
    // Apply privacy filtering
    const pose = privacyFilter.process(rawPose);
    
    // Analyze pose
    if (pose.confidence > 0.8) {
      console.log(\`Detected: \${pose.activity}\`);
      console.log(\`People count: \${pose.count}\`);
      console.log(\`Positions: \${pose.positions.map(p => 
        \`(\${p.x.toFixed(1)}, \${p.y.toFixed(1)})\`
      ).join(', ')}\`);
      
      // Check for specific events
      if (pose.isFalling()) {
        console.log('⚠️ FALL DETECTED!');
        await sendAlert('Fall detected in room');
      }
      
      if (pose.activity === 'exercise') {
        console.log('Exercise detected - tracking reps');
        console.log(\`Reps: \${pose.repetitions}\`);
      }
    }
  });
  
  // Performance metrics
  setInterval(() => {
    const stats = detector.getStats();
    console.log(\`\\nPerformance: \${stats.fps} FPS\`);
    console.log(\`Latency: \${stats.latency}ms\`);
    console.log(\`Accuracy: \${(stats.accuracy * 100).toFixed(1)}%\`);
  }, 5000);
}

startDetection();`,
      expectedOutput: `WiFi sensor initialized
Detected: walking
People count: 2
Positions: (2.3, 4.1), (5.6, 3.2)

Detected: sitting
People count: 2
Positions: (2.3, 4.0), (5.6, 3.2)

Detected: standing
People count: 2
Positions: (2.3, 4.1), (5.6, 3.3)

⚠️ FALL DETECTED!
Sending alert: Fall detected in room

Performance: 30 FPS
Latency: 33ms
Accuracy: 94.3%

Exercise detected - tracking reps
Reps: 12

Performance: 30 FPS
Latency: 32ms
Accuracy: 95.1%`
    }
  };

  useState(() => {
    setCode(examples[selectedExample].code);
    setOutput('');
  }, []);

  const handleRun = async () => {
    setIsRunning(true);
    setOutput('Running code...\n');
    
    // Simulate execution
    setTimeout(() => {
      setOutput(examples[selectedExample].expectedOutput);
      setIsRunning(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedExample}.js`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExampleChange = (exampleId) => {
    setSelectedExample(exampleId);
    setCode(examples[exampleId].code);
    setOutput('');
  };

  const currentExample = examples[selectedExample];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Interactive Playground</h2>
        <p className="text-[#a0a0a0]">Run and experiment with framework examples in real-time</p>
      </div>

      {/* Example Selector */}
      <div className="grid grid-cols-5 gap-3">
        {Object.entries(examples).map(([id, example]) => (
          <button
            key={id}
            onClick={() => handleExampleChange(id)}
            className={`p-4 rounded-lg border transition-all ${
              selectedExample === id
                ? 'bg-[#1a1a1a] border-[#00ff88]'
                : 'bg-[#111111] border-[#2a2a2a] hover:bg-[#1a1a1a]'
            }`}
          >
            <div className="text-sm font-semibold mb-1">{example.title}</div>
            <div className="text-xs text-[#666666]">{example.framework}</div>
            <div className={`text-xs mt-2 px-2 py-1 rounded-full inline-block ${
              example.difficulty === 'Beginner' ? 'bg-green-900 text-green-400' :
              example.difficulty === 'Intermediate' ? 'bg-blue-900 text-blue-400' :
              'bg-red-900 text-red-400'
            }`}>
              {example.difficulty}
            </div>
          </button>
        ))}
      </div>

      {/* Main Playground */}
      <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#1a1a1a] px-6 py-4 border-b border-[#2a2a2a]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">{currentExample.title}</h3>
              <p className="text-sm text-[#a0a0a0] mt-1">{currentExample.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm bg-[#0d0d0d] px-3 py-1 rounded-full border border-[#2a2a2a]">
                {currentExample.framework}
              </span>
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="px-4 py-2 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00dd77] transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                {isRunning ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                {isRunning ? 'Running...' : 'Run Code'}
              </button>
            </div>
          </div>
        </div>

        {/* Code and Output */}
        <div className="grid grid-cols-2 divide-x divide-[#2a2a2a]">
          {/* Code Editor */}
          <div className="relative">
            <div className="flex items-center justify-between px-4 py-2 bg-[#0d0d0d] border-b border-[#2a2a2a]">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#00ff88]" />
                <span className="text-sm font-medium">Code Editor</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-[#1a1a1a] rounded transition-colors"
                  title="Copy code"
                >
                  {copied ? (
                    <CheckCircle className="w-4 h-4 text-[#00ff88]" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#a0a0a0]" />
                  )}
                </button>
                <button
                  onClick={handleDownload}
                  className="p-2 hover:bg-[#1a1a1a] rounded transition-colors"
                  title="Download code"
                >
                  <Download className="w-4 h-4 text-[#a0a0a0]" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-[500px] bg-[#0d0d0d] text-[#a0a0a0] font-mono text-sm p-4 rounded-lg border border-[#2a2a2a] focus:outline-none focus:border-[#00ff88] resize-none"
                spellCheck={false}
              />
            </div>
          </div>

          {/* Output */}
          <div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0d0d0d] border-b border-[#2a2a2a]">
              <Terminal className="w-4 h-4 text-[#0088ff]" />
              <span className="text-sm font-medium">Output</span>
            </div>
            <div className="p-4">
              <pre className="w-full h-[500px] bg-[#0d0d0d] text-[#00ff88] font-mono text-sm p-4 rounded-lg border border-[#2a2a2a] overflow-auto">
                {output || 'Click "Run Code" to see output...'}
              </pre>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="px-6 py-4 bg-[#0d0d0d] border-t border-[#2a2a2a]">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
            <div className="text-sm text-[#a0a0a0]">
              <span className="font-semibold text-white">Pro Tip:</span> This playground simulates framework behavior. 
              To run these examples locally, install the framework using npm/cargo and set up your API keys. 
              Each framework has comprehensive documentation on their GitHub repository.
            </div>
          </div>
        </div>
      </div>

      {/* Learning Resources */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#ff8800]" />
            Common Patterns
          </h4>
          <ul className="space-y-1 text-sm text-[#a0a0a0]">
            <li>• Agent initialization and configuration</li>
            <li>• Error handling and retries</li>
            <li>• Performance monitoring</li>
            <li>• State management</li>
          </ul>
        </div>
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#00ff88]" />
            Best Practices
          </h4>
          <ul className="space-y-1 text-sm text-[#a0a0a0]">
            <li>• Use environment variables for API keys</li>
            <li>• Implement proper error boundaries</li>
            <li>• Monitor agent performance metrics</li>
            <li>• Test with different providers</li>
          </ul>
        </div>
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Code className="w-4 h-4 text-[#0088ff]" />
            Next Steps
          </h4>
          <ul className="space-y-1 text-sm text-[#a0a0a0]">
            <li>• Modify examples to fit your use case</li>
            <li>• Combine multiple frameworks</li>
            <li>• Build production applications</li>
            <li>• Contribute to frameworks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CodePlayground;