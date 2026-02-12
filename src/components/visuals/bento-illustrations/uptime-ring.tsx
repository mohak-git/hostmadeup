"use client";

import { motion } from "framer-motion";

export function UptimeRing() {
    return (
        <motion.svg
            viewBox="0 0 100 100"
            fill="none"
            className="w-20 h-auto"
            aria-hidden
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            {/* Background track */}
            <circle
                cx="50"
                cy="50"
                r="42"
                stroke="var(--color-border)"
                strokeWidth="4"
            />

            {/* Animated progress ring */}
            <motion.circle
                cx="50"
                cy="50"
                r="42"
                stroke="#10b981"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                transform="rotate(-90 50 50)"
                strokeDasharray="263.89"
                initial={{ strokeDashoffset: 263.89 }}
                whileInView={{ strokeDashoffset: 0.26 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
            />
        </motion.svg>
    );
}
