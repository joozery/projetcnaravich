import React from 'react';
import SilkBannerSimple from './components/backgrounds/silk/SilkBannerSimple';

function TestSilkBanner() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* แบนเนอร์พื้นฐาน */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">แบนเนอร์พื้นฐาน (CSS Gradient)</h2>
          <SilkBannerSimple />
        </div>

        {/* แบนเนอร์แบบปรับแต่ง */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">แบนเนอร์แบบปรับแต่ง</h2>
          <SilkBannerSimple 
            title="ตลาดหนี้มือถือ"
            subtitle="เลือกซื้อหนี้คุณภาพ ลงทุนอย่างชาญฉลาด"
            stats={[
              { number: "4", label: "รายการหนี้" },
              { number: "100%", label: "ข้อมูลจริง" },
              { number: "24/7", label: "บริการ" }
            ]}
            gradientColors={['#2196F3', '#1976D2']}
          />
        </div>

        {/* แบนเนอร์สีเขียว */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">แบนเนอร์สีเขียว</h2>
          <SilkBannerSimple 
            title="การลงทุนที่ยั่งยืน"
            subtitle="สร้างผลตอบแทนระยะยาวด้วยการลงทุนที่ชาญฉลาด"
            stats={[
              { number: "15%", label: "ผลตอบแทน" },
              { number: "99.9%", label: "ความปลอดภัย" },
              { number: "365", label: "วันบริการ" }
            ]}
            gradientColors={['#4CAF50', '#388E3C']}
          />
        </div>

        {/* แบนเนอร์สีม่วง */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">แบนเนอร์สีม่วง</h2>
          <SilkBannerSimple 
            title="เทคโนโลยีล้ำสมัย"
            subtitle="ประสบการณ์ใหม่ในการจัดการหนี้ด้วย AI"
            stats={[
              { number: "AI", label: "ปัญญาประดิษฐ์" },
              { number: "100%", label: "อัตโนมัติ" },
              { number: "0", label: "ข้อผิดพลาด" }
            ]}
            gradientColors={['#9C27B0', '#7B1FA2']}
          />
        </div>

      </div>
    </div>
  );
}

export default TestSilkBanner;




