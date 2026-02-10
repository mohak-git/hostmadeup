import { cn } from "@/lib/utils";

interface FeatureItem {
    title: string;
    desc: string;
}

interface FeatureCardGridProps {
    features: FeatureItem[];
    className?: string;
    columns?: 2 | 3 | 4;
}

export function FeatureCardGrid({
    features,
    className,
    columns = 3,
}: FeatureCardGridProps) {
    const colsClass = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
    };

    return (
        <div
            className={cn(
                "grid gap-0 border border-border",
                colsClass[columns],
                className,
            )}
        >
            {features.map((item, i) => (
                <div key={i} className="border-r border-b border-border p-6">
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
            ))}
        </div>
    );
}

interface SimpleCardGridProps {
    items: { title: string; desc: string }[];
    className?: string;
    columns?: 3 | 4;
    centered?: boolean;
    background?: "default" | "background";
}

/**
 * Simpler card grid for items without borders between them
 * Used for values, use cases, etc.
 */
export function SimpleCardGrid({
    items,
    className,
    columns = 4,
    centered = false,
    background = "default",
}: SimpleCardGridProps) {
    const colsClass = {
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
    };

    return (
        <div
            className={cn(
                "grid gap-0 border border-border",
                colsClass[columns],
                className,
            )}
        >
            {items.map((item, i) => (
                <div
                    key={i}
                    className={cn(
                        "border-r border-border last:border-r-0 p-6",
                        centered && "text-center",
                        background === "background" && "bg-background",
                    )}
                >
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
            ))}
        </div>
    );
}
