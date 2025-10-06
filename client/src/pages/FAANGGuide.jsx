import React from 'react';

export default function FAANGGuide() {
  const modules = [
    {
      id: 1,
      title: "Foundational Coding Patterns",
      days: "Days 1-4",
      description: "This module focuses on the most frequent and high-Return-on-Investment (ROI) Data Structures and Algorithms (DSA) patterns. Mastering the underlying pattern is more effective than memorizing solutions.",
      focusAreas: [
        "Arrays and Strings (O(N) Optimization): Master techniques that reduce O(N²) brute-force solutions to O(N) linear time.",
        "Linked Lists: Focus on manipulating pointers and detecting structural problems in-place.",
        "Trees and Graphs Basics: Cover fundamental traversal and property checks."
      ],
      patterns: [
        {
          pattern: "Two Pointers",
          concept: "Opposite-end convergence on sorted arrays and Fast/Slow pointers in Linked Lists.",
          timeAllocation: "Day 1",
          sampleProblems: "Two Sum II (167), Container With Most Water (11), Linked List Cycle (141)"
        },
        {
          pattern: "Sliding Window",
          concept: "Dynamic or Fixed-size window for finding optimal contiguous subarrays/substrings.",
          timeAllocation: "Day 2",
          sampleProblems: "Longest Substring Without Repeating Characters (3), Minimum Window Substring (76)"
        },
        {
          pattern: "Trees: BFS & DFS",
          concept: "Level-order (BFS via Queue) and deep traversal (DFS via Recursion/Stack).",
          timeAllocation: "Day 3",
          sampleProblems: "Binary Tree Level Order Traversal (102), Maximum Depth of Binary Tree (104), Number of Islands (200)"
        },
        {
          pattern: "Sorting/Searching",
          concept: "Standard Binary Search and its modification for non-standard inputs.",
          timeAllocation: "Day 4",
          sampleProblems: "Search in Rotated Sorted Array (33), Merge Intervals (56), Top K Frequent Elements (347)"
        }
      ]
    },
    {
      id: 2,
      title: "Advanced Coding Techniques",
      days: "Days 5-7",
      description: "This module tackles algorithmic techniques that represent a higher bar for senior and advanced candidates, focusing on optimizing recurrence relations and complex state management.",
      focusAreas: [
        "Dynamic Programming (DP): The ability to recognize overlapping subproblems and formulate recurrence relations.",
        "Backtracking: For exhaustive search problems, prioritizing efficient state management and pruning.",
        "Heaps and Priority Queues: For efficient selection of K elements and stream-based problems."
      ],
      patterns: [
        {
          pattern: "Dynamic Programming (1D)",
          concept: "Defining the DP[i] state and building the transition from previous states.",
          timeAllocation: "Day 5",
          sampleProblems: "Climbing Stairs (70), House Robber (198), Longest Increasing Subsequence (300)"
        },
        {
          pattern: "Backtracking",
          concept: "Recursive exploration of all choices, followed by the crucial 'undo choice' (pruning).",
          timeAllocation: "Day 6",
          sampleProblems: "Subsets (78), Permutations (46), N-Queens (51)"
        },
        {
          pattern: "Graphs & Advanced Data Structures",
          concept: "Topological Sort (via DFS/Kahn's) and efficient data manipulation with Heaps.",
          timeAllocation: "Day 7",
          sampleProblems: "Course Schedule (207), Find Median from Data Stream (295), Implement Trie (208)"
        }
      ]
    },
    {
      id: 3,
      title: "System Design Fundamentals",
      days: "Days 8-11",
      description: "System design interviews require a structured approach. This module focuses on the building blocks of large-scale distributed systems and the critical trade-offs involved.",
      focusAreas: [
        "Scalability Principles: Understand the difference between horizontal and vertical scaling and the necessity of stateless services.",
        "Core Components: Deep dive into how Load Balancers, Caches, and Databases work at scale.",
        "Trade-offs: Master the CAP Theorem and consistency vs. availability decisions."
      ],
      concepts: [
        {
          concept: "Scaling & Load Balancing",
          description: "Horizontal vs. Vertical scaling; Layer 4 vs. Layer 7 load balancing; Round Robin vs. Least Connection.",
          timeAllocation: "Day 8",
          focusArea: "System Bottlenecks, SPOF, Health Checks"
        },
        {
          concept: "Caching & CDN",
          description: "Caching layers (Client, Server, Distributed); Cache-Aside vs. Write-Through; LRU eviction policy.",
          timeAllocation: "Day 9",
          focusArea: "Latency Reduction, Data Staleness, Cache Invalidation"
        },
        {
          concept: "Database Design & Consistency",
          description: "SQL vs. NoSQL (ACID vs. BASE); When to use Key-Value, Document, or Graph databases.",
          timeAllocation: "Day 10",
          focusArea: "CAP Theorem, Data Modeling, Choosing a Data Store"
        },
        {
          concept: "Data Partitioning & Replication",
          description: "Sharding methods (Hash, Range); Read Replicas (Master-Slave) and its impact on consistency.",
          timeAllocation: "Day 11",
          focusArea: "Horizontal Scaling of DB, Hot Spots, Eventual Consistency"
        }
      ]
    },
    {
      id: 4,
      title: "Applied System Design",
      days: "Days 12-14",
      description: "Apply the fundamentals to common, large-scale systems. The goal is not to memorize the final design, but to internalize the design process.",
      focusAreas: [
        "Structured Design: Learn the six-step process: Clarify, Estimate, Design, Deep Dive, Bottlenecks, and Wrap Up.",
        "Core Systems: Practice designing services that rely on real-time data, short identifiers, and distributed processing."
      ],
      systems: [
        {
          system: "Design a URL Shortener",
          challenges: "Generating unique IDs (Base62 encoding), high read-to-write ratio, efficient mapping storage (NoSQL).",
          timeAllocation: "Day 12",
          deepDive: "Hashing vs. ID Generation Service, Read-Heavy Optimization, Caching Lookup"
        },
        {
          system: "Design a Chat System (WhatsApp/Messenger)",
          challenges: "Real-time messaging (WebSockets), Fanout (Fanout-on-Write vs. Fanout-on-Read), Message Ordering.",
          timeAllocation: "Day 13",
          deepDive: "Push Notifications, Persistent Connections, Message Queue (Kafka/RabbitMQ)"
        },
        {
          system: "Design a News Feed / Twitter",
          challenges: "Fanout-on-Write (for active users) vs. Fanout-on-Read (for less active users), Feed Generation Service.",
          timeAllocation: "Day 14",
          deepDive: "Database Sharding (User ID), Feed Aggregation, Caching the generated feed"
        }
      ]
    },
    {
      id: 5,
      title: "Behavioral and Advanced Topics",
      days: "Days 15-21",
      description: "This final phase focuses on the 'soft' skills and non-technical knowledge that often determine the final hiring decision.",
      focusAreas: [
        "Behavioral/Leadership: Practice the STAR method to structure answers for leadership and conflict questions.",
        "Architecture: Review concepts that tie together system components.",
        "Mock Interviews: Crucial practice under time pressure."
      ],
      topics: [
        {
          topic: "Behavioral: Conflict/Failure",
          day: "Day 15",
          questions: "Tell me about a time you disagreed with a manager or teammate. Describe a project failure or difficult bug you solved. (Use STAR method)"
        },
        {
          topic: "Behavioral: Leadership/Growth",
          day: "Day 16",
          questions: "Tell me about a time you took leadership without having the title. How do you prioritize projects with conflicting deadlines? Why FAANG Company X?"
        },
        {
          topic: "Advanced System Topics",
          day: "Day 17",
          questions: "Review Distributed Transactions (Two-Phase Commit), Rate Limiting (Leaky Bucket/Token Bucket), and Idempotency"
        },
        {
          topic: "Object-Oriented Design (OOD)",
          day: "Day 18",
          questions: "Practice OOD problems (e.g., Design a Parking Lot or Elevator System). Focus on UML diagrams and applying design patterns (e.g., Factory, Strategy)"
        },
        {
          topic: "Full Mock Interview 1",
          day: "Day 19",
          questions: "Simulate a full 45-minute coding interview. Practice verbalizing your thought process and discussing complexity"
        },
        {
          topic: "Full Mock Interview 2 (System)",
          day: "Day 20",
          questions: "Simulate a full 45-minute system design interview. Practice clarifying requirements and estimating scale (back-of-the-envelope)"
        },
        {
          topic: "Review & Final Prep",
          day: "Day 21",
          questions: "Review common 'gotchas' (edge cases, integer overflow, pointer manipulation). Prepare 3 intelligent questions to ask the interviewer"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              FAANG Interview Questions
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
              21-Day Preparation Roadmap
            </p>
            <p className="text-lg text-neutral-400 max-w-4xl mx-auto">
              This intensive 21-day guide provides a collection of the most commonly asked questions and essential study areas 
              across Coding, System Design, Behavioral, and Advanced topics for top tech company interviews (FAANG and similar tier).
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {modules.map((module, index) => (
          <div key={module.id} className="mb-16">
            <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-8 mb-8">
              {/* Module Header */}
              <div className="flex items-center mb-6">
                <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  {module.id}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{module.title}</h2>
                  <p className="text-neutral-400 text-lg">{module.days}</p>
                </div>
              </div>

              {/* Module Description */}
              <div className="mb-8">
                <p className="text-neutral-300 text-lg leading-relaxed mb-4">{module.description}</p>
                
                {/* Key Focus Areas */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Key Focus Areas</h3>
                  <ul className="space-y-2 text-neutral-300">
                    {module.focusAreas.map((area, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Patterns/Concepts/Systems/Topics Table */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {module.id <= 2 ? 'Patterns' : module.id === 3 ? 'Concepts' : module.id === 4 ? 'System Design Topics' : 'Topics'}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left py-3 px-4 text-neutral-300 font-medium">
                          {module.id <= 2 ? 'Pattern' : module.id === 3 ? 'Concept' : module.id === 4 ? 'System Design Topic' : 'Topic Area'}
                        </th>
                        <th className="text-left py-3 px-4 text-neutral-300 font-medium">
                          {module.id <= 2 ? 'Concept' : module.id === 3 ? 'Description' : module.id === 4 ? 'Core Challenges & Key Components' : 'Day/Focus'}
                        </th>
                        <th className="text-left py-3 px-4 text-neutral-300 font-medium">Time Allocation</th>
                        <th className="text-left py-3 px-4 text-neutral-300 font-medium">
                          {module.id <= 2 ? 'Sample Problems' : module.id === 3 ? 'Focus Area' : module.id === 4 ? 'Deep Dive Focus' : 'Essential Questions & Concepts'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {(module.patterns || module.concepts || module.systems || module.topics).map((item, idx) => (
                        <tr key={idx} className="border-b border-neutral-800 hover:bg-neutral-800/50 transition-colors">
                          <td className="py-3 px-4 text-white font-medium">
                            {item.pattern || item.concept || item.system || item.topic}
                          </td>
                          <td className="py-3 px-4 text-neutral-300">
                            {item.concept || item.description || item.challenges || item.day}
                          </td>
                          <td className="py-3 px-4 text-neutral-300">
                            {item.timeAllocation || item.day}
                          </td>
                          <td className="py-3 px-4 text-neutral-300">
                            {item.sampleProblems || item.focusArea || item.deepDive || item.questions}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Study Roadmap Section */}
        <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-8 mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">21-Day Study Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Week 1: Coding Foundation</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3">1-4</div>
                  <div>
                    <p className="text-white font-medium text-sm">Foundational Coding Patterns</p>
                    <p className="text-neutral-400 text-xs">Two Pointers, Sliding Window, Trees, Sorting</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Week 2: Advanced & System Design</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3">5-7</div>
                  <div>
                    <p className="text-white font-medium text-sm">Advanced Coding Techniques</p>
                    <p className="text-neutral-400 text-xs">DP, Backtracking, Graphs</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3">8-11</div>
                  <div>
                    <p className="text-white font-medium text-sm">System Design Fundamentals</p>
                    <p className="text-neutral-400 text-xs">Scaling, Caching, Databases</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3">12-14</div>
                  <div>
                    <p className="text-white font-medium text-sm">Applied System Design</p>
                    <p className="text-neutral-400 text-xs">URL Shortener, Chat, News Feed</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Week 3: Behavioral & Mock</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3">15-18</div>
                  <div>
                    <p className="text-white font-medium text-sm">Behavioral & Advanced Topics</p>
                    <p className="text-neutral-400 text-xs">STAR Method, OOD, System Topics</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3">19-21</div>
                  <div>
                    <p className="text-white font-medium text-sm">Mock Interviews & Final Prep</p>
                    <p className="text-neutral-400 text-xs">Coding & System Design Mocks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interview Tips Section */}
        <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-bold text-white mb-6">FAANG Interview Success Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Coding Interview Strategy</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Always start by clarifying requirements and edge cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Think out loud and explain your approach before coding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Discuss time and space complexity before and after implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Test your solution with multiple examples and edge cases</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">System Design Interview Strategy</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Follow the structured approach: Clarify → Estimate → Design → Deep Dive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Start with high-level architecture, then dive into specific components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Discuss trade-offs and justify your design decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Consider scalability, reliability, and performance implications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
