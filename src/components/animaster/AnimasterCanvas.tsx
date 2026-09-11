import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export function AnimasterCanvas({
  className = "absolute inset-0 pointer-events-auto",
}: {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let cachedRect: DOMRect = canvas.getBoundingClientRect();

    const isMobile = window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches;
    const targetParticleCount = isMobile ? 22 : 45;
    const connectionDist = isMobile ? 90 : 125;

    const particles: Particle[] = [];
    const ripples: Ripple[] = [];
    const mouse = { x: -1000, y: -1000, active: false, radius: 130 };

    // Cached accent color to avoid calling getComputedStyle in 60fps loop
    let cachedAccent = "#10B981";
    const updateAccent = () => {
      const color = getComputedStyle(document.documentElement).getPropertyValue("--accent-color").trim();
      if (color) cachedAccent = color;
    };
    updateAccent();
    const accentInterval = setInterval(updateAccent, 1500);

    const resize = () => {
      cachedRect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Cap DPR at 1.5 for buttery 60-120fps
      width = cachedRect.width;
      height = cachedRect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
      ctx.scale(dpr, dpr);

      if (particles.length === 0) {
        for (let i = 0; i < targetParticleCount; i++) {
          const alpha = 0.25 + Math.random() * 0.55;
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: 1.2 + Math.random() * 1.8,
            alpha,
            baseAlpha: alpha,
          });
        }
      } else {
        particles.forEach((p) => {
          p.x = Math.min(Math.max(p.x, 0), width);
          p.y = Math.min(Math.max(p.y, 0), height);
        });
      }
    };

    resize();
    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(canvas);

    const onScroll = () => {
      cachedRect = canvas.getBoundingClientRect();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX - cachedRect.left;
      mouse.y = e.clientY - cachedRect.top;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const onClick = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX - cachedRect.left,
        y: e.clientY - cachedRect.top,
        radius: 0,
        maxRadius: 160,
        alpha: 0.75,
      });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      window.addEventListener("mouseleave", onMouseLeave, { passive: true });
    }
    canvas.addEventListener("click", onClick, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const ripple = ripples[r];
        ripple.radius += 3.5;
        ripple.alpha *= 0.94;

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = cachedAccent;
        ctx.globalAlpha = ripple.alpha;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (ripple.radius > ripple.maxRadius || ripple.alpha < 0.01) {
          ripples.splice(r, 1);
        }
      }

      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;
          const mouseRadiusSq = mouse.radius * mouse.radius;

          if (distSq < mouseRadiusSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / mouse.radius) * 0.8;
            p.x -= (dx / dist) * force * 2.2;
            p.y -= (dy / dist) * force * 2.2;
            p.alpha = Math.min(1, p.baseAlpha + 0.35);
          } else {
            p.alpha += (p.baseAlpha - p.alpha) * 0.04;
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = cachedAccent;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby particles in batches without ctx.save/restore
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDist * connectionDist) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / connectionDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = cachedAccent;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(accentInterval);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full will-change-transform ${className}`}
      style={{ opacity: 0.85, contain: "strict" }}
    />
  );
}
