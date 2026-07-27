"use client";

import { motion } from "framer-motion";

// Node graph coordinates loosely evoke a distribution map: a central hub
// radiating out to endpoints — the actual shape of the work AMITOP does.
const nodes = [
  { id: "hub", x: 260, y: 220, r: 7 },
  { id: "a", x: 90, y: 90, r: 4 },
  { id: "b", x: 420, y: 70, r: 4 },
  { id: "c", x: 60, y: 320, r: 4 },
  { id: "d", x: 460, y: 300, r: 4 },
  { id: "e", x: 260, y: 400, r: 4 },
  { id: "f", x: 340, y: 130, r: 4 },
];

const edges: [string, string][] = [
  ["hub", "a"],
  ["hub", "b"],
  ["hub", "c"],
  ["hub", "d"],
  ["hub", "e"],
  ["hub", "f"],
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function HeroNetworkVisual() {
  return (
    <svg
      viewBox="0 0 520 460"
      className="h-full w-full"
      role="img"
      aria-label="Animated diagram of a central hub distributing network signal to connected sites"
    >
      {edges.map(([from, to], i) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        if (!a || !b) return null;
        return (
          <g key={`${from}-${to}`}>
            <line
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(255,255,255,0.14)"
              strokeWidth={1.5}
            />
            <motion.circle
              r={3}
              fill="#06B6D4"
              initial={{ opacity: 0 }}
              animate={{
                cx: [a.x, b.x],
                cy: [a.y, b.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.35,
                ease: "easeInOut",
              }}
            />
          </g>
        );
      })}

      {nodes.map((n) => (
        <g key={n.id}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r + 6}
            fill="none"
            stroke="#2563EB"
            strokeWidth={1}
            initial={{ opacity: 0.5, scale: 0.9 }}
            animate={{ opacity: [0.5, 0, 0.5], scale: [0.9, 1.6, 0.9] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: n.id === "hub" ? 0 : 0.6,
            }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.id === "hub" ? "#06B6D4" : "#FFFFFF"}
          />
        </g>
      ))}
    </svg>
  );
}
