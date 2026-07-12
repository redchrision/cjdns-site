import { useEffect, useRef } from 'react';

/**
 * Ambient mesh-routing background.
 * Nodes are laid out with slight drift; edges connect near neighbours;
 * "packets" travel along edges — a nod to the cjdns mesh protocol
 * the company is named after. Respects prefers-reduced-motion.
 */
export default function MeshCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    let nodes = [];
    let edges = [];
    let packets = [];

    const ROUTE = '91, 200, 184'; // sea-glass
    const NODE = '154, 178, 199'; // chalk-blue

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function build() {
      const count = Math.max(24, Math.floor((w * h) / 26000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: 1.2 + Math.random() * 1.6,
      }));
      edges = [];
      const maxDist = Math.min(w, h) * 0.28;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.hypot(dx, dy) < maxDist && Math.random() < 0.35) {
            edges.push([i, j]);
          }
        }
      }
      packets = [];
    }

    function spawnPacket() {
      if (!edges.length || packets.length > 6) return;
      const [a, b] = edges[Math.floor(Math.random() * edges.length)];
      packets.push({ a, b, t: 0, speed: 0.004 + Math.random() * 0.006 });
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }

      ctx.lineWidth = 1;
      for (const [i, j] of edges) {
        const a = nodes[i];
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        const alpha = Math.max(0, 0.16 - d / 4000);
        if (alpha <= 0) continue;
        ctx.strokeStyle = `rgba(${ROUTE}, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${NODE}, 0.5)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) {
        if (Math.random() < 0.03) spawnPacket();
        for (let k = packets.length - 1; k >= 0; k--) {
          const p = packets[k];
          p.t += p.speed;
          if (p.t >= 1) {
            packets.splice(k, 1);
            continue;
          }
          const a = nodes[p.a];
          const b = nodes[p.b];
          const x = a.x + (b.x - a.x) * p.t;
          const y = a.y + (b.y - a.y) * p.t;
          const glow = ctx.createRadialGradient(x, y, 0, x, y, 8);
          glow.addColorStop(0, `rgba(${ROUTE}, 0.9)`);
          glow.addColorStop(1, `rgba(${ROUTE}, 0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!reduced) raf = requestAnimationFrame(frame);
    }

    resize();
    frame();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="mesh-canvas" aria-hidden="true" />;
}
