import React, { useState } from 'react';
import { BookOpen, Code, Cpu, GitBranch, Rocket, CheckCircle, Circle, Lock, Play, FileText, Zap } from 'lucide-react';

function LearningPaths() {
  const [selectedPath, setSelectedPath] = useState('beginner');
  const [completedLessons, setCompletedLessons] = useState(new Set());

  const learningPaths = {
    beginner: {
      title: 'Foundation Path',
      description: 'Master the fundamentals of agentic engineering',
      duration: '4 weeks',
      difficulty: 'Beginner',
      color: '#00ff88',
      modules: [
        {
          id: 'intro',
          title: 'Introduction to Agentic AI',
          lessons: [
            { id: 'what-is-agentic', title: 'What is Agentic AI?', duration: '15 min', type: 'reading' },
            { id: 'agent-types', title: 'Types of AI Agents', duration: '20 min', type: 'video' },
            { id: 'first-agent', title: 'Build Your First Agent', duration: '30 min', type: 'exercise' },
            { id: 'sparc-intro', title: 'Introduction to SPARC', duration: '25 min', type: 'reading' }
          ]
        },
        {
          id: 'frameworks',
          title: 'Framework Fundamentals',
          lessons: [
            { id: 'choosing-framework', title: 'Choosing the Right Framework', duration: '20 min', type: 'reading' },
            { id: 'ax-basics', title: 'Getting Started with Ax', duration: '40 min', type: 'exercise' },
            { id: 'ans-security', title: 'Security with ANS', duration: '30 min', type: 'video' },
            { id: 'comparison', title: 'Framework Comparison Lab', duration: '45 min', type: 'lab' }
          ]
        },
        {
          id: 'implementation',
          title: 'Basic Implementation',
          lessons: [
            { id: 'project-setup', title: 'Setting Up Your Project', duration: '20 min', type: 'exercise' },
            { id: 'simple-agent', title: 'Building a Simple Agent', duration: '35 min', type: 'exercise' },
            { id: 'testing', title: 'Testing Your Agent', duration: '25 min', type: 'reading' },
            { id: 'deployment', title: 'Basic Deployment', duration: '30 min', type: 'lab' }
          ]
        }
      ]
    },
    intermediate: {
      title: 'Advanced Patterns',
      description: 'Learn advanced agentic patterns and optimizations',
      duration: '6 weeks',
      difficulty: 'Intermediate',
      color: '#0088ff',
      modules: [
        {
          id: 'patterns',
          title: 'Agentic Design Patterns',
          lessons: [
            { id: 'orchestration', title: 'Agent Orchestration Patterns', duration: '35 min', type: 'reading' },
            { id: 'communication', title: 'Inter-Agent Communication', duration: '40 min', type: 'exercise' },
            { id: 'state-management', title: 'Distributed State Management', duration: '45 min', type: 'video' },
            { id: 'error-handling', title: 'Resilient Error Handling', duration: '30 min', type: 'lab' }
          ]
        },
        {
          id: 'optimization',
          title: 'Performance Optimization',
          lessons: [
            { id: 'benchmarking', title: 'Benchmarking Agents', duration: '30 min', type: 'exercise' },
            { id: 'safla-perf', title: 'SAFLA Performance Tuning', duration: '50 min', type: 'lab' },
            { id: 'memory-opt', title: 'Memory Optimization', duration: '40 min', type: 'reading' },
            { id: 'scaling', title: 'Scaling Strategies', duration: '45 min', type: 'video' }
          ]
        },
        {
          id: 'advanced-frameworks',
          title: 'Advanced Framework Features',
          lessons: [
            { id: 'dspy-pipelines', title: 'DSPy.ts Pipeline Optimization', duration: '55 min', type: 'lab' },
            { id: 'a2-serverless', title: 'A2 Serverless Patterns', duration: '45 min', type: 'exercise' },
            { id: 'federated-learning', title: 'Federated MCP Setup', duration: '60 min', type: 'lab' },
            { id: 'multi-provider', title: 'Multi-Provider with Ax', duration: '40 min', type: 'exercise' }
          ]
        }
      ]
    },
    expert: {
      title: 'Production Mastery',
      description: 'Production-grade systems and cutting-edge techniques',
      duration: '8 weeks',
      difficulty: 'Expert',
      color: '#ff4444',
      modules: [
        {
          id: 'production',
          title: 'Production Systems',
          lessons: [
            { id: 'architecture', title: 'Production Architecture', duration: '60 min', type: 'reading' },
            { id: 'monitoring', title: 'Monitoring & Observability', duration: '55 min', type: 'lab' },
            { id: 'security-prod', title: 'Production Security', duration: '50 min', type: 'video' },
            { id: 'disaster-recovery', title: 'Disaster Recovery', duration: '45 min', type: 'exercise' }
          ]
        },
        {
          id: 'cutting-edge',
          title: 'Cutting-Edge Techniques',
          lessons: [
            { id: 'wifi-sensing', title: 'WiFi-DensePose Implementation', duration: '70 min', type: 'lab' },
            { id: 'ultrasonic-comm', title: 'Ultrasonic Communication', duration: '65 min', type: 'lab' },
            { id: 'self-improving', title: 'Self-Improving Agents', duration: '75 min', type: 'exercise' },
            { id: 'privacy-tech', title: 'Privacy-Preserving AI', duration: '60 min', type: 'reading' }
          ]
        },
        {
          id: 'research',
          title: 'Research & Innovation',
          lessons: [
            { id: 'paper-review', title: 'Latest Research Papers', duration: '90 min', type: 'reading' },
            { id: 'novel-architectures', title: 'Novel Architectures', duration: '80 min', type: 'video' },
            { id: 'contribute', title: 'Contributing to Frameworks', duration: '60 min', type: 'exercise' },
            { id: 'future-trends', title: 'Future of Agentic AI', duration: '45 min', type: 'reading' }
          ]
        }
      ]
    }
  };

  const sparcMethodology = {
    specification: {
      title: 'Specification',
      description: 'Define clear requirements and objectives',
      icon: FileText,
      steps: [
        'Identify the problem domain',
        'Define success criteria',
        'Specify constraints and requirements',
        'Document expected behavior'
      ]
    },
    pseudocode: {
      title: 'Pseudocode',
      description: 'Design the solution logic',
      icon: Code,
      steps: [
        'Break down into logical steps',
        'Define data structures',
        'Outline control flow',
        'Identify key algorithms'
      ]
    },
    architecture: {
      title: 'Architecture',
      description: 'Design system structure',
      icon: Cpu,
      steps: [
        'Component identification',
        'Interface definition',
        'Data flow design',
        'Integration planning'
      ]
    },
    refinement: {
      title: 'Refinement',
      description: 'Optimize and improve',
      icon: Zap,
      steps: [
        'Performance analysis',
        'Code optimization',
        'Error handling',
        'Edge case coverage'
      ]
    },
    code: {
      title: 'Code',
      description: 'Implement the solution',
      icon: GitBranch,
      steps: [
        'Write production code',
        'Implement tests',
        'Documentation',
        'Deployment preparation'
      ]
    }
  };

  const handleLessonComplete = (lessonId) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId);
      } else {
        newSet.add(lessonId);
      }
      return newSet;
    });
  };

  const currentPath = learningPaths[selectedPath];

  const getLessonIcon = (type) => {
    switch(type) {
      case 'reading': return BookOpen;
      case 'video': return Play;
      case 'exercise': return Code;
      case 'lab': return Cpu;
      default: return FileText;
    }
  };

  const calculateProgress = (modules) => {
    const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0);
    const completed = modules.reduce((sum, module) => 
      sum + module.lessons.filter(lesson => completedLessons.has(lesson.id)).length, 0
    );
    return Math.round((completed / totalLessons) * 100);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Learning Paths</h2>
        <p className="text-[#a0a0a0]">Structured learning journeys using the SPARC methodology</p>
      </div>

      {/* SPARC Methodology */}
      <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-6">SPARC Methodology</h3>
        <div className="grid grid-cols-5 gap-4">
          {Object.entries(sparcMethodology).map(([key, phase], idx) => {
            const Icon = phase.icon;
            return (
              <div key={key} className="relative">
                <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#00ff88] transition-colors">
                  <Icon className="w-8 h-8 text-[#00ff88] mb-3" />
                  <h4 className="font-semibold mb-1">{phase.title}</h4>
                  <p className="text-xs text-[#a0a0a0] mb-3">{phase.description}</p>
                  <ul className="space-y-1">
                    {phase.steps.map((step, i) => (
                      <li key={i} className="text-xs text-[#666666] flex items-start">
                        <span className="text-[#00ff88] mr-1">•</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                {idx < 4 && (
                  <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 text-[#666666] z-10">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Path Selector */}
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(learningPaths).map(([key, path]) => (
          <button
            key={key}
            onClick={() => setSelectedPath(key)}
            className={`p-6 rounded-lg border transition-all ${
              selectedPath === key
                ? 'bg-[#1a1a1a] border-[#00ff88]'
                : 'bg-[#111111] border-[#2a2a2a] hover:bg-[#1a1a1a]'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold">{path.title}</h3>
              <span 
                className="text-xs px-2 py-1 rounded-full"
                style={{ 
                  backgroundColor: `${path.color}20`,
                  color: path.color,
                  border: `1px solid ${path.color}40`
                }}
              >
                {path.difficulty}
              </span>
            </div>
            <p className="text-sm text-[#a0a0a0] mb-3">{path.description}</p>
            <div className="flex items-center justify-between text-xs text-[#666666]">
              <span>⏱ {path.duration}</span>
              <span>{path.modules.length} modules</span>
            </div>
            {selectedPath === key && (
              <div className="mt-3 pt-3 border-t border-[#2a2a2a]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#a0a0a0]">Progress</span>
                  <span className="text-xs text-[#00ff88]">{calculateProgress(path.modules)}%</span>
                </div>
                <div className="w-full bg-[#0d0d0d] rounded-full h-2 mt-2">
                  <div 
                    className="bg-gradient-to-r from-[#00ff88] to-[#0088ff] h-2 rounded-full transition-all"
                    style={{ width: `${calculateProgress(path.modules)}%` }}
                  />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Current Path Content */}
      <div className="space-y-6">
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold">{currentPath.title}</h3>
              <p className="text-[#a0a0a0]">{currentPath.description}</p>
            </div>
            <button className="px-6 py-3 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00dd77] transition-colors flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Start Learning
            </button>
          </div>

          {/* Modules */}
          <div className="space-y-6">
            {currentPath.modules.map((module, moduleIdx) => (
              <div key={module.id} className="border border-[#2a2a2a] rounded-lg overflow-hidden">
                <div className="bg-[#1a1a1a] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">
                      Module {moduleIdx + 1}: {module.title}
                    </h4>
                    <span className="text-sm text-[#a0a0a0]">
                      {module.lessons.filter(l => completedLessons.has(l.id)).length}/{module.lessons.length} completed
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  {module.lessons.map((lesson, lessonIdx) => {
                    const Icon = getLessonIcon(lesson.type);
                    const isCompleted = completedLessons.has(lesson.id);
                    const isLocked = moduleIdx > 0 && !completedLessons.has(currentPath.modules[moduleIdx - 1].lessons[currentPath.modules[moduleIdx - 1].lessons.length - 1].id);
                    
                    return (
                      <div 
                        key={lesson.id}
                        className={`flex items-center justify-between p-4 rounded-lg border ${
                          isCompleted 
                            ? 'bg-[#00ff88] bg-opacity-5 border-[#00ff88]' 
                            : isLocked
                            ? 'bg-[#0d0d0d] border-[#2a2a2a] opacity-50'
                            : 'bg-[#0d0d0d] border-[#2a2a2a] hover:bg-[#1a1a1a]'
                        } transition-all cursor-pointer`}
                        onClick={() => !isLocked && handleLessonComplete(lesson.id)}
                      >
                        <div className="flex items-center gap-4">
                          <button 
                            className="flex-shrink-0"
                            disabled={isLocked}
                          >
                            {isLocked ? (
                              <Lock className="w-5 h-5 text-[#666666]" />
                            ) : isCompleted ? (
                              <CheckCircle className="w-5 h-5 text-[#00ff88]" />
                            ) : (
                              <Circle className="w-5 h-5 text-[#666666]" />
                            )}
                          </button>
                          <Icon className={`w-5 h-5 ${isCompleted ? 'text-[#00ff88]' : 'text-[#a0a0a0]'}`} />
                          <div>
                            <div className={`font-medium ${isCompleted ? 'text-[#00ff88]' : ''}`}>
                              Lesson {lessonIdx + 1}: {lesson.title}
                            </div>
                            <div className="text-xs text-[#666666] mt-1">
                              {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)} • {lesson.duration}
                            </div>
                          </div>
                        </div>
                        {!isLocked && (
                          <button className="px-4 py-2 bg-[#1a1a1a] rounded-lg text-sm hover:bg-[#2a2a2a] transition-colors">
                            {isCompleted ? 'Review' : 'Start'}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningPaths;