import { datacenters as datacenterData } from "@/config/features";
import { cn } from "@/lib/utils";

interface DatacenterGridProps {
    showLatency?: boolean;
    className?: string;
}

export function DatacenterGrid({
    showLatency = false,
    className,
}: DatacenterGridProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 border border-border",
                className,
            )}
        >
            {datacenterData.map((dc) => (
                <div
                    key={dc.code}
                    className="border-r border-b border-border p-4"
                >
                    <div className="font-mono text-lg font-bold">{dc.code}</div>
                    <div className="text-xs text-muted-foreground">
                        {dc.location}
                    </div>
                    {showLatency && (
                        <div className="font-mono text-xs text-muted-foreground mt-1">
                            {dc.latency}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
