import React, { useState, useEffect } from 'react';

// Silk Component แบบ CSS ที่ทำงานได้แน่นอน
const Silk = ({ 
  speed = 5, 
  scale = 1, 
  color = "#7B7481", 
  noiseIntensity = 1.5, 
  rotation = 0 
}) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 0.1) % (Math.PI * 2));
    }, 1000 / speed); // ความเร็วตาม speed prop

    return () => clearInterval(interval);
  }, [speed]);

  // สร้างสีไล่ระดับตาม color prop
  const getGradientColor = () => {
    const baseColor = color.replace('#', '');
    const r = parseInt(baseColor.slice(0, 2), 16);
    const g = parseInt(baseColor.slice(2, 4), 16);
    const b = parseInt(baseColor.slice(4, 6), 16);
    
    // สร้างสีที่เข้มกว่าและอ่อนกว่า
    const darker = `rgb(${Math.max(0, r - 30)}, ${Math.max(0, g - 30)}, ${Math.max(0, b - 30)})`;
    const lighter = `rgb(${Math.min(255, r + 20)}, ${Math.min(255, g + 20)}, ${Math.min(255, b + 20)})`;
    
    return { darker, lighter };
  };

  const { darker, lighter } = getGradientColor();

  return (
    <div 
      className="w-full h-full relative overflow-hidden"
      style={{
        background: `linear-gradient(${45 + rotation * 10}deg, ${lighter} 0%, ${color} 50%, ${darker} 100%)`,
        transform: `scale(${1 + Math.sin(animationPhase) * 0.02 * scale})`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* Pattern overlay เพื่อสร้าง texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${20 + Math.sin(animationPhase) * 10}% ${30 + Math.cos(animationPhase) * 10}%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at ${80 + Math.cos(animationPhase) * 10}% ${70 + Math.sin(animationPhase) * 10}%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at ${50 + Math.sin(animationPhase * 1.5) * 15}% ${50 + Math.cos(animationPhase * 1.5) * 15}%, rgba(255,255,255,0.05) 0%, transparent 60%)
          `,
          animation: `silkPattern ${speed}s ease-in-out infinite`
        }}
      />
      
      {/* Animated dots */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${2 + Math.sin(animationPhase + i) * 1}px`,
              height: `${2 + Math.sin(animationPhase + i) * 1}px`,
              left: `${20 + i * 10 + Math.sin(animationPhase + i) * 5}%`,
              top: `${30 + i * 8 + Math.cos(animationPhase + i) * 5}%`,
              animation: `silkDot ${speed + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes silkPattern {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1) rotate(0deg);
          }
          50% { 
            opacity: 0.3;
            transform: scale(1.05) rotate(180deg);
          }
        }
        
        @keyframes silkDot {
          0%, 100% { 
            opacity: 0.1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.2;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
};

export default Silk;




