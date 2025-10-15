import React, { useState, useEffect } from 'react';

const Silk = ({ 
  speed = 5, 
  scale = 1, 
  color = "#7B7481", 
  noiseIntensity = 1.5, 
  rotation = 0 
}) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // สร้างสีไล่ระดับ
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(color);
  if (!rgb) return null;

  const { r, g, b } = rgb;
  
  // สร้างสีไล่ระดับ
  const color1 = `rgb(${Math.max(0, r - 40)}, ${Math.max(0, g - 40)}, ${Math.max(0, b - 40)})`;
  const color2 = `rgb(${Math.min(255, r + 20)}, ${Math.min(255, g + 20)}, ${Math.min(255, b + 20)})`;
  const color3 = `rgb(${Math.max(0, r - 20)}, ${Math.max(0, g - 20)}, ${Math.max(0, b - 20)})`;

  return (
    <div 
      className="w-full h-full relative overflow-hidden"
      style={{
        background: `linear-gradient(${135 + rotation * 20}deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`,
        position: 'relative'
      }}
    >
      {/* Animated overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${30 + Math.sin(time * speed) * 20}% ${40 + Math.cos(time * speed) * 20}%, rgba(255,255,255,0.2) 0%, transparent 50%),
            radial-gradient(circle at ${70 + Math.cos(time * speed * 0.8) * 15}% ${60 + Math.sin(time * speed * 0.8) * 15}%, rgba(255,255,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at ${50 + Math.sin(time * speed * 1.2) * 25}% ${50 + Math.cos(time * speed * 1.2) * 25}%, rgba(255,255,255,0.1) 0%, transparent 60%)
          `,
          animation: `silkMove ${speed}s ease-in-out infinite`
        }}
      />
      
      {/* Moving dots */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: '3px',
              height: '3px',
              left: `${20 + i * 15 + Math.sin(time * speed + i) * 10}%`,
              top: `${30 + i * 10 + Math.cos(time * speed + i) * 8}%`,
              animation: `silkDot ${speed + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes silkMove {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.1) rotate(180deg);
            opacity: 0.4;
          }
        }
        
        @keyframes silkDot {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1);
          }
          50% { 
            opacity: 0.4;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
};

export default Silk;




