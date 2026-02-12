"use client";

import { motion } from "framer-motion";

const rows = [
    { dot: "bg-emerald-500", label: "WordPress", value: "1-click" },
    { dot: "bg-brand-500", label: "Auto Backup", value: "Daily" },
    { dot: "bg-indigo-500", label: "API", value: "REST + GQL" },
];

export function DashboardVisual() {
    return (
        <div className="space-y-2 font-mono text-[11px]">
            {rows.map((row, i) => (
                <motion.div
                    key={row.label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/60 border border-border/50"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.12 }}
                >
                    <div className={`w-2 h-2 rounded-full ${row.dot}`} />
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="ml-auto text-foreground font-medium">
                        {row.value}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}
