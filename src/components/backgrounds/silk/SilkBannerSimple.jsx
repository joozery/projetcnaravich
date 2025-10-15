import React from 'react';

// SilkBanner แบบง่ายๆ ที่ใช้ CSS gradient แทน WebGL
const SilkBanner = ({ 
  title = "ตลาดหนี้มือถือ",
  subtitle = "เลือกซื้อหนี้คุณภาพ ลงทุนอย่างชาญฉลาด",
  stats = [
    { number: "4", label: "รายการหนี้" },
    { number: "100%", label: "ข้อมูลจริง" },
    { number: "24/7", label: "บริการ" }
  ],
  className = "",
  gradientColors = ['#2196F3', '#1976D2'] // สีน้ำเงินไล่ระดับ
}) => {
  return (
    <div 
      className={`relative w-full h-64 rounded-xl overflow-hidden shadow-lg ${className}`}
      style={{
        background: `linear-gradient(135deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`,
        position: 'relative'
      }}
    >
      {/* Pattern overlay เพื่อให้ดูมี texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
          `
        }}
      ></div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-700"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
          {title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-6 opacity-95 drop-shadow-md">
          {subtitle}
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-lg">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                {stat.number}
              </div>
              <div className="text-sm md:text-base opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SilkBanner;




