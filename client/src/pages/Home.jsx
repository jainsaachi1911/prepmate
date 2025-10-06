import React from 'react';
import { Link } from 'react-router-dom';
import RadarChart from '../components/RadarChart';

export default function Home() {
  const modules = [
    {
      title: "7 Days DSA LeetCode Preparation Kit",
      description: "Master key Data Structures & Algorithms concepts through carefully curated LeetCode problems",
      duration: "7 days",
      difficulty: "Intermediate",
      topics: ["Arrays", "Linked Lists", "Trees", "Dynamic Programming"]
    },
    {
      title: "System Design Interview Guide",
      description: "Learn how to design scalable systems and ace your system design interviews",
      duration: "14 days",
      difficulty: "Advanced",
      topics: ["Scalability", "Load Balancing", "Caching", "Database Design"]
    },
    {
      title: "JavaScript Interview Prep",
      description: "Comprehensive guide to JavaScript concepts frequently asked in interviews",
      duration: "10 days",
      difficulty: "All Levels",
      topics: ["Closures", "Promises", "Event Loop", "ES6+"]
    },
    {
      title: "FAANG Interview Questions",
      description: "Collection of most commonly asked questions in top tech companies",
      duration: "21 days",
      difficulty: "Advanced",
      topics: ["Coding", "System Design", "Behavioral"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-left max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight">
                Master Your Tech Interviews
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-12 leading-relaxed">
                Structured learning paths and expert resources to help you land your dream tech role
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dsa-study-guide" className="px-8 py-4 bg-white text-black hover:bg-neutral-100 rounded-lg text-lg font-medium transition-colors duration-200 text-center">
                  Get Started
                </Link>
                <Link to="/view-curriculum" className="px-8 py-4 border border-neutral-600 hover:bg-neutral-800 rounded-lg text-lg font-medium transition-colors duration-200">
                  View Curriculum
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="/images/download.png" 
                alt="Tech Interview Preparation" 
                className="w-full max-w-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center text-white">Featured Learning Paths</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => {
            // Determine the correct route based on module title
            const getModuleRoute = (title) => {
              if (title === "7 Days DSA LeetCode Preparation Kit") return "/dsa-study-guide";
              if (title === "System Design Interview Guide") return "/system-design-guide";
              if (title === "JavaScript Interview Prep") return "/javascript-guide";
              if (title === "FAANG Interview Questions") return "/faang-guide";
              return "/dsa-study-guide"; // default fallback
            };

            return (
              <div key={index} 
                   className="bg-[#1A1A1A] border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all duration-300 hover:shadow-lg">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                      {module.title}
                    </h3>
                    <span className="px-3 py-1.5 bg-neutral-800 text-neutral-300 text-sm rounded-lg whitespace-nowrap ml-4">
                      {module.duration}
                    </span>
                  </div>
                  <p className="text-neutral-300 text-base mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {module.topics.map((topic, i) => (
                      <span key={i} className="px-3 py-1.5 bg-neutral-800 text-neutral-300 text-sm rounded-lg">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base text-neutral-400">
                      {module.difficulty}
                    </span>
                    <Link to={getModuleRoute(module.title)} className="px-6 py-2.5 bg-white text-black hover:bg-neutral-100 rounded-lg text-base font-medium transition-colors duration-200 text-center">
                      Start Learning
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Fundamentals Radar Chart */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#1A1A1A] rounded-xl border border-neutral-800">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center text-white">Core Engineering Fundamentals</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full max-w-lg mx-auto">
            <RadarChart />
          </div>
          <div className="text-lg text-neutral-300 space-y-6">
            <p className="leading-relaxed">
              Our curriculum is carefully designed to cover all essential Computer Engineering fundamentals. The radar chart illustrates the relative importance and depth of coverage for each core area in technical interviews.
            </p>
            <ul className="space-y-4">
              <li><span className="text-white font-semibold">DSA (90%):</span> The backbone of technical interviews, covering arrays, trees, graphs, and dynamic programming.</li>
              <li><span className="text-white font-semibold">DBMS (75%):</span> Essential database concepts, SQL queries, normalization, and transaction management.</li>
              <li><span className="text-white font-semibold">OOPs (80%):</span> Object-oriented design principles, patterns, and best practices.</li>
              <li><span className="text-white font-semibold">OS (70%):</span> Process management, memory allocation, threading, and synchronization.</li>
              <li><span className="text-white font-semibold">CN (65%):</span> Networking fundamentals, protocols, and client-server architecture.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Most Common LeetCode Questions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center text-white">Most Common LeetCode Questions</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1A1A1A] border-b border-neutral-800">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Problem</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Difficulty</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Companies</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-800 hover:bg-[#1A1A1A]">
                <td className="px-6 py-4">
                  <a href="https://leetcode.com/problems/two-sum" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Two Sum</a>
                </td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-green-900 text-green-300 rounded text-sm">Easy</span></td>
                <td className="px-6 py-4 text-neutral-300">Array, Hash Table</td>
                <td className="px-6 py-4 text-neutral-300">Google, Amazon, Apple</td>
              </tr>
              <tr className="border-b border-neutral-800 hover:bg-[#1A1A1A]">
                <td className="px-6 py-4">
                  <a href="https://leetcode.com/problems/add-two-numbers" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Add Two Numbers</a>
                </td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-yellow-900 text-yellow-300 rounded text-sm">Medium</span></td>
                <td className="px-6 py-4 text-neutral-300">Linked List, Math</td>
                <td className="px-6 py-4 text-neutral-300">Microsoft, Meta, Adobe</td>
              </tr>
              <tr className="border-b border-neutral-800 hover:bg-[#1A1A1A]">
                <td className="px-6 py-4">
                  <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Longest Substring Without Repeating Characters</a>
                </td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-yellow-900 text-yellow-300 rounded text-sm">Medium</span></td>
                <td className="px-6 py-4 text-neutral-300">String, Sliding Window</td>
                <td className="px-6 py-4 text-neutral-300">Amazon, Bloomberg, Meta</td>
              </tr>
              <tr className="border-b border-neutral-800 hover:bg-[#1A1A1A]">
                <td className="px-6 py-4">
                  <a href="https://leetcode.com/problems/median-of-two-sorted-arrays" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Median of Two Sorted Arrays</a>
                </td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-red-900 text-red-300 rounded text-sm">Hard</span></td>
                <td className="px-6 py-4 text-neutral-300">Array, Binary Search</td>
                <td className="px-6 py-4 text-neutral-300">Google, Amazon, Adobe</td>
              </tr>
              <tr className="border-b border-neutral-800 hover:bg-[#1A1A1A]">
                <td className="px-6 py-4">
                  <a href="https://leetcode.com/problems/container-with-most-water" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Container With Most Water</a>
                </td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-yellow-900 text-yellow-300 rounded text-sm">Medium</span></td>
                <td className="px-6 py-4 text-neutral-300">Array, Two Pointers</td>
                <td className="px-6 py-4 text-neutral-300">Meta, Microsoft, Apple</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
