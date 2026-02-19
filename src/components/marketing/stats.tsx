import { StatCard, type Stat } from "./stats-card";

const StatsData: Stat[] = [
    { value: 99.9, suffix: "%", label: "Uptime Guaranteed" },
    { value: 150, suffix: "K+", label: "Active Websites" },
    { value: 300, prefix: "<", suffix: "ms", label: "Avg Response Time" },
    { value: 24, suffix: "/7", label: "Expert Support" },
    { value: 50, suffix: "M+", label: "Requests Daily" },
];

interface StatsProps {
    stats?: Stat[];
}

export function Stats({ stats = StatsData }: StatsProps) {
    return (
        <div className="container max-w-7xl mx-auto px-6 lg:px-12 overflow-hidden">
            <div className="flex items-center justify-between gap-6 sm:gap-8 py-16">
                {stats.map((stat, i) => (
                    <StatCard key={stat.label} stat={stat} index={i} />
                ))}
            </div>
        </div>
    );
}
