import React, { useEffect, useRef } from 'react';

export const GalaxyBackground = () => {
  const canvasRef = useRef(null);

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
      radius: 180,
      active: false,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
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

    // Galaxy Particle Palette
    const colors = [
      'rgba(168, 85, 247, ',   // Vibrant Purple
      'rgba(147, 51, 234, ',   // Deep Purple
      'rgba(124, 58, 237, ',   // Violet
      'rgba(192, 132, 252, ',  // Lavender Bright
      'rgba(56, 189, 248, ',   // Cyan Star Accent
      'rgba(236, 72, 153, ',   // Pink Nebula Spark
      'rgba(255, 255, 255, ',  // Pure Star White
    ];

    const particleCount = Math.min(Math.floor((width * height) / 9000), 160);
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
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        
        // Galaxy spiral attributes
        this.angle = Math.random() * Math.PI * 2;
        this.angularSpeed = (Math.random() - 0.5) * 0.005;
        this.orbitRadius = Math.random() * (Math.min(width, height) * 0.4);

        // Pulse speed
        this.pulse = Math.random() * Math.PI;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
      }

      update() {
        // Smoothly update pulse alpha
        this.pulse += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulse) * 0.25;
        if (this.alpha < 0.1) this.alpha = 0.1;

        // Base ambient movement
        this.x += this.vx;
        this.y += this.vy;

        // Wrap edges
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
          this.x += Math.cos(swirlAngle) * force * 2.2 + Math.cos(angle) * force * 0.8;
          this.y += Math.sin(swirlAngle) * force * 2.2 + Math.sin(angle) * force * 0.8;
          
          // Slightly enlarge and brighten when near mouse cursor
          this.alpha = Math.min(1, this.alpha + force * 0.4);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorPrefix}${this.alpha})`;
        
        // Glow effect for larger stars
        if (this.radius > 1.8) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = `${this.colorPrefix}0.8)`;
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
      // Smooth lerp mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Draw faint constellation galaxy light webs around mouse cursor
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        // Connect particles near the mouse cursor or close to each other
        if (mouse.active) {
          const dxMouse = mouse.x - p1.x;
          const dyMouse = mouse.y - p1.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < 140) {
            for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const dx = p1.x - p2.x;
              const dy = p1.y - p2.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < 90) {
                const alpha = (1 - dist / 90) * (1 - distMouse / 140) * 0.35;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
                ctx.lineWidth = 0.6;
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

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-1000"
    />
  );
};
