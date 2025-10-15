import React from 'react';
import Silk from './components/backgrounds/silk/SilkCSS';

function TestSilkDirect() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          ทดสอบ Silk Component โดยตรง
        </h1>

        {/* Silk พื้นฐาน */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Silk พื้นฐาน</h2>
          <div className="h-64 rounded-lg overflow-hidden shadow-lg">
            <Silk />
          </div>
        </div>

        {/* Silk แบบปรับแต่ง */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Silk แบบปรับแต่ง</h2>
          <div className="h-64 rounded-lg overflow-hidden shadow-lg">
            <Silk
              speed={5}
              scale={1}
              color="#7B7481"
              noiseIntensity={1.5}
              rotation={0}
            />
          </div>
        </div>

        {/* Silk สีน้ำเงิน */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Silk สีน้ำเงิน</h2>
          <div className="h-64 rounded-lg overflow-hidden shadow-lg">
            <Silk
              speed={3}
              scale={1.2}
              color="#2196F3"
              noiseIntensity={2}
              rotation={0.1}
            />
          </div>
        </div>

        {/* Silk สีเขียว */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Silk สีเขียว</h2>
          <div className="h-64 rounded-lg overflow-hidden shadow-lg">
            <Silk
              speed={8}
              scale={0.8}
              color="#4CAF50"
              noiseIntensity={1}
              rotation={-0.05}
            />
          </div>
        </div>

        {/* Silk สีม่วง */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Silk สีม่วง</h2>
          <div className="h-64 rounded-lg overflow-hidden shadow-lg">
            <Silk
              speed={2}
              scale={1.5}
              color="#9C27B0"
              noiseIntensity={2.5}
              rotation={0.2}
            />
          </div>
        </div>

        {/* Grid ของ Silk ขนาดเล็ก */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Silk ขนาดเล็ก (Grid)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="h-32 rounded-lg overflow-hidden shadow">
              <Silk speed={4} color="#FF6B6B" scale={1.1} />
            </div>
            <div className="h-32 rounded-lg overflow-hidden shadow">
              <Silk speed={6} color="#4ECDC4" scale={0.9} />
            </div>
            <div className="h-32 rounded-lg overflow-hidden shadow">
              <Silk speed={3} color="#45B7D1" scale={1.3} />
            </div>
          </div>
        </div>

        {/* ข้อมูลการใช้งาน */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4 text-gray-800">วิธีการใช้งาน</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>speed:</strong> ความเร็วของการเคลื่อนไหว (1-10)</p>
            <p><strong>scale:</strong> ขนาดของเอฟเฟกต์ (0.5-2)</p>
            <p><strong>color:</strong> สีหลัก (hex format เช่น #7B7481)</p>
            <p><strong>noiseIntensity:</strong> ความเข้มของ noise (0.5-3)</p>
            <p><strong>rotation:</strong> การหมุนของ pattern (-0.5 ถึง 0.5)</p>
          </div>
          
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h4 className="font-bold mb-2">ตัวอย่างโค้ด:</h4>
            <pre className="text-xs text-gray-700">
{`import Silk from './Silk';

<Silk
  speed={5}
  scale={1}
  color="#7B7481"
  noiseIntensity={1.5}
  rotation={0}
/>`}
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TestSilkDirect;




