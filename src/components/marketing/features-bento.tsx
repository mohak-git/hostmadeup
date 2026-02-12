"use client";

import {
    DashboardVisual,
    GlobeVisual,
    SpeedGraph,
    UptimeRing,
} from "@/components/visuals/bento-illustrations";
import { motion } from "framer-motion";

export function FeaturesBento() {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-[280px_240px_240px] gap-3 md:gap-4">
            {(() => {
                return (
                    <motion.div
                        className="md:col-span-2 md:row-span-2 justify-between relative rounded-2xl overflow-hidden bg-linear-to-b from-indigo-50 to-white dark:from-indigo-950/40 dark:to-zinc-900 border border-indigo-200/50 dark:border-indigo-500/20 p-8 flex flex-col group cursor-default"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold tracking-tight mb-1">
                                Lightning Fast{" "}
                                <span className="font-mono uppercase tracking-widest text-brand-400">
                                    {" "}
                                    Performance
                                </span>
                            </h3>
                            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed my-6">
                                NVMe SSD storage and LiteSpeed servers deliver
                                sub-100ms response times globally.
                            </p>
                        </div>
                        <div className="relative z-10">
                            <SpeedGraph />
                        </div>
                        <div className="relative z-10 flex justify-between *:w-1/3 gap-3 mt-4 pt-4 border-t border-white/10">
                            {[
                                { k: "TTFB", v: "<100ms" },
                                { k: "SSD", v: "NVMe Gen4" },
                                { k: "CDN", v: "Included" },
                            ].map(({ k, v }) => (
                                <div
                                    key={k}
                                    className="bg-brand-50/60 dark:bg-brand-500/10 rounded-lg px-3 py-2"
                                >
                                    <div className="text-[10px] uppercase tracking-wider text-brand-400 font-semibold">
                                        {k} :
                                    </div>
                                    <div className="font-mono text-sm text-brand-700 dark:text-brand-300 font-medium">
                                        {v}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            })()}

            {/* ───────── Cell 2: Enterprise Security — features[1] ───────── */}
            {(() => {
                return (
                    <motion.div
                        className="md:col-span-2 relative rounded-2xl overflow-hidden bg-linear-to-br from-zinc-900 via-zinc-900 to-brand-950 text-white p-8 flex flex-col justify-between group cursor-default"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.08 }}
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
                                Enterprise{" "}
                                <span className="font-mono uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
                                    {" "}
                                    Security
                                </span>
                            </h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
                                Advanced DDoS protection, WAF, and free SSL
                                certificates keep your sites secure.
                            </p>
                        </div>

                        <div className="relative z-10 grid grid-cols-3 gap-3 pt-4 border-t border-indigo-200/40 dark:border-indigo-500/20">
                            {[
                                { k: "DDoS", v: "10 Tbps+" },
                                { k: "WAF", v: "ModSecurity" },
                                { k: "SSL", v: "Let's Encrypt" },
                            ].map(({ k, v }) => (
                                <div
                                    key={k}
                                    className="bg-indigo-50/60 dark:bg-indigo-500/10 rounded-lg px-3 py-2"
                                >
                                    <div className="text-[10px] uppercase tracking-wider text-indigo-400 font-semibold">
                                        {k}
                                    </div>
                                    <div className="font-mono text-sm text-indigo-700 dark:text-indigo-300 font-medium">
                                        {v}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            })()}

            {/* ───────── Cell 3: Uptime — features[2] ───────── */}
            {(() => {
                return (
                    <motion.div
                        className="relative rounded-2xl overflow-hidden bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-500/20 p-6 flex flex-col justify-between group cursor-default"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.16 }}
                    >
                        <div className="flex items-center justify-center text-center mb-4">
                            <div className="w-1/2">
                                <UptimeRing />
                            </div>
                            <div className="w-1/2">
                                <h3 className="font-bold text-base mt-3 text-zinc-900 dark:text-white">
                                    99.99%
                                    <span className="font-mono uppercase tracking-widest text-emerald-400">
                                        {" "}
                                        Uptime
                                    </span>
                                </h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                                    Redundant infra &amp; auto failover
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-emerald-200/40 dark:border-emerald-500/20">
                            {[
                                { k: "Uptime", v: "99.99%" },
                                { k: "Failover", v: "Auto" },
                                { k: "Monitor", v: "24/7" },
                            ].map(({ k, v }) => (
                                <div
                                    key={k}
                                    className="bg-emerald-100/60 dark:bg-emerald-500/10 rounded-lg px-2 py-2"
                                >
                                    <div className="text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                                        {k}
                                    </div>
                                    <div className="font-mono text-xs text-emerald-700 dark:text-emerald-300 font-medium">
                                        {v}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            })()}

            {/* ───────── Cell 4: Global Network — features[3] ───────── */}
            {(() => {
                return (
                    <motion.div
                        className="relative rounded-2xl overflow-hidden bg-zinc-900 text-white p-6 flex flex-col justify-between group cursor-default"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.24 }}
                    >
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col items-center mb-2 mt-3">
                                <h3 className="font-bold text-base">
                                    Global{" "}
                                    <span className="font-mono uppercase tracking-widest text-amber-400">
                                        {" "}
                                        Network
                                    </span>
                                </h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                                    Ensures low latency for your visitors
                                </p>
                            </div>
                            <GlobeVisual />
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                            {[
                                { k: "Centers", v: "12" },
                                { k: "Latency", v: "<50ms" },
                                { k: "Network", v: "40Gb" },
                            ].map(({ k, v }) => (
                                <div
                                    key={k}
                                    className="bg-white/5 rounded-lg px-2 py-2"
                                >
                                    <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                                        {k}
                                    </div>
                                    <div className="font-mono text-xs text-amber-400 font-medium">
                                        {v}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            })()}

            {/* ───────── Cell 5: 24/7 Support — features[4] ───────── */}
            {(() => {
                return (
                    <motion.div
                        className="md:col-span-2 relative rounded-2xl overflow-hidden p-7 flex items-center gap-8 group cursor-default bg-linear-to-r from-rose-50 via-white to-orange-50 dark:from-rose-950/20 dark:via-zinc-900 dark:to-orange-950/20 border border-rose-200/40 dark:border-rose-500/15"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.32 }}
                    >
                        <div className="relative z-10 flex-1 w-1/2">
                            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-1">
                                24/7{" "}
                                <span className="font-mono uppercase tracking-widest text-rose-500 dark:text-rose-400">
                                    {" "}
                                    Support
                                </span>
                            </h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                Real humans available around the clock via live
                                chat, phone, and tickets.
                            </p>
                        </div>
                        <div className="relative z-10 hidden md:flex flex-col gap-2 w-1/2">
                            {[
                                { k: "Response", v: "<5 min" },
                                { k: "Channels", v: "Chat, Phone, Email" },
                                { k: "Languages", v: "12+" },
                            ].map(({ k, v }) => (
                                <div
                                    key={k}
                                    className="bg-white/70 dark:bg-zinc-800/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-rose-100/60 dark:border-rose-500/10"
                                >
                                    <div className="font-mono text-sm font-bold text-zinc-900 dark:text-white">
                                        {k}
                                    </div>
                                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                                        {v}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            })()}

            {/* ───────── Cell 6: Management — features[5] ───────── */}
            {(() => {
                return (
                    <motion.div
                        className="md:col-span-2 relative rounded-2xl overflow-hidden bg-card border border-border p-7 flex flex-col md:flex-row md:items-center gap-6 group cursor-default"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex-1">
                            <h3 className="text-xl font-bold tracking-tight mb-1">
                                Easy{" "}
                                <span className="font-mono uppercase tracking-widest text-violet-500 dark:text-violet-400">
                                    {" "}
                                    Management
                                </span>
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Intuitive control panel with one-click installs,
                                backups, and monitoring.
                            </p>
                        </div>
                        <div className="md:w-64 shrink-0">
                            <DashboardVisual />
                        </div>
                    </motion.div>
                );
            })()}
        </div>
    );
}
