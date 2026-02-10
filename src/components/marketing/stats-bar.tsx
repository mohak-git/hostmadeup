import { cn } from "@/lib/utils";

interface StatItem {
    value: string;
    label: string;
}

interface StatsBarProps {
    stats: StatItem[];
    className?: string;
    columns?: 3 | 4 | 5;
    variant?: "default" | "green";
}

export function StatsBar({
    stats,
    className,
    columns = 4,
    variant = "default",
}: StatsBarProps) {
    const colsClass = {
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        5: "md:grid-cols-5",
    };

    return (
        <div
            className={cn(
                "grid gap-0 border border-border",
                colsClass[columns],
                className,
            )}
        >
            {stats.map((item, i) => (
                <div
                    key={i}
                    className="border-r border-border last:border-r-0 p-6 text-center"
                >
                    <div
                        className={cn(
                            "font-mono text-3xl font-bold",
                            variant === "green" && "text-green-500",
                        )}
                    >
                        {item.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                        {item.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
