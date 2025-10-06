import React from 'react';

export default function SystemDesignGuide() {
  const modules = [
    {
      id: 1,
      title: "Scalability",
      days: "Days 1-4",
      description: "Scalability is a system's ability to handle an increasing amount of work (user load, data volume, transaction throughput) by adding resources, without compromising performance. It is the central pillar of system design and dictates how a system will grow over time.",
      keyConcepts: [
        {
          concept: "Vertical Scaling",
          description: "Increasing resources (CPU, RAM) of a single server (Scaling Up).",
          keywords: "SPOF, Ceiling Effect, Single Server Limit"
        },
        {
          concept: "Horizontal Scaling", 
          description: "Distributing load across multiple servers (Scaling Out).",
          keywords: "Distributed System, Near-Limitless Capacity, High Availability"
        },
        {
          concept: "Amdahl's Law",
          description: "Defines the maximum speedup achievable by parallelization, limited by the sequential portion of the program.",
          keywords: "Parallel Processing, Sequential Bottleneck"
        },
        {
          concept: "Stateless vs. Stateful",
          description: "Separating components that do not store data (stateless) from those that do (stateful) to enable easier horizontal scaling.",
          keywords: "Session Stickiness, Distributed State, Shared-Nothing Architecture"
        }
      ],
      details: [
        "The two fundamental approaches to achieving scalability are Vertical Scaling and Horizontal Scaling.",
        "Vertical Scaling, or 'scaling up,' means increasing the capacity of a single server—adding more CPU, RAM, or faster disk space.",
        "Horizontal Scaling, or 'scaling out,' involves distributing the load across multiple, cheaper servers (a cluster).",
        "Stateless services (like front-end servers or APIs) are easy to scale horizontally; you simply add more instances.",
        "Stateful services (like databases or session stores) are complex to scale, often requiring data partitioning (sharding).",
        "System scalability is measured by metrics like latency, throughput, and availability."
      ]
    },
    {
      id: 2,
      title: "Load Balancing",
      days: "Days 5-7", 
      description: "Load Balancing is the process of efficiently distributing incoming network traffic across a group of backend servers. It is the mechanism that enables horizontal scaling by ensuring that no single server is overwhelmed.",
      keyConcepts: [
        {
          concept: "Layer 4 (L4)",
          description: "Load balancing based on IP address and port (fast, simple).",
          keywords: "TCP/UDP, Network Layer"
        },
        {
          concept: "Layer 7 (L7)",
          description: "Load balancing based on HTTP headers, cookies, and application data (smarter, more flexible).",
          keywords: "HTTP/HTTPS, Content-Based Routing"
        },
        {
          concept: "Health Checks",
          description: "Mechanism for the load balancer to periodically verify the status and availability of backend servers.",
          keywords: "Server Failure Detection, Automated Failover"
        },
        {
          concept: "Load Balancing Algorithms",
          description: "Specific rules for distributing requests (e.g., Round Robin, Weighted Least Connection, IP Hash).",
          keywords: "Request Distribution Strategy, Fairness"
        }
      ],
      details: [
        "Load balancers sit between the client and the server cluster and can operate at different layers of the networking stack.",
        "Layer 7 load balancing is more intelligent and allows for sophisticated routing decisions, such as geographic routing or session stickiness.",
        "Common algorithms include Round Robin, Weighted Round Robin, and Least Connection.",
        "Load balancers perform health checks on backend servers to detect failures and automatically remove unhealthy servers.",
        "Load balancing can be applied at multiple tiers of an architecture, from public-facing to internal microservices."
      ]
    },
    {
      id: 3,
      title: "Caching",
      days: "Days 8-10",
      description: "Caching is the process of storing copies of frequently accessed data in a temporary, high-speed storage layer closer to the user or application to reduce latency and load on primary backend resources.",
      keyConcepts: [
        {
          concept: "Cache Hit/Miss",
          description: "Hit: Data found in cache (low latency). Miss: Data not found (must query database).",
          keywords: "Hit Ratio, Latency Reduction"
        },
        {
          concept: "Cache-Aside",
          description: "Application checks cache, then DB on miss, then updates cache (Lazy Loading).",
          keywords: "Read-Heavy Workloads, Stale Data Risk"
        },
        {
          concept: "Write-Through",
          description: "Write operation updates both cache and DB simultaneously.",
          keywords: "Write Latency, Immediate Consistency"
        },
        {
          concept: "Eviction Policy",
          description: "Rules for removing data when the cache is full (e.g., LRU, LFU, FIFO).",
          keywords: "Cache Invalidation, Memory Management"
        }
      ],
      details: [
        "The primary benefit of caching is reducing latency for repeated data access and decreasing database load.",
        "The fundamental trade-off introduced by caching is data freshness (or consistency).",
        "Cache-Aside (Lazy Loading): Application checks cache first, fetches from DB on miss, then updates cache.",
        "Write-Through: Data is simultaneously written to both cache and database in one transaction.",
        "Common eviction policies include Least Recently Used (LRU) and Least Frequently Used (LFU).",
        "Caches can be placed Client-Side, CDN, Web Server, or Distributed (Redis/Memcached)."
      ]
    },
    {
      id: 4,
      title: "Database Design",
      days: "Days 11-14",
      description: "Database Design is the bedrock of any system, dictating how persistent data is modeled, stored, and retrieved. System design requires choosing the right database type and designing a schema that is performant and scalable.",
      keyConcepts: [
        {
          concept: "CAP Theorem",
          description: "States that a distributed system can only guarantee two of the three properties: Consistency, Availability, and Partition Tolerance.",
          keywords: "Strong Consistency, Eventual Consistency, Distributed Transactions"
        },
        {
          concept: "Database Types",
          description: "SQL (ACID, Vertical Scale) vs. NoSQL (BASE, Horizontal Scale).",
          keywords: "Relational Model, Document Store, Key-Value Pair"
        },
        {
          concept: "Sharding",
          description: "Partitioning a database horizontally across multiple servers to distribute load and data volume.",
          keywords: "Data Partitioning, Hash Sharding, Hot Spotting, Resharding"
        },
        {
          concept: "Replication",
          description: "Copying data across multiple servers (Master-Slave/Leader-Follower) to increase read throughput and fault tolerance.",
          keywords: "Read Replicas, Write Throughput, Asynchronous Replication"
        }
      ],
      details: [
        "The first major decision is between Relational Databases (SQL) and Non-Relational Databases (NoSQL).",
        "SQL databases are structured, transactional, and adhere to ACID properties but are difficult to scale horizontally.",
        "NoSQL databases are designed for flexibility and scale, often relaxing ACID properties to prioritize Availability and Partition Tolerance.",
        "Sharding involves splitting a large database into smaller, independent units distributed across multiple servers.",
        "Replication uses Read Replicas to direct write traffic to a Master database while serving reads from multiple Slave/Replica databases.",
        "Sharding strategies include Hash-based and Range-based partitioning."
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
              System Design Interview Guide
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
              14-Day Roadmap to Master Scalable Systems
            </p>
            <p className="text-lg text-neutral-400 max-w-4xl mx-auto">
              A structured, detailed roadmap to master the core concepts of system design, 
              essential for building scalable systems and acing your interviews. 
              Four foundational modules: Scalability, Load Balancing, Caching, and Database Design.
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
                <p className="text-neutral-300 text-lg leading-relaxed">{module.description}</p>
              </div>

              {/* Key Concepts Table */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Concepts</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left py-3 px-4 text-neutral-300 font-medium">Concept</th>
                        <th className="text-left py-3 px-4 text-neutral-300 font-medium">Description</th>
                        <th className="text-left py-3 px-4 text-neutral-300 font-medium">Interviewer Keywords</th>
                      </tr>
                    </thead>
                    <tbody>
                      {module.keyConcepts.map((concept, idx) => (
                        <tr key={idx} className="border-b border-neutral-800 hover:bg-neutral-800/50 transition-colors">
                          <td className="py-3 px-4 text-white font-medium">{concept.concept}</td>
                          <td className="py-3 px-4 text-neutral-300">{concept.description}</td>
                          <td className="py-3 px-4 text-neutral-300 font-mono text-sm">{concept.keywords}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detailed Information */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Detailed Breakdown</h3>
                <div className="bg-neutral-800 rounded-lg p-6">
                  <ul className="space-y-3 text-neutral-300">
                    {module.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Study Roadmap Section */}
        <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-8 mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">14-Day Study Roadmap</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Week 1: Foundation</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                  <div>
                    <p className="text-white font-medium">Days 1-4: Scalability</p>
                    <p className="text-neutral-400 text-sm">Vertical vs Horizontal scaling, stateless vs stateful systems</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                  <div>
                    <p className="text-white font-medium">Days 5-7: Load Balancing</p>
                    <p className="text-neutral-400 text-sm">Layer 4/7 load balancing, algorithms, health checks</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Week 2: Advanced Concepts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                  <div>
                    <p className="text-white font-medium">Days 8-10: Caching</p>
                    <p className="text-neutral-400 text-sm">Cache patterns, eviction policies, distributed caching</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                  <div>
                    <p className="text-white font-medium">Days 11-14: Database Design</p>
                    <p className="text-neutral-400 text-sm">SQL vs NoSQL, CAP theorem, sharding, replication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interview Tips Section */}
        <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-bold text-white mb-6">System Design Interview Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Preparation Strategy</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Start with clarifying requirements and constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Estimate scale (users, requests per second, data size)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Design high-level architecture first, then dive into details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Identify bottlenecks and discuss scaling strategies</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Discussion Points</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Trade-offs between consistency, availability, and partition tolerance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Data flow and component interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Failure scenarios and fault tolerance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Monitoring, logging, and debugging strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
