import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function DSAStudyGuide() {
  const codeSnippets = {
    twoPointers: `// Two Pointers - Two Sum II
const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};`,

    slidingWindow: `// Sliding Window - Longest Substring Without Repeating Characters
const lengthOfLongestSubstring = (s) => {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};`,

    fastSlowPointers: `// Fast & Slow Pointers - Linked List Cycle Detection
const hasCycle = (head) => {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head.next;
    
    while (fast && fast.next) {
        if (slow === fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return false;
};`,

    mergeIntervals: `// Merge Intervals
const merge = (intervals) => {
    if (intervals.length <= 1) return intervals;
    
    // Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = merged[merged.length - 1];
        
        if (current[0] <= last[1]) {
            // Overlap - merge
            last[1] = Math.max(last[1], current[1]);
        } else {
            // No overlap - add new interval
            merged.push(current);
        }
    }
    
    return merged;
};`,

    bfs: `// BFS - Binary Tree Level Order Traversal
const levelOrder = (root) => {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
};`,

    dfs: `// DFS - Maximum Depth of Binary Tree
const maxDepth = (root) => {
    if (!root) return 0;
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
};`,

    backtracking: `// Backtracking - Permutations
const permute = (nums) => {
    const result = [];
    
    const backtrack = (currentPerm) => {
        if (currentPerm.length === nums.length) {
            result.push([...currentPerm]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (currentPerm.includes(nums[i])) continue;
            
            currentPerm.push(nums[i]);  // Choose
            backtrack(currentPerm);     // Explore
            currentPerm.pop();          // Un-choose
        }
    };
    
    backtrack([]);
    return result;
};`,

    dynamicProgramming: `// Dynamic Programming - Climbing Stairs
const climbStairs = (n) => {
    if (n <= 2) return n;
    
    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
};`,

    topKElements: `// Top K Elements - Kth Largest Element
const findKthLargest = (nums, k) => {
    const minHeap = new MinHeap();
    
    for (const num of nums) {
        minHeap.add(num);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    
    return minHeap.peek();
};`,

    binarySearch: `// Modified Binary Search - Search in Rotated Sorted Array
const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) return mid;
        
        // Check which half is sorted
        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
};`
  };

  const patterns = [
    {
      id: 1,
      title: "Two Pointers",
      description: "The Two Pointers pattern uses two indices to iterate through data structures efficiently, reducing O(N²) brute-force solutions to optimal O(N) time complexity.",
      analogy: "The Sorted Sock Search: Finding a pair of socks in a sorted drawer whose combined properties meet a target value. You use one hand at the start and one at the end, eliminating half the search space with each comparison.",
      explanation: "I'll use the Two Pointers approach, leveraging the sorted input to achieve O(N) time complexity. I'll initialize pointers at opposite ends and use the sum/target comparison to decide which pointer to move inward, ensuring the search space is constantly halved at each step.",
      problems: [
        { name: "Two Sum II - Input Array Is Sorted", id: 167, type: "Opposite Direction", complexity: "O(N) / O(1)" },
        { name: "Container With Most Water", id: 11, type: "Opposite Direction", complexity: "O(N) / O(1)" },
        { name: "Trapping Rain Water", id: 42, type: "Opposite Direction", complexity: "O(N) / O(1)" },
        { name: "Remove Duplicates from Sorted Array", id: 26, type: "Same Direction", complexity: "O(N) / O(1)" },
        { name: "3Sum", id: 15, type: "Same Direction (3 Pointers)", complexity: "O(N²) / O(N)" }
      ]
    },
    {
      id: 2,
      title: "Sliding Window",
      description: "The Sliding Window pattern efficiently calculates results on all possible contiguous subarrays or substrings by maintaining a dynamic window with two pointers.",
      analogy: "The Subway Train: The train is the window. The front car (right pointer) includes new passengers (elements). If the train becomes too crowded (constraint violated), the back car (left pointer) ejects passengers until the capacity is normal.",
      explanation: "I'll use a Dynamic Sliding Window to achieve O(N) time complexity. I'll track the element frequencies/state using a Hash Map. The right pointer expands the window. When the constraint is violated, the left pointer contracts the window until the constraint is met.",
      problems: [
        { name: "Longest Substring Without Repeating Characters", id: 3, type: "Dynamic Window", complexity: "O(N) / O(K)" },
        { name: "Minimum Window Substring", id: 76, type: "Dynamic Window", complexity: "O(N) / O(K)" },
        { name: "Maximum Average Subarray I", id: 643, type: "Fixed Window", complexity: "O(N) / O(1)" },
        { name: "Longest Repeating Character Replacement", id: 424, type: "Dynamic Window", complexity: "O(N) / O(1)" }
      ]
    },
    {
      id: 3,
      title: "Fast & Slow Pointers (Tortoise and Hare)",
      description: "This pattern uses two pointers moving at different speeds to solve linked list problems, particularly cycle detection and finding middle elements.",
      analogy: "The Track Race: A slow runner (Tortoise) and a fast runner (Hare) are on a circular track. The faster runner will inevitably lap the slower runner if a cycle exists.",
      explanation: "I'll use Fast & Slow Pointers to achieve an O(N) time and O(1) space solution. The fast pointer advances two steps and the slow pointer advances one. If they meet, a cycle is confirmed.",
      problems: [
        { name: "Linked List Cycle", id: 141, type: "Cycle Detection", complexity: "O(N) / O(1)" },
        { name: "Middle of the Linked List", id: 876, type: "Finding Midpoint", complexity: "O(N) / O(1)" },
        { name: "Linked List Cycle II", id: 142, type: "Cycle Start", complexity: "O(N) / O(1)" },
        { name: "Happy Number", id: 202, type: "Sequence Cycle", complexity: "O(log N) / O(1)" }
      ]
    },
    {
      id: 4,
      title: "Merge Intervals",
      description: "This pattern efficiently handles problems involving overlapping intervals by first sorting them and then merging in a single pass.",
      analogy: "The Overlapping Calendar Meetings: Sorting all meetings by their start time allows you to efficiently process them chronologically. You check if the next meeting starts before the current one ends.",
      explanation: "I'll first sort the intervals by their start time, which is the dominant step at O(N log N). Then, I'll iterate in O(N) time. I'll maintain a list of merged intervals and merge by taking the maximum end time upon overlap.",
      problems: [
        { name: "Merge Intervals", id: 56, type: "Merging Intervals", complexity: "O(N log N) / O(N)" },
        { name: "Insert Interval", id: 57, type: "Inserting and Merging", complexity: "O(N) / O(N)" },
        { name: "Meeting Rooms II", id: 253, type: "Interval Counting", complexity: "O(N log N) / O(N)" },
        { name: "Non-overlapping Intervals", id: 435, type: "Interval Deletion", complexity: "O(N log N) / O(1)" }
      ]
    },
    {
      id: 5,
      title: "Breadth-First Search (BFS)",
      description: "BFS explores nodes level by level using a queue, making it ideal for finding shortest paths in unweighted graphs and level-order traversals.",
      analogy: "The Ripples in a Pond: When a stone is dropped into a pond, the disturbance spreads out evenly in concentric circles. BFS processes data in the same way, exploring all nodes at distance k before moving to nodes at distance k+1.",
      explanation: "I'll use BFS with a Queue because the goal is to find the shortest path or process the structure level-by-level. I'll add the starting node to the queue, and for each dequeued node, I'll enqueue all its unvisited neighbors.",
      problems: [
        { name: "Binary Tree Level Order Traversal", id: 102, type: "Tree Traversal", complexity: "O(N) / O(N)" },
        { name: "Rotting Oranges", id: 994, type: "Shortest Path on Grid", complexity: "O(R·C) / O(R·C)" },
        { name: "Clone Graph", id: 133, type: "Graph Traversal", complexity: "O(V + E) / O(V)" },
        { name: "Shortest Path in Binary Matrix", id: 1091, type: "Shortest Path on Grid", complexity: "O(N²) / O(N²)" }
      ]
    },
    {
      id: 6,
      title: "Depth-First Search (DFS)",
      description: "DFS prioritizes moving as deeply as possible along each branch before exploring other branches, making it ideal for exhaustive exploration and path finding.",
      analogy: "The Maze Explorer: When navigating a complex maze, DFS is the strategy of picking a path and following it relentlessly until you hit a dead end. Only when you can go no further do you return (backtrack) to the last fork.",
      explanation: "I'll use DFS (likely recursive) because the problem requires an exhaustive search of all connected components or finding a full path. The recursion handles the state and backtracking automatically.",
      problems: [
        { name: "Maximum Depth of Binary Tree", id: 104, type: "Tree Traversal", complexity: "O(N) / O(Height)" },
        { name: "Number of Islands", id: 200, type: "Grid/Matrix Traversal", complexity: "O(R·C) / O(R·C)" },
        { name: "Path Sum", id: 112, type: "Path Finding", complexity: "O(N) / O(Height)" },
        { name: "Course Schedule", id: 207, type: "Graph Cycle Detection", complexity: "O(V + E) / O(V)" }
      ]
    },
    {
      id: 7,
      title: "Backtracking",
      description: "Backtracking is a specialized form of DFS for solving problems involving making sequences of choices, with the ability to undo choices that don't lead to solutions.",
      analogy: "The Combination Lock Trial: When cracking a multi-dial combination lock, you try a number for the first dial. If the first number is wrong, you stop immediately and revert to the beginning.",
      explanation: "Since this requires generating all valid Permutations/Combinations or finding a solution under complex constraints, I will use Backtracking. My recursive function will make a choice, check the constraints to prune invalid paths early, explore the result, and then critically undo the choice to reset the state.",
      problems: [
        { name: "Combinations", id: 77, type: "Combinations", complexity: "O(C(N,K)·K) / O(K)" },
        { name: "Permutations", id: 46, type: "Permutations", complexity: "O(N·N!) / O(N)" },
        { name: "N-Queens", id: 51, type: "Constraints/Decision", complexity: "O(N!) / O(N²)" },
        { name: "Word Search", id: 79, type: "Path Finding", complexity: "O(R·C·4^L) / O(L)" }
      ]
    },
    {
      id: 8,
      title: "Dynamic Programming (DP)",
      description: "DP optimizes problems with overlapping subproblems and optimal substructure by solving each subproblem only once and storing results for reuse.",
      analogy: "The Recipe Book: You're making a dish that requires a sauce, and the sauce needs a base that's also an ingredient in a side dish. Instead of preparing the base twice, you look up the recipe for the base once, save the result in your memory (memoization), and reuse it.",
      explanation: "This problem exhibits overlapping subproblems and optimal substructure, making Dynamic Programming the correct approach. I will define my DP array where DP[i] represents [meaning]. My state transition equation is DP[i] = f(previous states). I'll use a bottom-up (tabulation) approach to iteratively fill the table.",
      problems: [
        { name: "Climbing Stairs", id: 70, type: "1D DP (Sequence)", complexity: "O(N) / O(N)" },
        { name: "House Robber", id: 198, type: "1D DP (Max/Min)", complexity: "O(N) / O(N)" },
        { name: "Unique Paths", id: 62, type: "2D DP (Grid)", complexity: "O(R·C) / O(R·C)" },
        { name: "Longest Increasing Subsequence", id: 300, type: "Longest Subsequence", complexity: "O(N²) / O(N)" }
      ]
    },
    {
      id: 9,
      title: "Top 'K' Elements (Heaps/Priority Queues)",
      description: "This pattern efficiently finds the K smallest, largest, or most frequent elements using heaps, avoiding the need to sort the entire dataset.",
      analogy: "The Exclusive Club: A Min-Heap of size K is an exclusive club that only admits the K people with the highest scores. The member with the lowest score (the heap's root) is always at the door.",
      explanation: "I'll use a Min-Heap of size K (since I need the largest elements). For each of the N elements, I'll insert it into the heap, which takes O(log K). If the heap size exceeds K, I'll pop the minimum element (the root). This provides an overall time complexity of O(N log K).",
      problems: [
        { name: "Kth Largest Element in an Array", id: 215, type: "K Largest/Smallest", complexity: "O(N log K) / O(K)" },
        { name: "Top K Frequent Elements", id: 347, type: "Frequency Based", complexity: "O(N log K) / O(N)" },
        { name: "Find Median from Data Stream", id: 295, type: "Two Heaps", complexity: "O(log N) / O(N)" },
        { name: "Merge k Sorted Lists", id: 23, type: "K-Way Merge", complexity: "O(N log K) / O(K)" }
      ]
    },
    {
      id: 10,
      title: "Modified Binary Search",
      description: "This pattern extends classic binary search to solve problems with partially sorted data or complex search conditions, maintaining O(log N) efficiency.",
      analogy: "The Torn Dictionary: A dictionary has a section ripped out and taped to the end (a rotated array). You can still divide the book in half. However, at each step, you must check which of the two resulting halves is correctly sorted before you can decide where to continue the search.",
      explanation: "I'll use a Modified Binary Search because the input is partially sorted (or the problem has a monotonic search space). This will achieve an O(log N) search. I'll compare mid to the boundaries to smartly determine which half to discard, preserving the logarithmic time by ensuring half the search space is eliminated in every step.",
      problems: [
        { name: "Search in Rotated Sorted Array", id: 33, type: "Rotated Array Search", complexity: "O(log N) / O(1)" },
        { name: "Find Peak Element", id: 162, type: "Condition Search", complexity: "O(log N) / O(1)" },
        { name: "Koko Eating Bananas", id: 875, type: "Optimization Search", complexity: "O(N log M) / O(1)" },
        { name: "Find First and Last Position of Element", id: 34, type: "Boundary Search", complexity: "O(log N) / O(1)" }
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
              DSA LeetCode Interview Patterns
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
              A Comprehensive Study Guide for Software Developers
            </p>
            <p className="text-lg text-neutral-400 max-w-4xl mx-auto">
              Master the 10 most critical Data Structures and Algorithms patterns with in-depth explanations, 
              helpful analogies, and detailed practice problems. Perfect for high-level technical interviews.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {patterns.map((pattern, index) => (
          <div key={pattern.id} className="mb-16">
            <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-8 mb-8">
              {/* Pattern Header */}
              <div className="flex items-center mb-6">
                <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  {pattern.id}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{pattern.title}</h2>
                  <p className="text-neutral-300 text-lg">{pattern.description}</p>
                </div>
              </div>

              {/* Analogy and Explanation */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-neutral-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Analogy</h3>
                    <p className="text-neutral-300 leading-relaxed">{pattern.analogy}</p>
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">How to Explain to Interviewer</h3>
                    <p className="text-neutral-300 leading-relaxed">{pattern.explanation}</p>
                  </div>
              </div>

              {/* Code Example */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Code Example</h3>
                <div className="rounded-lg overflow-hidden">
                  <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      borderRadius: '0.5rem',
                      fontSize: '14px'
                    }}
                  >
                    {codeSnippets[Object.keys(codeSnippets)[index]]}
                  </SyntaxHighlighter>
                </div>
              </div>

              {/* Practice Problems Table */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Practice Problems</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left py-3 px-4 text-neutral-300 font-medium">Problem</th>
                        <th className="text-left py-3 px-4 text-neutral-300 font-medium">Type</th>
                        <th className="text-left py-3 px-4 text-neutral-300 font-medium">Complexity</th>
                        <th className="text-left py-3 px-4 text-neutral-300 font-medium">LeetCode ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pattern.problems.map((problem, idx) => (
                        <tr key={idx} className="border-b border-neutral-800 hover:bg-neutral-800/50 transition-colors">
                          <td className="py-3 px-4 text-white font-medium">{problem.name}</td>
                          <td className="py-3 px-4 text-neutral-300">{problem.type}</td>
                          <td className="py-3 px-4 text-neutral-300 font-mono text-sm">{problem.complexity}</td>
                          <td className="py-3 px-4">
                            <a 
                              href={`https://leetcode.com/problems/${problem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}/`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                            >
                              #{problem.id}
                            </a>
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

        {/* Study Tips Section */}
        <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-8 mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Study Tips for Success</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Learning Strategy</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Start with understanding the pattern concept before jumping to code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Practice the easier problems first to build confidence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Time yourself to simulate interview conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Explain your approach out loud as you code</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Interview Tips</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Always start by clarifying the problem requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Discuss time and space complexity before coding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Walk through your solution with test cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Consider edge cases and discuss optimizations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
