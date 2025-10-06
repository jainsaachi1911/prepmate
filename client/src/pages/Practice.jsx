import React from 'react';
import CodeEditor from '../components/CodeEditor';

export default function Practice() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-8">
      <div className="max-w-[90%] mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-white">Code Editor</h2>
        <CodeEditor
          defaultValue={`// Write your code here\nconsole.log("Hello, World!");`}
        />
      </div>
    </div>
  );
}