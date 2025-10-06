import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Overview */}
         <div className="mb-20">
           <h1 className="text-5xl font-bold mb-8 text-white text-center">About PrepMate</h1>
           <p className="text-2xl text-white mb-8 leading-relaxed text-center max-w-3xl mx-auto">
             PrepMate is a comprehensive interview preparation platform built with the MERN stack, designed to help developers master technical interviews through structured learning paths and curated resources.
           </p>
           <div className="flex justify-center">
             <a
               href="https://github.com/username/prepmate"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center px-8 py-4 bg-white text-black rounded-lg text-lg font-medium hover:bg-neutral-100 transition-colors duration-200"
             >
               <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                 <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
               </svg>
               View on GitHub
             </a>
           </div>
         </div>

         {/* Technology Stack Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-16 text-white text-center">Technology Stack</h2>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-800"></div>
              
              {/* Frontend Section */}
              <div className="mb-32 relative">
                <div className="flex items-center mb-8">
                  <div className="w-1/2 pr-16 text-right">
                    <h3 className="text-3xl font-semibold text-white mb-4">Frontend Development</h3>
                    <p className="text-lg text-white">Building responsive and interactive user interfaces</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl">1</div>
                  <div className="w-1/2 pl-16">
                    <ul className="space-y-4 text-lg text-white">
                      <li>React.js with Vite</li>
                      <li>Redux Toolkit & Redux Persist</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Authentication Section */}
              <div className="mb-32 relative">
                <div className="flex items-center mb-8">
                  <div className="w-1/2 pr-16 text-right">
                    <ul className="space-y-4 text-lg text-white">
                      <li>Firebase OAuth</li>
                      <li>JWT Authentication</li>
                      <li>bcryptjs Password Hashing</li>
                    </ul>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl">2</div>
                  <div className="w-1/2 pl-16">
                    <h3 className="text-3xl font-semibold text-white mb-4">Authentication & Security</h3>
                    <p className="text-lg text-white">Secure user authentication and data protection</p>
                  </div>
                </div>
              </div>

              {/* Backend Section */}
              <div className="mb-32 relative">
                <div className="flex items-center mb-8">
                  <div className="w-1/2 pr-16 text-right">
                    <h3 className="text-3xl font-semibold text-white mb-4">Backend Development</h3>
                    <p className="text-lg text-white">Robust server-side architecture</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl">3</div>
                  <div className="w-1/2 pl-16">
                    <ul className="space-y-4 text-lg text-white">
                      <li>Node.js & Express.js</li>
                      <li>RESTful API Design</li>
                      <li>Middleware Implementation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Database Section */}
              <div className="mb-32 relative">
                <div className="flex items-center mb-8">
                  <div className="w-1/2 pr-16 text-right">
                    <ul className="space-y-4 text-lg text-white">
                      <li>MongoDB Atlas</li>
                      <li>Mongoose ODM</li>
                      <li>Data Modeling</li>
                    </ul>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl">4</div>
                  <div className="w-1/2 pl-16">
                    <h3 className="text-3xl font-semibold text-white mb-4">Database Management</h3>
                    <p className="text-lg text-white">Scalable and efficient data storage</p>
                  </div>
                </div>
              </div>

              {/* Deployment Section */}
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="w-1/2 pr-16 text-right">
                    <h3 className="text-3xl font-semibold text-white mb-4">Deployment</h3>
                    <p className="text-lg text-white">Cloud hosting and continuous deployment</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl">5</div>
                  <div className="w-1/2 pl-16">
                    <ul className="space-y-4 text-lg text-white">
                      <li>Render Cloud Platform</li>
                      <li>Automatic GitHub Deployments</li>
                      <li>SSL/TLS Security</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-white">Key Features</h2>
          <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-6">
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Secure Authentication with Email/Password and Google OAuth</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Protected Routes for Authenticated Users</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Comprehensive Study Guides (DSA, System Design, JavaScript)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>User Profile Management with Image Upload</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Responsive Design for All Devices</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Deployment */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-white">Deployment</h2>
          <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-6">
            <p className="text-neutral-300 mb-4">
              PrepMate is deployed on Render's cloud platform, ensuring:
            </p>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Automatic deployments from GitHub</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>SSL encryption for secure data transmission</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Scalable infrastructure with auto-scaling capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Continuous monitoring and automatic restarts</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h2>
          <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-6">
            <p className="text-neutral-300">
              Have questions or suggestions? Feel free to reach out or contribute to the project. Your feedback helps us improve PrepMate for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
