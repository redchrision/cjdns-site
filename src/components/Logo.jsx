/**
 * CJDNS mark: the letter C drawn as a mesh constellation.
 * Five peers form the C; the open side faces a smaller node
 * reachable by dashed links — a network that new peers can join.
 */
export default function Logo({ size = 26 }) {
  // Rim nodes on a circle of r=10 around (16,16), opening to the right.
  const A = [21, 7.34]; // 60°
  const B = [11, 7.34]; // 120°
  const C = [6, 16]; // 180°
  const D = [11, 24.66]; // 240°
  const E = [21, 24.66]; // 300°
  const S = [27.5, 16]; // satellite peer in the opening

  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      role="img"
      aria-label="CJDNS"
    >
      {/* chords — the mesh inside the C */}
      <g stroke="var(--route)" strokeWidth="1" opacity="0.35">
        <line x1={B[0]} y1={B[1]} x2={D[0]} y2={D[1]} />
        <line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} />
        <line x1={C[0]} y1={C[1]} x2={E[0]} y2={E[1]} />
      </g>
      {/* main routed path — the C itself */}
      <g stroke="var(--route)" strokeWidth="1.7" strokeLinecap="round">
        <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} />
        <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} />
        <line x1={C[0]} y1={C[1]} x2={D[0]} y2={D[1]} />
        <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} />
      </g>
      {/* links reaching toward the joining peer */}
      <g
        stroke="var(--chalk)"
        strokeWidth="0.9"
        strokeDasharray="1.6 2.2"
        opacity="0.55"
      >
        <line x1={A[0]} y1={A[1]} x2={S[0]} y2={S[1]} />
        <line x1={E[0]} y1={E[1]} x2={S[0]} y2={S[1]} />
      </g>
      {/* peers */}
      <g fill="var(--route)">
        <circle cx={B[0]} cy={B[1]} r="2" />
        <circle cx={C[0]} cy={C[1]} r="2" />
        <circle cx={D[0]} cy={D[1]} r="2" />
      </g>
      <g fill="var(--chalk)">
        <circle cx={A[0]} cy={A[1]} r="2.5" />
        <circle cx={E[0]} cy={E[1]} r="2.5" />
        <circle cx={S[0]} cy={S[1]} r="1.5" opacity="0.8" />
      </g>
    </svg>
  );
}
