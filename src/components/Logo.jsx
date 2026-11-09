/**
 * CJDNS mark: the letter C drawn as a mesh constellation.
 * Five peers form the C; the open side faces a smaller node
 * reachable by dashed links — a network that new peers can join.
 *
 * tone="dark"  (default) for dark backgrounds — light accent nodes.
 * tone="light" for light backgrounds — ink accent nodes, deeper teal.
 * Below 24px the mesh chords are dropped and dots enlarged so the
 * mark stays readable (same simplification as the favicon).
 */
export const LOGO_COLORS = {
  dark: { route: '#5bc8b8', accent: '#e9f1f5' },
  light: { route: '#217868', accent: '#0c1b2a' },
};

export default function Logo({ size = 26, tone = 'dark', simple }) {
  const { route, accent } = LOGO_COLORS[tone] || LOGO_COLORS.dark;
  const small = simple ?? size < 24;

  // Rim nodes on a circle of r=10 around (16,16), opening to the right.
  const A = [21, 7.34]; // 60°
  const B = [11, 7.34]; // 120°
  const C = [6, 16]; // 180°
  const D = [11, 24.66]; // 240°
  const E = [21, 24.66]; // 300°
  const S = [27.5, 16]; // satellite peer in the opening

  const stroke = small ? 2.6 : 1.7;
  const rPeer = small ? 2.6 : 2;
  const rAccent = small ? 3.1 : 2.5;
  const rSat = small ? 2.2 : 1.5;

  return (
    <svg viewBox="0 0 32 32" width={size} height={size} role="img" aria-label="CJDNS">
      {!small && (
        <g stroke={route} strokeWidth="1" opacity="0.35">
          <line x1={B[0]} y1={B[1]} x2={D[0]} y2={D[1]} />
          <line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} />
          <line x1={C[0]} y1={C[1]} x2={E[0]} y2={E[1]} />
        </g>
      )}
      <g stroke={route} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <polyline points={[A, B, C, D, E].map((p) => p.join(',')).join(' ')} />
      </g>
      {!small && (
        <g stroke={accent} strokeWidth="0.9" strokeDasharray="1.6 2.2" opacity="0.55">
          <line x1={A[0]} y1={A[1]} x2={S[0]} y2={S[1]} />
          <line x1={E[0]} y1={E[1]} x2={S[0]} y2={S[1]} />
        </g>
      )}
      <g fill={route}>
        <circle cx={B[0]} cy={B[1]} r={rPeer} />
        <circle cx={C[0]} cy={C[1]} r={rPeer} />
        <circle cx={D[0]} cy={D[1]} r={rPeer} />
      </g>
      <g fill={accent}>
        <circle cx={A[0]} cy={A[1]} r={rAccent} />
        <circle cx={E[0]} cy={E[1]} r={rAccent} />
        <circle cx={S[0]} cy={S[1]} r={rSat} opacity={small ? 1 : 0.8} />
      </g>
    </svg>
  );
}
