"use client";

import { motion } from "framer-motion";

const dots = [
    { cx: 72, cy: 45, fill: "#f59e0b", delay: 0.3 },
    { cx: 128, cy: 55, fill: "#10b981", delay: 0.5 },
    { cx: 95, cy: 35, fill: "#6366f1", delay: 0.7 },
    { cx: 110, cy: 75, fill: "#ec4899", delay: 0.9 },
    { cx: 80, cy: 70, fill: "#0ea5e9", delay: 1.1 },
];

export function GlobeVisual() {
    return (
        <motion.svg
            viewBox="0 0 200 120"
            fill="none"
            className="w-full h-auto"
            aria-hidden
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Globe wireframe */}
            <motion.ellipse
                cx="100"
                cy="60"
                rx="50"
                ry="50"
                stroke="var(--color-border)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
            <motion.ellipse
                cx="100"
                cy="60"
                rx="20"
                ry="50"
                stroke="var(--color-border)"
                strokeWidth="0.8"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
            />
            <line
                x1="50"
                y1="60"
                x2="150"
                y2="60"
                stroke="var(--color-border)"
                strokeWidth="0.8"
            />
            <line
                x1="60"
                y1="30"
                x2="140"
                y2="30"
                stroke="var(--color-border)"
                strokeWidth="0.5"
            />
            <line
                x1="60"
                y1="90"
                x2="140"
                y2="90"
                stroke="var(--color-border)"
                strokeWidth="0.5"
            />

            {/* Data center dots — pop in with pulse */}
            {dots.map((dot) => (
                <motion.g key={dot.cx}>
                    {/* Pulse ring */}
                    <motion.circle
                        cx={dot.cx}
                        cy={dot.cy}
                        r="6"
                        fill={dot.fill}
                        fillOpacity="0.2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: [0, 1.5, 1] }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: dot.delay,
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                    />
                    {/* Dot */}
                    <motion.circle
                        cx={dot.cx}
                        cy={dot.cy}
                        r="3"
                        fill={dot.fill}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.3,
                            delay: dot.delay,
                            type: "spring",
                            stiffness: 400,
                        }}
                    />
                </motion.g>
            ))}

            {/* Connecting arcs */}
            <motion.path
                d="M72 45 Q100 20 128 55"
                stroke="var(--color-brand-500)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
            />
            <motion.path
                d="M95 35 Q110 50 110 75"
                stroke="#6366f1"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.4 }}
            />
        </motion.svg>
    );
}
