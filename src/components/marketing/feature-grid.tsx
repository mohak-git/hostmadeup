import type { Feature } from "@/config/features";
import { cn } from "@/lib/utils";
import {
    CheckCircle2,
    Clock,
    Globe,
    Headphones,
    LucideIcon,
    Shield,
    Zap,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Zap,
    Shield,
    Clock,
    Globe,
    Headphones,
    CheckCircle2,
};

interface FeatureGridProps {
    features: Feature[];
    columns?: 2 | 3;
    className?: string;
}

export function FeatureGrid({
    features,
    columns = 3,
    className,
}: FeatureGridProps) {
    return (
        <div
            className={cn(
                "grid gap-0 border border-border",
                columns === 2 && "md:grid-cols-2",
                columns === 3 && "md:grid-cols-3",
                className,
            )}
        >
            {features.map((feature) => {
                const Icon = iconMap[feature.icon] || CheckCircle2;
                return (
                    <div
                        key={feature.title}
                        className="border-r border-b border-border last:border-r-0 p-6 bg-card hover:bg-accent/50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 border border-border">
                                <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold">{feature.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            {feature.description}
                        </p>

                        {feature.specs && (
                            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                                {Object.entries(feature.specs).map(
                                    ([key, value]) => (
                                        <div key={key}>
                                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                                                {key}
                                            </div>
                                            <div className="font-mono text-sm">
                                                {value}
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

interface SpecGridProps {
    specs: Record<string, string>;
    className?: string;
}

export function SpecGrid({ specs, className }: SpecGridProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-4 gap-0 border border-border",
                className,
            )}
        >
            {Object.entries(specs).map(([key, value]) => (
                <div
                    key={key}
                    className="border-r border-b border-border last:border-r-0 p-4 bg-card"
                >
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        {key}
                    </div>
                    <div className="font-mono text-lg font-bold">{value}</div>
                </div>
            ))}
        </div>
    );
}
