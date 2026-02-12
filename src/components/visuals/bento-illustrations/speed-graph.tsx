"use client";

import { motion } from "framer-motion";

export function SpeedGraph() {
    return (
        <motion.svg
            viewBox="0 0 260 100"
            fill="none"
            className="w-full h-auto"
            aria-hidden
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <defs>
                <linearGradient
                    id="speedGrad"
                    x1="0"
                    y1="0"
                    x2="260"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="var(--color-brand-400)" />
                    <stop offset="1" stopColor="var(--color-brand-600)" />
                </linearGradient>
                <linearGradient
                    id="speedFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop
                        stopColor="var(--color-brand-500)"
                        stopOpacity="0.3"
                    />
                    <stop
                        offset="1"
                        stopColor="var(--color-brand-500)"
                        stopOpacity="0"
                    />
                </linearGradient>
            </defs>

            {/* Area fill — draws in */}
            <motion.path
                d="M0 80 Q30 75 52 60 T104 30 T156 20 T208 15 T260 10 V100 H0 Z"
                fill="url(#speedFill)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
            />

            {/* Line — draws in */}
            <motion.path
                d="M0 80 Q30 75 52 60 T104 30 T156 20 T208 15 T260 10"
                stroke="url(#speedGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Data points — pop in sequentially */}
            {[
                { cx: 52, cy: 60, r: 3, delay: 0.5 },
                { cx: 104, cy: 30, r: 3, delay: 0.7 },
                { cx: 156, cy: 20, r: 3, delay: 0.9 },
                { cx: 208, cy: 15, r: 3, delay: 1.1 },
                { cx: 260, cy: 10, r: 4, delay: 1.3 },
            ].map((dot) => (
                <motion.circle
                    key={dot.cx}
                    cx={dot.cx}
                    cy={dot.cy}
                    r={dot.r}
                    fill="var(--color-brand-500)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: dot.delay,
                        type: "spring",
                        stiffness: 300,
                    }}
                />
            ))}

            {/* Pulse ring on last point */}
            <motion.circle
                cx="260"
                cy="10"
                r="8"
                fill="var(--color-brand-600)"
                fillOpacity="0.2"
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1.4, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.3 }}
            />
        </motion.svg>
    );
}
