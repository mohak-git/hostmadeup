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
                "grid gap-6",
                columns === 2 && "md:grid-cols-2",
                columns === 3 && "md:grid-cols-3",
                className,
            )}
        >
            {features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || CheckCircle2;
                return (
                    <div
                        key={feature.title}
                        className="group p-6 bg-card border border-border/50 rounded-xl shadow-sm hover:shadow-md hover:border-brand-500/20 transition-all duration-300 hover:-translate-y-1"
                        style={{ transitionDelay: `${i * 50}ms` }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2.5 rounded-lg bg-muted text-foreground group-hover:bg-brand-50 group-hover:text-brand-600 dark:group-hover:bg-brand-950/50 dark:group-hover:text-brand-400 transition-colors duration-300">
                                <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-lg">
                                {feature.title}
                            </h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                            {feature.description}
                        </p>

                        {feature.specs && (
                            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/40">
                                {Object.entries(feature.specs).map(
                                    ([key, value]) => (
                                        <div key={key}>
                                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                                                {key}
                                            </div>
                                            <div className="font-mono text-xs font-medium bg-muted/50 px-2 py-1 rounded inline-block">
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
