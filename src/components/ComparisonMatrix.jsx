import React from 'react';
import { Check, X, Minus } from 'lucide-react';

function ComparisonMatrix({ frameworks }) {
  const criteria = [
    { key: 'production', label: 'Production Ready', type: 'boolean' },
    { key: 'language', label: 'Language', type: 'text' },
    { key: 'performance', label: 'Performance', type: 'text' },
    { key: 'stars', label: 'GitHub Stars', type: 'number' },
    { key: 'category', label: 'Category', type: 'text' },
    { key: 'multiCloud', label: 'Multi-Cloud', type: 'check' },
    { key: 'selfImproving', label: 'Self-Improving', type: 'check' },
    { key: 'browserSupport', label: 'Browser Support', type: 'check' },
    { key: 'edgeComputing', label: 'Edge Computing', type: 'check' },
    { key: 'privacyPreserving', label: 'Privacy-Preserving', type: 'check' }
  ];

  const getFeatureSupport = (framework, feature) => {
    const features = {
      'ans': { multiCloud: false, selfImproving: false, browserSupport: true, edgeComputing: false, privacyPreserving: true },
      'a2': { multiCloud: true, selfImproving: false, browserSupport: false, edgeComputing: true, privacyPreserving: false },
      'dspy-ts': { multiCloud: false, selfImproving: true, browserSupport: true, edgeComputing: false, privacyPreserving: false },
      'ax': { multiCloud: true, selfImproving: true, browserSupport: true, edgeComputing: false, privacyPreserving: false },
      'safla': { multiCloud: false, selfImproving: true, browserSupport: false, edgeComputing: false, privacyPreserving: false },
      'federated-mcp': { multiCloud: true, selfImproving: false, browserSupport: true, edgeComputing: true, privacyPreserving: true },
      'wifi-densepose': { multiCloud: false, selfImproving: false, browserSupport: false, edgeComputing: true, privacyPreserving: true },
      'ultrasonic': { multiCloud: false, selfImproving: false, browserSupport: false, edgeComputing: true, privacyPreserving: true }
    };
    return features[framework.id]?.[feature];
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Framework Comparison</h2>
        <p className="text-[#a0a0a0]">Side-by-side comparison of framework capabilities and features</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-[#111111] rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#1a1a1a] border-b border-[#2a2a2a]">
              <th className="px-6 py-4 text-left text-sm font-semibold">Criteria</th>
              {frameworks.map(f => (
                <th key={f.id} className="px-6 py-4 text-center text-sm font-semibold">
                  {f.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion, idx) => (
              <tr key={criterion.key} className={`border-b border-[#2a2a2a] ${idx % 2 === 0 ? 'bg-[#0d0d0d]' : ''}`}>
                <td className="px-6 py-4 text-sm font-medium text-[#a0a0a0]">
                  {criterion.label}
                </td>
                {frameworks.map(framework => (
                  <td key={framework.id} className="px-6 py-4 text-center">
                    {criterion.type === 'boolean' && (
                      framework[criterion.key] ? 
                        <Check className="w-5 h-5 text-[#00ff88] mx-auto" /> : 
                        <X className="w-5 h-5 text-[#ff4444] mx-auto" />
                    )}
                    {criterion.type === 'check' && (
                      getFeatureSupport(framework, criterion.key) ? 
                        <Check className="w-5 h-5 text-[#00ff88] mx-auto" /> : 
                        <Minus className="w-5 h-5 text-[#666666] mx-auto" />
                    )}
                    {criterion.type === 'text' && (
                      <span className="text-sm text-white">
                        {framework[criterion.key] || '-'}
                      </span>
                    )}
                    {criterion.type === 'number' && (
                      <span className="text-sm text-white">
                        {framework[criterion.key] || '-'}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-[#111111] border border-[#2a2a2a] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Best for Production</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#a0a0a0]">Enterprise Applications</span>
              <span className="text-[#00ff88] font-semibold">Ax</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#a0a0a0]">Serverless Deployment</span>
              <span className="text-[#00ff88] font-semibold">A2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#a0a0a0]">Privacy-Critical</span>
              <span className="text-[#00ff88] font-semibold">WiFi-DensePose</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#a0a0a0]">Self-Improving AI</span>
              <span className="text-[#00ff88] font-semibold">SAFLA</span>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] border border-[#2a2a2a] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Performance Leaders</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#a0a0a0]">Throughput</span>
              <span className="text-[#0088ff]">SAFLA (172K ops/sec)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#a0a0a0]">Latency</span>
              <span className="text-[#0088ff]">DSPy.ts (30ms)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#a0a0a0]">Real-time</span>
              <span className="text-[#0088ff]">WiFi-DensePose (30 FPS)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#a0a0a0]">Efficiency</span>
              <span className="text-[#0088ff]">Ax (Zero deps)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonMatrix;