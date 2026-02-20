"use client";

/**
 * Animated neural network SVG for the hero background.
 * Nodes are connected by lines with data pulses traveling along them.
 * Pure CSS animations — no JS runtime cost.
 */

// Node positions forming a brain-like cluster
const nodes = [
  // Core cluster
  { x: 400, y: 400, r: 5, layer: "core" },
  { x: 340, y: 340, r: 4, layer: "core" },
  { x: 460, y: 340, r: 4, layer: "core" },
  { x: 340, y: 460, r: 3.5, layer: "core" },
  { x: 460, y: 460, r: 3.5, layer: "core" },
  // Inner ring
  { x: 300, y: 280, r: 3.5, layer: "inner" },
  { x: 500, y: 280, r: 3, layer: "inner" },
  { x: 280, y: 400, r: 3, layer: "inner" },
  { x: 520, y: 400, r: 3.5, layer: "inner" },
  { x: 300, y: 520, r: 3, layer: "inner" },
  { x: 500, y: 520, r: 3, layer: "inner" },
  { x: 400, y: 260, r: 3, layer: "inner" },
  { x: 400, y: 540, r: 3, layer: "inner" },
  // Outer reach
  { x: 220, y: 240, r: 2.5, layer: "outer" },
  { x: 580, y: 240, r: 2.5, layer: "outer" },
  { x: 200, y: 400, r: 2, layer: "outer" },
  { x: 600, y: 400, r: 2.5, layer: "outer" },
  { x: 220, y: 560, r: 2, layer: "outer" },
  { x: 580, y: 560, r: 2, layer: "outer" },
  { x: 400, y: 180, r: 2, layer: "outer" },
  { x: 400, y: 620, r: 2, layer: "outer" },
  // Far scatter
  { x: 160, y: 320, r: 1.5, layer: "far" },
  { x: 640, y: 320, r: 1.5, layer: "far" },
  { x: 160, y: 480, r: 1.5, layer: "far" },
  { x: 640, y: 480, r: 1.5, layer: "far" },
  { x: 300, y: 160, r: 1.5, layer: "far" },
  { x: 500, y: 160, r: 1.5, layer: "far" },
  { x: 300, y: 640, r: 1.5, layer: "far" },
  { x: 500, y: 640, r: 1.5, layer: "far" },
];

// Connections between node indices
const connections: [number, number][] = [
  // Core mesh
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 2], [3, 4], [1, 3], [2, 4],
  // Core → inner
  [1, 5], [2, 6], [1, 7], [2, 8],
  [3, 9], [4, 10], [1, 11], [3, 12],
  [0, 11], [0, 12], [0, 7], [0, 8],
  // Inner → inner
  [5, 11], [6, 11], [5, 7], [6, 8],
  [9, 12], [10, 12], [9, 7], [10, 8],
  // Inner → outer
  [5, 13], [6, 14], [7, 15], [8, 16],
  [9, 17], [10, 18], [11, 19], [12, 20],
  // Outer → far
  [13, 21], [14, 22], [15, 23], [16, 24],
  [13, 25], [14, 26], [17, 27], [18, 28],
  [19, 25], [19, 26], [20, 27], [20, 28],
];

// Which connections get a traveling pulse (subset for subtlety)
const pulseConnections = [0, 1, 5, 6, 11, 12, 19, 20, 25, 26, 31, 32, 37, 38];

export default function HeroOrbit() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 800 800"
        className="w-[min(100vw,900px)] h-[min(90vh,900px)] opacity-[0.09]"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          {/* Pulse gradient for traveling dots */}
          <radialGradient id="node-glow">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connection lines */}
        {connections.map(([from, to], i) => {
          const a = nodes[from];
          const b = nodes[to];
          const isOuter =
            a.layer === "outer" || a.layer === "far" ||
            b.layer === "outer" || b.layer === "far";
          return (
            <line
              key={`conn-${i}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="white"
              strokeWidth={isOuter ? "0.4" : "0.7"}
              opacity={isOuter ? "0.3" : "0.5"}
            />
          );
        })}

        {/* Traveling pulses along connections */}
        {pulseConnections.map((ci, i) => {
          const [from, to] = connections[ci];
          const a = nodes[from];
          const b = nodes[to];
          const dur = 3 + (i % 4) * 0.8;
          const delay = i * 0.6;
          return (
            <circle key={`pulse-${i}`} r="2.5" fill="white" opacity="0">
              <animate
                attributeName="opacity"
                values="0;0.9;0.9;0"
                keyTimes="0;0.1;0.9;1"
                dur={`${dur}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <animateMotion
                dur={`${dur}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
                path={`M${a.x},${a.y} L${b.x},${b.y}`}
              />
            </circle>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const opacity =
            node.layer === "core" ? 1 :
            node.layer === "inner" ? 0.8 :
            node.layer === "outer" ? 0.5 : 0.3;
          return (
            <g key={`node-${i}`}>
              {/* Glow ring for core nodes */}
              {node.layer === "core" && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r * 3}
                  fill="url(#node-glow)"
                  opacity="0.15"
                  className="animate-pulse-soft"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              )}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill="white"
                opacity={opacity}
              />
            </g>
          );
        })}

        {/* Central brain glow */}
        <circle
          cx="400"
          cy="400"
          r="80"
          fill="url(#node-glow)"
          opacity="0.06"
          className="animate-pulse-soft"
        />
      </svg>
    </div>
  );
}
