import React from 'react';
import { Silk } from './components/backgrounds/silk';

function App() {
  return (
    <div className="w-full h-screen relative">
      {/* Silk Background */}
      <div className="absolute inset-0">
        <Silk 
          speed={3} 
          scale={1.2} 
          color="#7B7481" 
          noiseIntensity={1.5} 
          rotation={0.1} 
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Silk Background</h1>
          <p className="text-lg opacity-90">Beautiful animated silk texture background</p>
        </div>
      </div>
    </div>
  );
}

export default App;

