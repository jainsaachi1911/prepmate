import React from 'react';

export default function JavaScriptGuide() {
  const modules = [
    {
      id: 1,
      title: "Closures and Scope",
      days: "Days 1-2",
      description: "Closures are one of the most fundamental and frequently asked-about concepts in JavaScript interviews. A closure is created when a function, known as the inner function, is defined inside another function, known as the outer function.",
      keyConcepts: [
        {
          concept: "Closure Definition",
          description: "A function bundled with its lexical environment (its surrounding state).",
          keywords: "Retained Access, Inner/Outer Function, State Preservation"
        },
        {
          concept: "Lexical Scoping",
          description: "Scope is determined by where code is written, not where it is called.",
          keywords: "Static Scope, Source Code Placement"
        },
        {
          concept: "Data Privacy",
          description: "Using closures to create private variables inaccessible from the outside.",
          keywords: "Module Pattern, Private Members"
        },
        {
          concept: "Common Pitfall",
          description: "Closures reference the variable, not the value; demonstrated with var in loops vs. let.",
          keywords: "Reference vs. Value, Loop Iteration Scope"
        }
      ],
      details: [
        "The closure is the inner function's ability to retain access to the variables and scope of its outer function, even after the outer function has finished executing.",
        "Lexical scoping means that the scope of a variable is determined by where the variable is defined in the source code, not where the function is called.",
        "Closures are critical for real-world scenarios like data privacy and currying.",
        "Variables declared with var are function-scoped, whereas variables declared with let and const are block-scoped.",
        "When an inner function forms a closure, it doesn't take a snapshot of the outer variable's value; instead, it maintains a reference to the variable itself.",
        "This is a common 'trick question' in interviews, often demonstrated with setTimeout inside a loop where var is shared, while let creates a new closure for each iteration."
      ]
    },
    {
      id: 2,
      title: "Promises and Asynchronous JavaScript",
      days: "Days 3-4",
      description: "Promises are the modern, standard way to handle asynchronous operations in JavaScript, designed to solve the problems associated with older callback-based approaches like 'callback hell' or inversion of control.",
      keyConcepts: [
        {
          concept: "Promise States",
          description: "Pending, Fulfilled (Resolved), Rejected (Settled).",
          keywords: "Immutable State, Future Value"
        },
        {
          concept: "Chaining (.then)",
          description: "Allows sequential asynchronous execution by returning a new promise.",
          keywords: "Sequential Flow, Error Propagation"
        },
        {
          concept: "Async/Await",
          description: "Syntax sugar over promises to write asynchronous code synchronously.",
          keywords: "Non-blocking, Syntactic Clarity, Pause Execution"
        },
        {
          concept: "Promise Combinators",
          description: "Methods for handling multiple promises (Promise.all(), Promise.race(), Promise.any()).",
          keywords: "Parallel Execution, First Result"
        }
      ],
      details: [
        "A Promise is essentially a proxy for a value not necessarily known when the promise is created.",
        "Every Promise exists in one of three mutually exclusive states: Pending, Fulfilled (Resolved), or Rejected.",
        "The .then() method accepts up to two arguments: a handler for fulfillment and a handler for rejection.",
        "The .then() method always returns a new promise, which is key to chaining multiple asynchronous operations sequentially.",
        "The async/await syntax allows asynchronous code to be written and read as if it were synchronous.",
        "Promise.all() takes an array of promises and returns a single promise that fulfills only when all input promises have fulfilled.",
        "Promise.race() returns a promise that fulfills or rejects as soon as any of the input promises fulfills or rejects."
      ]
    },
    {
      id: 3,
      title: "The Event Loop and Concurrency Model",
      days: "Days 5-6",
      description: "Understanding the JavaScript Event Loop is vital because it explains how JavaScript manages its non-blocking, asynchronous behavior despite being a single-threaded language.",
      keyConcepts: [
        {
          concept: "Single-Threaded",
          description: "JavaScript executes one command at a time using one Call Stack.",
          keywords: "Non-Blocking I/O, Call Stack"
        },
        {
          concept: "Event Loop Role",
          description: "Moves completed callbacks from the Message Queue to the Call Stack when the Stack is empty.",
          keywords: "Stack Empty Check, Task Scheduling"
        },
        {
          concept: "Web APIs",
          description: "Environment where asynchronous operations (timers, fetch) are executed outside the JS engine.",
          keywords: "Offloading Tasks, Browser Environment"
        },
        {
          concept: "Microtasks vs. Macrotasks",
          description: "Microtasks (Promises) are prioritized and fully drained before one Macrotask (Timers, I/O) is processed.",
          keywords: "Priority Queue, Job Queue, Promise Resolution"
        }
      ],
      details: [
        "The JavaScript engine itself only has one call stack and one heap, meaning it can execute only one operation at a time.",
        "The central component is the Call Stack, where synchronous code is executed.",
        "When an asynchronous operation is encountered, the callback function is offloaded to the Web APIs environment.",
        "Once the asynchronous operation completes, its associated callback is placed onto the Message Queue.",
        "The Event Loop constantly monitors the Call Stack and the Message Queue.",
        "The Event Loop pushes a waiting callback from the Message Queue onto the Call Stack only if and when the Call Stack is completely empty.",
        "Microtasks include callbacks from Promises and queueMicrotask, while Macrotasks include callbacks from timers and I/O operations.",
        "The Event Loop prioritizes the Microtask Queue: it drains the entire Microtask Queue before taking a single Macrotask from the Macrotask Queue."
      ]
    },
    {
      id: 4,
      title: "Prototype, Inheritance, and Classes",
      days: "Days 7-8",
      description: "JavaScript is a prototype-based language, which fundamentally differs from class-based languages like Java or C++. Understanding the prototype chain is essential for grasping how inheritance and object properties work in JavaScript.",
      keyConcepts: [
        {
          concept: "Prototype Chain",
          description: "The mechanism for inheritance; a sequence of objects linked by the [[Prototype]] reference.",
          keywords: "Inheritance, Property Lookup, Delegation"
        },
        {
          concept: "Prototype-based",
          description: "The fundamental nature of JavaScript inheritance, contrasting with class-based languages.",
          keywords: "Object.create(), __proto__ (deprecated)"
        },
        {
          concept: "Class Syntax",
          description: "ES6 syntactic sugar over constructor functions and prototype inheritance.",
          keywords: "Constructor Method, extends Keyword, super Call"
        },
        {
          concept: "new Operator",
          description: "Creates a new object, links its [[Prototype]] to the constructor's prototype, and calls the constructor.",
          keywords: "Instance Creation, Constructor Invocation"
        }
      ],
      details: [
        "Every JavaScript object has an internal slot [[Prototype]] which is a reference to another object, its prototype.",
        "When you try to access a property on an object, the engine first checks the object itself, then continues up the prototype chain.",
        "The prototype mechanism is the language's native way of achieving inheritance.",
        "Functions have a prototype property, which is used when that function is called with the new keyword to act as a constructor function.",
        "The class keyword provides syntactic sugar over the traditional prototype inheritance model.",
        "Classes do not introduce a new object-oriented inheritance model; they are primarily a cleaner way to write constructor functions.",
        "The extends keyword is used for class inheritance, setting up the prototype chain between two classes.",
        "The super keyword is used within the subclass's constructor to call the constructor of the parent class."
      ]
    },
    {
      id: 5,
      title: "ES6+ Features and Modern Syntax",
      days: "Days 9-10",
      description: "The introduction of ECMAScript 2015 (ES6) marked a massive shift in JavaScript development, introducing features that solved long-standing issues and significantly improved readability, maintainability, and expressiveness.",
      keyConcepts: [
        {
          concept: "let / const",
          description: "Block-scoped variable declarations, replacing the function-scoped and hoisted var.",
          keywords: "Block Scope, Immutability (Reference), Hoisting"
        },
        {
          concept: "Arrow Functions",
          description: "Shorter syntax that lexically binds this from the surrounding scope.",
          keywords: "Lexical this, No arguments Object, Cannot be Constructor"
        },
        {
          concept: "Spread/Rest",
          description: "Spread expands iterables; Rest collects multiple elements into an array.",
          keywords: "Array Merging, Function Argument Collection, Shallow Copy"
        },
        {
          concept: "Destructuring",
          description: "Syntactic sugar to unpack values from arrays or properties from objects.",
          keywords: "Clean Assignment, Object/Array Matching"
        },
        {
          concept: "Template Literals",
          description: "Backtick strings for interpolation and multi-line text.",
          keywords: "String Interpolation, Embedded Expressions"
        }
      ],
      details: [
        "Variable Declarations (let and const) solved the scoping issues associated with var.",
        "let allows for mutable, block-scoped variables, eliminating hoisting pitfalls.",
        "const declares a block-scoped constant that must be initialized and cannot be reassigned.",
        "Arrow Functions are a cleaner way to write function expressions and handle the this keyword differently.",
        "Arrow functions do not bind their own this; instead, they lexically inherit the this value from their enclosing scope.",
        "The Spread operator is used to expand an iterable into its individual elements.",
        "The Rest operator collects multiple function arguments into a single array.",
        "Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.",
        "Template Literals enable string interpolation and multi-line strings without complex concatenation.",
        "Modules (ESM) standardized how code is organized into reusable units using import and export statements."
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
              JavaScript Interview Prep Guide
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
              10-Day Roadmap to Master Core JavaScript Concepts
            </p>
            <p className="text-lg text-neutral-400 max-w-4xl mx-auto">
              A comprehensive, detailed roadmap to master the core JavaScript concepts most frequently tested 
              in software developer interviews. Five foundational modules covering closures, promises, 
              event loop, prototypes, and modern ES6+ features.
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
          <h2 className="text-3xl font-bold text-white mb-6">10-Day Study Roadmap</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Week 1: Core Concepts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                  <div>
                    <p className="text-white font-medium">Days 1-2: Closures and Scope</p>
                    <p className="text-neutral-400 text-sm">Lexical scoping, data privacy, common pitfalls</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                  <div>
                    <p className="text-white font-medium">Days 3-4: Promises and Async</p>
                    <p className="text-neutral-400 text-sm">Promise states, chaining, async/await, combinators</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                  <div>
                    <p className="text-white font-medium">Days 5-6: Event Loop</p>
                    <p className="text-neutral-400 text-sm">Call stack, message queue, microtasks vs macrotasks</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Week 2: Advanced Topics</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                  <div>
                    <p className="text-white font-medium">Days 7-8: Prototypes & Classes</p>
                    <p className="text-neutral-400 text-sm">Prototype chain, inheritance, ES6 classes</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">5</div>
                  <div>
                    <p className="text-white font-medium">Days 9-10: ES6+ Features</p>
                    <p className="text-neutral-400 text-sm">let/const, arrow functions, destructuring, modules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interview Tips Section */}
        <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-bold text-white mb-6">JavaScript Interview Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Preparation Strategy</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Practice coding closures and scope scenarios on paper</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Understand the difference between var, let, and const</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Master promise chaining and async/await patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Be able to explain the event loop with examples</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Common Interview Questions</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Explain closures with a practical example</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Difference between Promise.all() and Promise.race()</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>How does the 'this' keyword work in different contexts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Explain prototype inheritance vs class inheritance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
