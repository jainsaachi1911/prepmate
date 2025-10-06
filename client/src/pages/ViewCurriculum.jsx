import React from 'react';

export default function ViewCurriculum() {
  const leetcodeQuestions = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Arrays & Hashing",
      description: "Find two numbers in an array that add up to a target",
      link: "https://leetcode.com/problems/two-sum/"
    },
    {
      id: 2,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "Stack",
      description: "Determine if string has valid parentheses",
      link: "https://leetcode.com/problems/valid-parentheses/"
    },
    {
      id: 3,
      title: "Merge Two Sorted Lists",
      difficulty: "Easy",
      category: "Linked List",
      description: "Merge two sorted linked lists into one sorted list",
      link: "https://leetcode.com/problems/merge-two-sorted-lists/"
    },
    {
      id: 4,
      title: "Best Time to Buy and Sell Stock",
      difficulty: "Easy",
      category: "Arrays",
      description: "Find the maximum profit from buying and selling stock",
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
    },
    {
      id: 5,
      title: "Valid Palindrome",
      difficulty: "Easy",
      category: "Two Pointers",
      description: "Check if string is palindrome after converting to lowercase and removing non-alphanumeric",
      link: "https://leetcode.com/problems/valid-palindrome/"
    },
    {
      id: 6,
      title: "Invert Binary Tree",
      difficulty: "Easy",
      category: "Binary Tree",
      description: "Invert a binary tree by swapping left and right children",
      link: "https://leetcode.com/problems/invert-binary-tree/"
    },
    {
      id: 7,
      title: "Valid Anagram",
      difficulty: "Easy",
      category: "Arrays & Hashing",
      description: "Determine if two strings are anagrams",
      link: "https://leetcode.com/problems/valid-anagram/"
    },
    {
      id: 8,
      title: "Binary Search",
      difficulty: "Easy",
      category: "Binary Search",
      description: "Implement binary search on sorted array",
      link: "https://leetcode.com/problems/binary-search/"
    },
    {
      id: 9,
      title: "Flood Fill",
      difficulty: "Easy",
      category: "Graph",
      description: "Implement flood fill algorithm",
      link: "https://leetcode.com/problems/flood-fill/"
    },
    {
      id: 10,
      title: "Lowest Common Ancestor of BST",
      difficulty: "Medium",
      category: "Binary Search Tree",
      description: "Find lowest common ancestor in BST",
      link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
    },
    {
      id: 11,
      title: "3Sum",
      difficulty: "Medium",
      category: "Arrays",
      description: "Find all unique triplets that sum to zero",
      link: "https://leetcode.com/problems/3sum/"
    },
    {
      id: 12,
      title: "Binary Tree Level Order Traversal",
      difficulty: "Medium",
      category: "Binary Tree",
      description: "Level order traversal of binary tree",
      link: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
    },
    {
      id: 13,
      title: "Clone Graph",
      difficulty: "Medium",
      category: "Graph",
      description: "Deep copy of an undirected graph",
      link: "https://leetcode.com/problems/clone-graph/"
    },
    {
      id: 14,
      title: "Course Schedule",
      difficulty: "Medium",
      category: "Graph",
      description: "Detect cycle in directed graph",
      link: "https://leetcode.com/problems/course-schedule/"
    },
    {
      id: 15,
      title: "House Robber",
      difficulty: "Medium",
      category: "Dynamic Programming",
      description: "Maximum sum of non-adjacent elements",
      link: "https://leetcode.com/problems/house-robber/"
    },
    {
      id: 16,
      title: "Number of Islands",
      difficulty: "Medium",
      category: "Graph",
      description: "Count number of islands in 2D grid",
      link: "https://leetcode.com/problems/number-of-islands/"
    },
    {
      id: 17,
      title: "Rotate Image",
      difficulty: "Medium",
      category: "Matrix",
      description: "Rotate image 90 degrees clockwise",
      link: "https://leetcode.com/problems/rotate-image/"
    },
    {
      id: 18,
      title: "Search in Rotated Sorted Array",
      difficulty: "Medium",
      category: "Binary Search",
      description: "Search in rotated sorted array",
      link: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
    },
    {
      id: 19,
      title: "String to Integer (atoi)",
      difficulty: "Medium",
      category: "String",
      description: "Convert string to 32-bit integer",
      link: "https://leetcode.com/problems/string-to-integer-atoi/"
    },
    {
      id: 20,
      title: "Validate Binary Search Tree",
      difficulty: "Medium",
      category: "Binary Search Tree",
      description: "Check if binary tree is valid BST",
      link: "https://leetcode.com/problems/validate-binary-search-tree/"
    },
    {
      id: 21,
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      category: "Heap",
      description: "Merge k sorted linked lists",
      link: "https://leetcode.com/problems/merge-k-sorted-lists/"
    },
    {
      id: 22,
      title: "Trapping Rain Water",
      difficulty: "Hard",
      category: "Two Pointers",
      description: "Calculate trapped water between bars",
      link: "https://leetcode.com/problems/trapping-rain-water/"
    },
    {
      id: 23,
      title: "Word Search II",
      difficulty: "Hard",
      category: "Trie",
      description: "Find words in board using trie",
      link: "https://leetcode.com/problems/word-search-ii/"
    },
    {
      id: 24,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      category: "Binary Search",
      description: "Find median of two sorted arrays",
      link: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
    },
    {
      id: 25,
      title: "Regular Expression Matching",
      difficulty: "Hard",
      category: "Dynamic Programming",
      description: "Implement regular expression matching",
      link: "https://leetcode.com/problems/regular-expression-matching/"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'text-green-400';
      case 'medium':
        return 'text-yellow-400';
      case 'hard':
        return 'text-red-400';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-8">LeetCode Curriculum</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Master these 25 carefully selected LeetCode problems to strengthen your problem-solving skills and ace technical interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {leetcodeQuestions.map((question) => (
            <div
              key={question.id}
              className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-neutral-400">#{question.id}</span>
                    <h3 className="text-xl font-semibold">
                      <a
                        href={question.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors duration-200"
                      >
                        {question.title}
                      </a>
                    </h3>
                  </div>
                  <p className="text-neutral-300 mb-4">{question.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-neutral-800 text-neutral-300 text-sm rounded-lg">
                      {question.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`font-medium ${getDifficultyColor(question.difficulty)}`}>
                    {question.difficulty}
                  </span>
                  <a
                    href={question.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-white text-black hover:bg-neutral-100 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Solve Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}