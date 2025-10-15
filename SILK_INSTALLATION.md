# Silk JS CSS - Background Component

Silk JS CSS เป็น background component ที่สร้างเอฟเฟกต์ผ้าไหมแบบเคลื่อนไหวด้วย WebGL shaders

## การติดตั้ง

Silk JS CSS ได้ถูกติดตั้งเรียบร้อยแล้วในโปรเจคนี้ โดยมี dependencies ดังนี้:

- `@react-three/fiber` - React renderer สำหรับ Three.js
- `three` - 3D graphics library

## การใช้งาน

### Import Components

```jsx
import { Silk, SilkBanner } from './components/backgrounds/silk';
```

### การใช้งาน Silk Background พื้นฐาน

```jsx
import React from 'react';
import { Silk } from './components/backgrounds/silk';

function App() {
  return (
    <div className="w-full h-screen relative">
      {/* Silk Background */}
      <div className="absolute inset-0">
        <Silk />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white">Your Content Here</h1>
      </div>
    </div>
  );
}
```

### การใช้งาน SilkBanner (แนะนำ)

```jsx
import React from 'react';
import { SilkBanner } from './components/backgrounds/silk';

function App() {
  return (
    <div className="p-8">
      {/* แบนเนอร์พื้นฐาน */}
      <SilkBanner />
      
      {/* แบนเนอร์แบบปรับแต่ง */}
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
  );
}
```

### Props ที่สามารถปรับแต่งได้

#### Silk Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `speed` | number | 5 | ความเร็วของการเคลื่อนไหว |
| `scale` | number | 1 | ขนาดของ pattern |
| `color` | string | '#7B7481' | สีของ background (hex format) |
| `noiseIntensity` | number | 1.5 | ความเข้มของ noise effect |
| `rotation` | number | 0 | การหมุนของ pattern |

#### SilkBanner Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "ตลาดหนี้มือถือ" | หัวข้อหลักของแบนเนอร์ |
| `subtitle` | string | "เลือกซื้อหนี้คุณภาพ ลงทุนอย่างชาญฉลาด" | หัวข้อรองของแบนเนอร์ |
| `stats` | array | [{ number: "4", label: "รายการหนี้" }, ...] | ข้อมูลสถิติที่แสดงในแบนเนอร์ |
| `className` | string | "" | CSS classes เพิ่มเติม |
| `silkProps` | object | {} | Props สำหรับ Silk background |

### ตัวอย่างการใช้งานแบบปรับแต่ง

```jsx
<Silk 
  speed={3}           // ช้าลง
  scale={1.2}         // ขยายใหญ่ขึ้น
  color="#FF6B6B"     // สีแดง
  noiseIntensity={2}  // noise มากขึ้น
  rotation={0.2}      // หมุนเล็กน้อย
/>
```

## ไฟล์ที่เกี่ยวข้อง

- `src/components/backgrounds/silk/Silk.jsx` - Silk และ SilkBanner components
- `src/components/backgrounds/silk/index.js` - Export file
- `src/SilkExample.jsx` - ตัวอย่างการใช้งาน Silk background
- `src/SilkBannerExample.jsx` - ตัวอย่างการใช้งาน SilkBanner

## การทดสอบ

รันโปรเจคด้วยคำสั่ง:

```bash
npm run dev
```

แล้วเปิดเบราว์เซอร์ไปที่ `http://localhost:3000`

## หมายเหตุ

- Component นี้ใช้ WebGL shaders ดังนั้นต้องใช้เบราว์เซอร์ที่รองรับ WebGL
- Performance อาจแตกต่างกันไปตามความสามารถของ GPU
- แนะนำให้ใช้ใน full-screen หรือ container ที่มีขนาดใหญ่
