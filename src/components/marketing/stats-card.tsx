"use client";

import { CountUp } from "@/components/ui/count-up";
import { motion } from "motion/react";

export interface Stat {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
}

interface StatCardProps {
    stat: Stat;
    index: number;
}

function ValueElement({ stat, delay }: { stat: Stat; delay: number }) {
    return (
        <span className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl">
            {stat.prefix && <span className="inline">{stat.prefix}</span>}

            <CountUp
                to={stat.value}
                from={0}
                duration={1}
                delay={delay}
                separator=","
                className="inline"
            />

            {stat.suffix && <span className="inline">{stat.suffix}</span>}
        </span>
    );
}

function LabelElement({ stat }: { stat: Stat }) {
    return (
        <span className="block text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted-foreground/90 text-center">
            {stat.label}
        </span>
    );
}

export function StatCard({ stat, index }: StatCardProps) {
    const odd = index % 2 === 1;
    const y = odd ? "40px" : "-40px";
    const delay = 0.2 + index * 0.15;

    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: y }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            className="flex flex-col gap-2"
        >
            {odd ? (
                <>
                    <LabelElement stat={stat} />
                    <ValueElement stat={stat} delay={delay} />
                </>
            ) : (
                <>
                    <ValueElement stat={stat} delay={delay} />
                    <LabelElement stat={stat} />
                </>
            )}
        </motion.div>
    );
}
