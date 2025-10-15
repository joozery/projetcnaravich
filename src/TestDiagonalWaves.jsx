import React from 'react';
import Silk from './components/backgrounds/silk/Silk';

function TestDiagonalWaves() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          ทดสอบ Silk Component แบบ Diagonal Waves
        </h1>

        {/* Silk พื้นฐาน */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Silk พื้นฐาน</h2>
          <div className="h-64 rounded-lg overflow-hidden shadow-lg border-2 border-gray-600 bg-white">
            <Silk />
          </div>
        </div>

        {/* Silk แบบที่คุณต้องการ */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Silk แบบที่คุณต้องการ</h2>
          <div className="h-64 rounded-lg overflow-hidden shadow-lg border-2 border-gray-600 bg-white">
            <Silk
              speed={5}
              scale={1}
              color="#7B7481"
              noiseIntensity={1.5}
              rotation={0}
            />
          </div>
        </div>

        {/* Silk สีน้ำเงินแบบ diagonal waves */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Silk สีน้ำเงินแบบ Diagonal Waves</h2>
          <div className="h-64 rounded-lg overflow-hidden shadow-lg border-2 border-gray-600 bg-white">
            <Silk
              speed={3}
              scale={1.2}
              color="#2196F3"
              noiseIntensity={2}
              rotation={0.1}
            />
          </div>
        </div>

        {/* Silk สีเขียวแบบ diagonal waves */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Silk สีเขียวแบบ Diagonal Waves</h2>
          <div className="h-64 rounded-lg overflow-hidden shadow-lg border-2 border-gray-600 bg-white">
            <Silk
              speed={8}
              scale={0.8}
              color="#4CAF50"
              noiseIntensity={1}
              rotation={-0.05}
            />
          </div>
        </div>

        {/* Silk สีม่วงแบบ diagonal waves */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Silk สีม่วงแบบ Diagonal Waves</h2>
          <div className="h-64 rounded-lg overflow-hidden shadow-lg border-2 border-gray-600 bg-white">
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
          <h2 className="text-xl font-bold mb-4 text-white">Silk ขนาดเล็ก (Grid)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="h-32 rounded-lg overflow-hidden shadow border border-gray-600 bg-white">
              <Silk speed={4} color="#FF6B6B" scale={1.1} />
            </div>
            <div className="h-32 rounded-lg overflow-hidden shadow border border-gray-600 bg-white">
              <Silk speed={6} color="#4ECDC4" scale={0.9} />
            </div>
            <div className="h-32 rounded-lg overflow-hidden shadow border border-gray-600 bg-white">
              <Silk speed={3} color="#45B7D1" scale={1.3} />
            </div>
          </div>
        </div>

        {/* แบนเนอร์ตัวอย่างแบบ diagonal waves */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">แบนเนอร์ตัวอย่างแบบ Diagonal Waves</h2>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Silk
              speed={2}
              scale={1.5}
              color="#2196F3"
              noiseIntensity={1.2}
              rotation={0.05}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-3xl font-bold mb-2 drop-shadow-lg">ตลาดหนี้มือถือ</h1>
              <p className="text-lg mb-6 opacity-95">เลือกซื้อหนี้คุณภาพ ลงทุนอย่างชาญฉลาด</p>
              <div className="flex gap-8 text-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm">รายการหนี้</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">ข้อมูลจริง</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">บริการ</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ข้อมูลการใช้งาน */}
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4 text-white">วิธีการใช้งาน</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p><strong>speed:</strong> ความเร็วของการเคลื่อนไหว (1-10)</p>
            <p><strong>scale:</strong> ขนาดของเอฟเฟกต์ (0.5-2)</p>
            <p><strong>color:</strong> สีหลัก (hex format เช่น #7B7481)</p>
            <p><strong>noiseIntensity:</strong> ความเข้มของ noise (0.5-3)</p>
            <p><strong>rotation:</strong> การหมุนของ pattern (-0.5 ถึง 0.5)</p>
          </div>
          
          <div className="mt-4 p-4 bg-gray-700 rounded">
            <h4 className="font-bold mb-2 text-white">ตัวอย่างโค้ด:</h4>
            <pre className="text-xs text-gray-300">
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

export default TestDiagonalWaves;




