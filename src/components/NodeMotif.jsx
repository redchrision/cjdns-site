/**
 * Static constellation motif — a quiet echo of the hero mesh,
 * used as ambient decoration in content sections.
 * Inherits colour from `currentColor`; opacity handled in CSS.
 */
export default function NodeMotif({ className = '' }) {
  const nodes = [
    [12, 118], [58, 42], [104, 150], [150, 20], [176, 96],
    [214, 168], [238, 58], [196, 12], [86, 86],
  ];
  const edges = [
    [0, 1], [1, 8], [8, 2], [8, 4], [1, 3], [3, 7],
    [3, 4], [4, 5], [4, 6], [6, 7], [2, 5],
  ];
  return (
    <svg
      viewBox="0 0 250 180"
      className={`node-motif ${className}`}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1" fill="none">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            opacity={0.5 + (i % 3) * 0.16}
          />
        ))}
      </g>
      <g fill="currentColor">
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3 : 2} />
        ))}
      </g>
    </svg>
  );
}
