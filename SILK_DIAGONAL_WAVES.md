# Silk Component - Diagonal Waves Version

Silk Component เป็น background component ที่สร้างเอฟเฟกต์คลื่นน้ำแบบ diagonal waves พร้อม noisy texture ที่สวยงาม

## การติดตั้ง

Silk Component ได้ถูกติดตั้งเรียบร้อยแล้วในโปรเจคนี้

## การใช้งาน

### Import Component

```jsx
import Silk from './components/backgrounds/silk/Silk';
```

### การใช้งานพื้นฐาน

```jsx
import React from 'react';
import Silk from './components/backgrounds/silk/Silk';

function App() {
  return (
    <div className="w-full h-screen">
      <Silk />
    </div>
  );
}
```

### การใช้งานแบบปรับแต่ง

```jsx
<Silk
  speed={5}
  scale={1}
  color="#7B7481"
  noiseIntensity={1.5}
  rotation={0}
/>
```

### Props ที่สามารถปรับแต่งได้

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `speed` | number | 5 | ความเร็วของการเคลื่อนไหว (1-10) |
| `scale` | number | 1 | ขนาดของเอฟเฟกต์ (0.5-2) |
| `color` | string | '#7B7481' | สีหลักของ background (hex format) |
| `noiseIntensity` | number | 1.5 | ความเข้มของ noise effect (0.5-3) |
| `rotation` | number | 0 | การหมุนของ pattern (-0.5 ถึง 0.5) |

### ตัวอย่างการใช้งานแบบต่างๆ

#### สีน้ำเงินแบบ Diagonal Waves
```jsx
<Silk
  speed={3}
  scale={1.2}
  color="#2196F3"
  noiseIntensity={2}
  rotation={0.1}
/>
```

#### สีเขียวแบบ Diagonal Waves
```jsx
<Silk
  speed={8}
  scale={0.8}
  color="#4CAF50"
  noiseIntensity={1}
      rotation={-0.05}
/>
```

#### สีม่วงแบบ Diagonal Waves
```jsx
<Silk
  speed={2}
  scale={1.5}
  color="#9C27B0"
  noiseIntensity={2.5}
  rotation={0.2}
/>
```

### การใช้งานใน Container

```jsx
<div className="h-64 rounded-lg overflow-hidden shadow-lg">
  <Silk
    speed={5}
    scale={1}
    color="#7B7481"
    noiseIntensity={1.5}
    rotation={0}
  />
</div>
```

### การใช้งานแบบ Grid

```jsx
<div className="grid grid-cols-3 gap-4">
  <div className="h-32 rounded-lg overflow-hidden">
    <Silk speed={4} color="#FF6B6B" scale={1.1} />
  </div>
  <div className="h-32 rounded-lg overflow-hidden">
    <Silk speed={6} color="#4ECDC4" scale={0.9} />
  </div>
  <div className="h-32 rounded-lg overflow-hidden">
    <Silk speed={3} color="#45B7D1" scale={1.3} />
  </div>
</div>
```

## ไฟล์ที่เกี่ยวข้อง

- `src/components/backgrounds/silk/Silk.jsx` - Silk component หลัก
- `src/components/backgrounds/silk/index.js` - Export file
- `src/TestDiagonalWaves.jsx` - ตัวอย่างการใช้งาน Silk แบบ diagonal waves

## การทดสอบ

รันโปรเจคด้วยคำสั่ง:

```bash
npm run dev
```

แล้วเปิดเบราว์เซอร์ไปที่ `http://localhost:3004`

## หมายเหตุ

- Component นี้ใช้ CSS animations ดังนั้นทำงานได้ทุกเบราว์เซอร์
- Performance ดีและไม่ต้องการ WebGL
- แนะนำให้ใช้ใน container ที่มีขนาดกำหนดชัดเจน
- สามารถปรับแต่งสีและเอฟเฟกต์ได้ตามต้องการ
- มีเอฟเฟกต์ diagonal waves และ noisy texture ที่สวยงาม




