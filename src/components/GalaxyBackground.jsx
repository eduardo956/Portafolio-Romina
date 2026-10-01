import React, { useEffect, useRef, useState } from 'react';

export const GalaxyBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking state
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 220,
      active: false,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Galaxy Star Palette
    const colors = [
      'rgba(168, 85, 247, ',   // Vibrant Purple
      'rgba(236, 72, 153, ',   // Pink Nebula Spark
      'rgba(56, 189, 248, ',   // Cyan Star Accent
      'rgba(192, 132, 252, ',  // Lavender Bright
      'rgba(129, 140, 248, ',  // Indigo Light
      'rgba(255, 255, 255, ',  // Pure Star White
    ];

    const particleCount = Math.min(Math.floor((width * height) / 8000), 180);
    const particles = [];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 2.5 + 0.5;
        this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.7 + 0.3;
        this.baseAlpha = this.alpha;
        
        // Orbital & Drift Velocities
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        
        // Pulse speed for twinkling glass star effect
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.03 + 0.015;
      }

      update() {
        // Twinkle pulse alpha
        this.pulse += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulse) * 0.3;
        if (this.alpha < 0.15) this.alpha = 0.15;

        // Base ambient movement
        this.x += this.vx;
        this.y += this.vy;

        // Wrap edges smoothly
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;

        // Mouse galaxy gravitational vortex interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          // Tangential swirl + pull towards mouse
          const swirlAngle = angle + Math.PI / 2;
          this.x += Math.cos(swirlAngle) * force * 2.5 + Math.cos(angle) * force * 1.0;
          this.y += Math.sin(swirlAngle) * force * 2.5 + Math.sin(angle) * force * 1.0;
          
          // Enlarge and brighten near mouse cursor
          this.alpha = Math.min(1, this.alpha + force * 0.5);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorPrefix}${this.alpha})`;
        
        // Glow effect for larger stars
        if (this.radius > 1.8) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = `${this.colorPrefix}0.9)`;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const render = () => {
      // Smooth lerp mouse coordinates for dynamic glass spotlight
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Draw faint constellation light webs near mouse cursor
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        if (mouse.active) {
          const dxMouse = mouse.x - p1.x;
          const dyMouse = mouse.y - p1.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < 160) {
            for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const dx = p1.x - p2.x;
              const dy = p1.y - p2.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < 100) {
                const alpha = (1 - dist / 100) * (1 - distMouse / 160) * 0.4;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(192, 132, 252, ${alpha})`;
                ctx.lineWidth = 0.75;
                ctx.stroke();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate subtle shift for background nebulae based on mouse position
  const nebulaOffsetX = (mousePos.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * 0.03;
  const nebulaOffsetY = (mousePos.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * 0.03;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070510]">
      {/* 1. LAYER A: Incandescent Moving Nebulae (Glow Blobs) */}
      <div 
        className="absolute inset-0 transition-transform duration-700 ease-out pointer-events-none opacity-90"
        style={{ transform: `translate3d(${nebulaOffsetX}px, ${nebulaOffsetY}px, 0)` }}
      >
        {/* Nebulosa Violeta Profunda - Esquina Superior Izquierda */}
        <div className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-purple-900/40 via-purple-600/30 to-fuchsia-500/20 blur-[130px] animate-blob" />
        
        {/* Nebulosa Magenta / Pink - Centro Derecha */}
        <div className="absolute top-[25%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-pink-600/35 via-rose-500/25 to-purple-800/30 blur-[140px] animate-blob animation-delay-2000" />
        
        {/* Nebulosa Cian Eléctrico / Azul - Inferior Izquierda */}
        <div className="absolute -bottom-[15%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-cyan-600/25 via-sky-500/20 to-indigo-700/30 blur-[130px] animate-blob animation-delay-4000" />
        
        {/* Nebulosa Coral Sunset Accent - Inferior Derecha */}
        <div className="absolute -bottom-[10%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-t from-violet-600/25 via-pink-500/20 to-transparent blur-[120px] animate-blob" />
      </div>

      {/* 2. LAYER B: Interactive Cosmic Star Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 opacity-90 transition-opacity duration-1000"
      />

      {/* 3. LAYER C: iOS Glass Refraction Spotlight & Grid Vignette */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
        style={{
          background: mousePos.x > 0 
            ? `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.12), rgba(236, 72, 153, 0.05) 50%, transparent 80%)`
            : 'none'
        }}
      />

      {/* Subtle iOS Glass Mesh Texture & Noise Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-grid-pattern opacity-40 mix-blend-overlay" />
      
      {/* Edge Vignetting for Depth */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,5,16,0.6)_100%)]" />
    </div>
  );
};

