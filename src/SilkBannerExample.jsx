import React from 'react';
import { SilkBanner } from './components/backgrounds/silk';

function SilkBannerExample() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* แบนเนอร์พื้นฐาน */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">แบนเนอร์พื้นฐาน</h2>
          <SilkBanner />
        </div>

        {/* แบนเนอร์แบบปรับแต่ง */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">แบนเนอร์แบบปรับแต่ง</h2>
          <SilkBanner 
            title="ตลาดหนี้มือถือ"
            subtitle="เลือกซื้อหนี้คุณภาพ ลงทุนอย่างชาญฉลาด"
            stats={[
              { number: "4", label: "รายการหนี้" },
              { number: "100%", label: "ข้อมูลจริง" },
              { number: "24/7", label: "บริการ" }
            ]}
            silkProps={{
              speed: 3,
              scale: 1.8,
              color: '#1976D2',
              noiseIntensity: 1.5,
              rotation: 0.1
            }}
          />
        </div>

        {/* แบนเนอร์สีเขียว */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">แบนเนอร์สีเขียว</h2>
          <SilkBanner 
            title="การลงทุนที่ยั่งยืน"
            subtitle="สร้างผลตอบแทนระยะยาวด้วยการลงทุนที่ชาญฉลาด"
            stats={[
              { number: "15%", label: "ผลตอบแทน" },
              { number: "99.9%", label: "ความปลอดภัย" },
              { number: "365", label: "วันบริการ" }
            ]}
            silkProps={{
              speed: 1.5,
              scale: 2,
              color: '#4CAF50',
              noiseIntensity: 1,
              rotation: -0.05
            }}
          />
        </div>

        {/* แบนเนอร์สีม่วง */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">แบนเนอร์สีม่วง</h2>
          <SilkBanner 
            title="เทคโนโลยีล้ำสมัย"
            subtitle="ประสบการณ์ใหม่ในการจัดการหนี้ด้วย AI"
            stats={[
              { number: "AI", label: "ปัญญาประดิษฐ์" },
              { number: "100%", label: "อัตโนมัติ" },
              { number: "0", label: "ข้อผิดพลาด" }
            ]}
            silkProps={{
              speed: 4,
              scale: 1.2,
              color: '#9C27B0',
              noiseIntensity: 2,
              rotation: 0.15
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default SilkBannerExample;




