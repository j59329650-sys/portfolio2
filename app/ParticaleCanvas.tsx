'use client';
import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    container.appendChild(canvas);

    const img = new Image();
    img.src = '/profile.png';
    img.crossOrigin = 'Anonymous';

    let animationFrameId: number;
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    img.onload = () => {
      const width = container.clientWidth || 450;
      const height = container.clientHeight || 450;
      
      canvas.width = width;
      canvas.height = height;

      // প্লাস, মাইনাস, ডট এবং অন্যান্য সিম্বল
      const symbols = ['.', '-', '+', '*', '#'];

      const offCanvas = document.createElement('canvas');
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      // পরিবর্তন করা হলো: স্যাম্পল সাইজ বাড়িয়ে শার্প করা হলো
      const sampleWidth = 75; 
      const sampleHeight = 75;
      offCanvas.width = sampleWidth;
      offCanvas.height = sampleHeight;

      offCtx.drawImage(img, 0, 0, sampleWidth, sampleHeight);
      const imgData = offCtx.getImageData(0, 0, sampleWidth, sampleHeight).data;

      const gapX = width / sampleWidth;
      const gapY = height / sampleHeight;

      const particles: {
        x: number;
        y: number;
        originX: number;
        originY: number;
        char: string;
      }[] = [];

      for (let y = 0; y < sampleHeight; y++) {
        for (let x = 0; x < sampleWidth; x++) {
          const index = (y * sampleWidth + x) * 4;
          const r = imgData[index];
          const g = imgData[index + 1];
          const b = imgData[index + 2];
          const alpha = imgData[index + 3];

          if (alpha > 50) {
            const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
            if (brightness < 230) {
              const charIndex = Math.floor((brightness / 255) * (symbols.length - 1));
              const char = symbols[charIndex];

              const targetX = x * gapX + gapX / 2;
              const targetY = y * gapY + gapY / 2;

              particles.push({
                x: targetX + (Math.random() - 0.5) * 400,
                y: targetY + (Math.random() - 0.5) * 400,
                originX: targetX,
                originY: targetY,
                char: char,
              });
            }
          }
        }
      }

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#64ffda'; // গাজীর থিম কালার (সায়ান/মিন্ট)
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        particles.forEach((p) => {
          p.x += (p.originX - p.x) * 0.06;
          p.y += (p.originY - p.y) * 0.06;

          let drawX = p.x;
          let drawY = p.y;

          const dx = mouse.x - drawX;
          const dy = mouse.y - drawY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 60) {
            const angle = Math.atan2(dy, dx);
            const force = (60 - dist) * 0.3;
            drawX -= Math.cos(angle) * force;
            drawY -= Math.sin(angle) * force;
          }

          ctx.fillText(p.char, drawX, drawY);
        });
      };

      animate();
    };

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[400px] w-[400px] sm:h-[450px] sm:w-[450px] flex items-center justify-center cursor-pointer"
    />
  );
}