import React from 'react';
import { SilkBanner } from './components/backgrounds/silk';
import SilkBannerSimple from './components/backgrounds/silk/SilkBannerSimple';

function TestAllBanners() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          ทดสอบ Silk Banner Components
        </h1>

        {/* SilkBanner แบบ WebGL (มี fallback) */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            SilkBanner แบบ WebGL (มี CSS Fallback)
          </h2>
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
              color: '#2196F3',
              noiseIntensity: 1.5,
              rotation: 0.1
            }}
          />
        </div>

        {/* SilkBannerSimple แบบ CSS เท่านั้น */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            SilkBanner แบบ CSS เท่านั้น (เสถียรกว่า)
          </h2>
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

        {/* เปรียบเทียบสีต่างๆ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">สีเขียว</h3>
            <SilkBannerSimple 
              title="การลงทุนที่ยั่งยืน"
              subtitle="สร้างผลตอบแทนระยะยาว"
              stats={[
                { number: "15%", label: "ผลตอบแทน" },
                { number: "99.9%", label: "ความปลอดภัย" }
              ]}
              gradientColors={['#4CAF50', '#388E3C']}
            />
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">สีม่วง</h3>
            <SilkBannerSimple 
              title="เทคโนโลยีล้ำสมัย"
              subtitle="ประสบการณ์ใหม่ด้วย AI"
              stats={[
                { number: "AI", label: "ปัญญาประดิษฐ์" },
                { number: "100%", label: "อัตโนมัติ" }
              ]}
              gradientColors={['#9C27B0', '#7B1FA2']}
            />
          </div>
        </div>

        {/* ข้อมูลการใช้งาน */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4 text-gray-800">วิธีการใช้งาน</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>SilkBanner:</strong> ใช้ WebGL shaders (อาจไม่ทำงานในบางเบราว์เซอร์)</p>
            <p><strong>SilkBannerSimple:</strong> ใช้ CSS gradients (ทำงานได้ทุกเบราว์เซอร์)</p>
            <p><strong>แนะนำ:</strong> ใช้ SilkBannerSimple สำหรับการใช้งานจริง</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TestAllBanners;




