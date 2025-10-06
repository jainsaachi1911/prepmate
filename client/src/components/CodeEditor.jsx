import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

export default function CodeEditor({ language = 'javascript', theme = 'vs-dark', defaultValue = '' }) {
  const [code, setCode] = useState(defaultValue);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [currentTheme, setCurrentTheme] = useState(theme);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const runCode = async () => {
    setIsRunning(true);
    try {
      // For JavaScript code, we can use Function constructor
      // Note: This is just for demonstration. In a production environment,
      // you should use a secure backend service to execute code
      if (currentLanguage === 'javascript') {
        const originalConsoleLog = console.log;
        let output = [];
        
        // Override console.log to capture output
        console.log = (...args) => {
          output.push(args.join(' '));
        };

        // Execute the code
        try {
          const fn = new Function(code);
          fn();
          setOutput(output.join('\n'));
        } catch (error) {
          setOutput(`Error: ${error.message}`);
        }

        // Restore original console.log
        console.log = originalConsoleLog;
      } else {
        setOutput('Currently, only JavaScript execution is supported.');
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
    setIsRunning(false);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <select 
            className="bg-[#1E1E1E] text-white px-4 py-2 rounded-lg border border-neutral-700 min-w-[120px]"
            value={currentLanguage}
            onChange={(e) => setCurrentLanguage(e.target.value)}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
          <select 
            className="bg-[#1E1E1E] text-white px-4 py-2 rounded-lg border border-neutral-700"
            value={currentTheme}
            onChange={(e) => setCurrentTheme(e.target.value)}
          >
            <option value="vs-dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
        <button
          onClick={runCode}
          disabled={isRunning}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50"
        >
          {isRunning ? 'Running...' : 'Run Code'}
        </button>
      </div>
      
      <div className="flex gap-4 h-[calc(100vh-200px)]">
        {/* Editor - Takes up 75% of the space */}
        <div className="w-3/4 h-full border border-neutral-700 rounded-lg overflow-hidden">
          <Editor
            height="100%"
            language={currentLanguage}
            value={code}
            theme={currentTheme}
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              padding: { top: 10, bottom: 10 },
            }}
          />
        </div>
        
        {/* Output - Takes up 25% of the space */}
        <div className="w-1/4 h-full bg-[#1E1E1E] border border-neutral-700 rounded-lg p-4 flex flex-col">
          <div className="text-sm text-neutral-400 mb-2 font-medium">Output</div>
          <pre className="text-white font-mono text-sm whitespace-pre-wrap flex-1 overflow-auto">
            {output}
          </pre>
        </div>
      </div>
    </div>
  );
}