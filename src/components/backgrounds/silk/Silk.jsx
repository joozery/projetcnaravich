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
    } : { r: 123, g: 116, b: 129 };
  };

  const rgb = hexToRgb(color);
  const { r, g, b } = rgb;
  
  // สร้างสีไล่ระดับ
  const color1 = `rgb(${Math.max(0, r - 100)}, ${Math.max(0, g - 100)}, ${Math.max(0, b - 100)})`;
  const color2 = `rgb(${Math.min(255, r + 80)}, ${Math.min(255, g + 80)}, ${Math.min(255, b + 80)})`;
  const color3 = `rgb(${Math.max(0, r - 60)}, ${Math.max(0, g - 60)}, ${Math.max(0, b - 60)})`;

  return (
    <div 
      className="w-full h-full relative overflow-hidden"
      style={{
        background: `linear-gradient(${135 + rotation * 30}deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`,
        position: 'relative'
      }}
    >
      {/* Diagonal waves pattern */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            repeating-linear-gradient(
              ${45 + rotation * 20}deg,
              transparent 0px,
              rgba(255,255,255,0.25) 1px,
              transparent 2px,
              transparent 12px,
              rgba(255,255,255,0.15) 13px,
              transparent 14px
            )
          `,
          animation: `diagonalWave ${speed}s ease-in-out infinite`,
          opacity: 0.9
        }}
      />
      
      {/* Secondary wave pattern */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            repeating-linear-gradient(
              ${-45 + rotation * 20}deg,
              transparent 0px,
              rgba(255,255,255,0.2) 1px,
              transparent 2px,
              transparent 8px,
              rgba(255,255,255,0.1) 9px,
              transparent 10px
            )
          `,
          animation: `diagonalWave2 ${speed * 1.5}s ease-in-out infinite`,
          opacity: 0.7
        }}
      />

      {/* Noisy texture overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at ${20 + Math.sin(time * speed) * 30}% ${30 + Math.cos(time * speed) * 30}%, rgba(255,255,255,0.2) 0%, transparent 50%),
            radial-gradient(circle at ${80 + Math.cos(time * speed * 0.7) * 20}% ${70 + Math.sin(time * speed * 0.7) * 20}%, rgba(255,255,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at ${50 + Math.sin(time * speed * 1.3) * 25}% ${50 + Math.cos(time * speed * 1.3) * 25}%, rgba(255,255,255,0.12) 0%, transparent 60%)
          `,
          animation: `noisyTexture ${speed * 2}s ease-in-out infinite`,
          opacity: 0.6
        }}
      />
      
      {/* Moving particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: '2px',
              height: '2px',
              left: `${10 + i * 7 + Math.sin(time * speed + i) * 25}%`,
              top: `${20 + i * 6 + Math.cos(time * speed + i) * 20}%`,
              opacity: 0.5 + Math.sin(time * speed + i) * 0.4,
              animation: `silkParticle ${speed + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`
            }}
          />
        ))}
      </div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes diagonalWave {
          0%, 100% { 
            transform: translateX(0px) translateY(0px);
            opacity: 0.9;
          }
          50% { 
            transform: translateX(25px) translateY(-25px);
            opacity: 1;
          }
        }
        
        @keyframes diagonalWave2 {
          0%, 100% { 
            transform: translateX(0px) translateY(0px);
            opacity: 0.7;
          }
          50% { 
            transform: translateX(-20px) translateY(20px);
            opacity: 0.9;
          }
        }
        
        @keyframes noisyTexture {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.6;
          }
          50% { 
            transform: scale(1.15) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        @keyframes silkParticle {
          0%, 100% { 
            opacity: 0.5;
            transform: scale(1);
          }
          50% { 
            opacity: 0.9;
            transform: scale(2.5);
          }
        }
      `}</style>
    </div>
  );
};

export default Silk;